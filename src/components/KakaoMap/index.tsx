import styled from "@emotion/styled";
import { useEffect, useState } from "react";
// import { IconHeart } from "@tabler/icons";
import { useTheme } from "@emotion/react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillChatTextFill } from "react-icons/bs";
import {
  EditModal,
  MapContainer,
  MapWrapper,
  ModalAddress,
  ModalBottom,
  ModalBottomData,
  ModalContents,
  ModalDetailBtn,
  ModalImage,
  ModalTitle,
} from "./styles";
import Typography from "components/Typography";

export interface MapProps {
  latitude: number;
  longitude: number;
}

export default function KakaoMap({ latitude, longitude }: MapProps) {
  const [opened, setOpened] = useState(false);
  const theme = useTheme();

  const ModalDataIcon = styled.div`
    font-size: 11px;
    margin: 8px 4px 0 0;
    color: ${theme.colors.deepBlue[0]};
    display: flex;
    align-items: center;
  `;

  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: 10,
        };
        const map = new window.kakao.maps.Map(container, options);

        const positions = [
          {
            id: 0,
            content: "<div>카카오</div>",
            latlng: new window.kakao.maps.LatLng(33.450705, 126.570677),
          },
          {
            id: 1,
            content: "<div>생태연못</div>",
            latlng: new window.kakao.maps.LatLng(33.450936, 126.569477),
          },
          {
            id: 2,
            content: "<div>텃밭</div>",
            latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
          },
          {
            id: 3,
            content: "<div>근린공원</div>",
            latlng: new window.kakao.maps.LatLng(33.451393, 126.570738),
          },
        ];

        for (let i = 0; i < positions.length; i++) {
          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커의 위치
            clickable: true,
          });

          marker.setMap(map);

          kakao.maps.event.addListener(marker, "click", function () {
            const moveLatLon = positions[i].latlng;
            map.panTo(moveLatLon);
            setOpened(true);
          });
        }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [longitude, latitude]);

  return (
    <MapWrapper>
      <MapContainer id="map">
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
    </MapWrapper>
  );
}
