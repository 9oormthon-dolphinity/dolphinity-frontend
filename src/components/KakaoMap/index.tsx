import styled from "@emotion/styled";
import { MouseEvent, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { AiFillHeart } from "react-icons/ai";
import { IconPlus, IconMinus, IconCurrentLocation } from "@tabler/icons";
import Image from "components/Image";

import {
  EditModal,
  MapContainer,
  ModalAddress,
  ModalBottom,
  ModalBottomData,
  ModalContents,
  ModalDetailBtn,
  ModalTitle,
} from "./styles";
import Typography from "components/Typography";
import { Ping } from "types/api";
import { useRouter } from "next/router";

export interface MapProps {
  latitude: number;
  longitude: number;
  pins: Ping[];
}

export default function KakaoMap({ latitude, longitude, pins }: MapProps) {
  const [opened, setOpened] = useState(false);
  const theme = useTheme();
  const [mapLevel, setMapLevel] = useState(10);
  const [pinData, setPinData] = useState<Ping>();
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

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
      setIsLoading(false);
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: mapLevel,
        };
        const map = new window.kakao.maps.Map(container, options);

        const moveBtn = document.getElementById("moveBtn");
        moveBtn?.addEventListener("click", function (event) {
          const moveLatLon = new window.kakao.maps.LatLng(latitude, longitude);
          map.panTo(moveLatLon);
        });

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
            setPinData(pins[i]);
          });
        }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [longitude, latitude, mapLevel, pins]);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            width: "500px",
            height: "700px",
            position: "relative",
          }}
        >
          {/* <EditOverlay visible={true} /> */}
        </div>
      ) : (
        <MapContainer id="map">
          <div style={{ position: "absolute", zIndex: "5", bottom: "10px", left: "10px" }}>
            <button type="button" data-zoom={+1} onClick={zoomInOut}>
              <IconMinus />
            </button>
            <button type="button" data-zoom={-1} onClick={zoomInOut}>
              <IconPlus />
            </button>
            <button type="button" id="moveBtn">
              <IconCurrentLocation />
            </button>
          </div>
          <EditModal
            centered
            size={300}
            opened={opened}
            withCloseButton={false}
            onClose={() => setOpened(false)}
          >
            <div style={{ width: "100%", height: "160px", position: "relative" }}>
              <Image
                src={pinData?.img as string}
                alt="dolphin image"
                layout="fill"
                objectFit="cover"
                quality={100}
                style={{ filter: "brightness(85%)" }}
              />
            </div>
            <ModalContents>
              <ModalTitle>{pinData?.title}</ModalTitle>
              <ModalAddress>{pinData?.address}</ModalAddress>
              <ModalBottom>
                <ModalBottomData>
                  <ModalDataIcon>
                    <AiFillHeart
                      color={theme.colors.deepBlue[0]}
                      size={14}
                      style={{ marginRight: "2px" }}
                    />
                    <Typography variant="paragraph" color={theme.colors.deepBlue[0]} weight={400}>
                      {pinData?.like}
                    </Typography>
                  </ModalDataIcon>
                </ModalBottomData>
                <ModalDetailBtn type="button" onClick={() => router.push(`post/${pinData?.id}`)}>
                  자세히보기
                </ModalDetailBtn>
              </ModalBottom>
            </ModalContents>
          </EditModal>
        </MapContainer>
      )}
    </>
  );
}
