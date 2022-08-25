import styled from "@emotion/styled";
import { MouseEvent, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillChatTextFill } from "react-icons/bs";
import { IconPlus, IconMinus } from "@tabler/icons";

import {
  EditModal,
  MapContainer,
  ModalAddress,
  ModalBottom,
  ModalBottomData,
  ModalContents,
  ModalDetailBtn,
  ModalImage,
  ModalTitle,
} from "./styles";
import Typography from "components/Typography";
import { Ping } from "types/api";

export interface MapProps {
  latitude: number;
  longitude: number;
  pins: Ping[];
}

export default function KakaoMap({ latitude, longitude, pins }: MapProps) {
  const [opened, setOpened] = useState(false);
  const theme = useTheme();
  const [mapLevel, setMapLevel] = useState(10);

  console.log(pins);

  const ModalDataIcon = styled.div`
    font-size: 11px;
    margin: 8px 4px 0 0;
    color: ${theme.colors.deepBlue[0]};
    display: flex;
    align-items: center;
  `;

  const zoomInOut = (e: MouseEvent<HTMLButtonElement>) => {
    const { zoom } = e.currentTarget.dataset;
    if (zoom === undefined) return;
    setMapLevel((prev) => prev + +zoom);
  };

  // 현 위치는 latitude, longitude에 값 넣기

  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: mapLevel,
        };
        const map = new window.kakao.maps.Map(container, options);

        for (let i = 0; i < pins.length; i++) {
          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new window.kakao.maps.LatLng(pins[i].lat, pins[i].lng), // 마커의 위치
            clickable: true,
          });

          marker.setMap(map);

          kakao.maps.event.addListener(marker, "click", function () {
            const moveLatLon = new window.kakao.maps.LatLng(pins[i].lat, pins[i].lng);
            map.panTo(moveLatLon);
            setOpened(true);
            console.log(i);
          });
        }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [longitude, latitude, mapLevel, pins]);

  return (
    <MapContainer id="map">
      <div style={{ position: "absolute", zIndex: "5" }}>
        <button type="button" data-zoom={+1} onClick={zoomInOut}>
          <IconMinus />
        </button>
        <button type="button" data-zoom={-1} onClick={zoomInOut}>
          <IconPlus />
        </button>
        <button type="button">현위치</button>
      </div>
      <EditModal
        centered
        size={194}
        opened={opened}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <ModalImage>이미지</ModalImage>
        <ModalContents>
          <ModalTitle>title</ModalTitle>
          <ModalAddress>address</ModalAddress>
          <ModalBottom>
            <ModalBottomData>
              <ModalDataIcon>
                {/* <IconHeart size={12} color={theme.colors.deepBlue[0]} /> */}
                <AiFillHeart
                  color={theme.colors.deepBlue[0]}
                  size={11}
                  style={{ marginRight: "2px" }}
                />
                <Typography variant="paragraph2" color={theme.colors.deepBlue[0]} weight={300}>
                  312
                </Typography>
              </ModalDataIcon>
              <ModalDataIcon>
                <BsFillChatTextFill
                  color={theme.colors.deepBlue[0]}
                  size={11}
                  style={{ marginRight: "2px" }}
                />
                <Typography variant="paragraph2" color={theme.colors.deepBlue[0]} weight={300}>
                  댓글
                </Typography>
              </ModalDataIcon>
            </ModalBottomData>
            <ModalDetailBtn type="button">자세히보기</ModalDetailBtn>
          </ModalBottom>
        </ModalContents>
      </EditModal>
    </MapContainer>
  );
}
