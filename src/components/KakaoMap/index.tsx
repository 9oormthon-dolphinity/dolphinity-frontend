import styled from "@emotion/styled";
import { useEffect } from "react";

export interface MapProps {
  latitude: number;
  longitude: number;
}

export default function KakaoMap({ latitude, longitude }: MapProps) {
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
            content: "<div>카카오</div>",
            latlng: new window.kakao.maps.LatLng(33.450705, 126.570677),
          },
          {
            content: "<div>생태연못</div>",
            latlng: new window.kakao.maps.LatLng(33.450936, 126.569477),
          },
          {
            content: "<div>텃밭</div>",
            latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
          },
          {
            content: "<div>근린공원</div>",
            latlng: new window.kakao.maps.LatLng(33.451393, 126.570738),
          },
        ];

        for (let i = 0; i < positions.length; i++) {
          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커의 위치
          });

          // 마커에 표시할 인포윈도우를 생성합니다
          const infowindow = new window.kakao.maps.InfoWindow({
            content: positions[i].content, // 인포윈도우에 표시할 내용
          });

          // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
          function makeOverListener(map: any, marker: any, infowindow: any) {
            return function () {
              infowindow.open(map, marker);
            };
          }

          // 인포윈도우를 닫는 클로저를 만드는 함수입니다
          function makeOutListener(infowindow: any) {
            return function () {
              infowindow.close();
            };
          }

          // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
          // 이벤트 리스너로는 클로저를 만들어 등록합니다
          // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
          window.kakao.maps.event.addListener(
            marker,
            "mouseover",
            makeOverListener(map, marker, infowindow)
          );
          window.kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));
        }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [longitude, latitude]);

  return <MapContainer id="map" />;
}

const MapContainer = styled.div`
  aspect-ratio: 320 / 220;
`;
