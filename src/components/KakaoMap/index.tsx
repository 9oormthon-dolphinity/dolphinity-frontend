import styled from "@emotion/styled";
import { MouseEvent, useEffect, useState } from "react";

export interface MapProps {
  latitude: number;
  longitude: number;
}

const NAMETEST = [
  { id: 0, name: "111111", color: "yellow" },
  { id: 1, name: "222222", color: "red" },
  { id: 2, name: "333333", color: "blue" },
  { id: 3, name: "444444", color: "green" },
];

export default function KakaoMap({ latitude, longitude }: MapProps) {
  const [isClicked, setIsClicked] = useState(0);
  const [testNumber] = useState(0);

  const PopupTest = styled.div`
    position: absolute;
    width: 300px;
    height: 400px;
    background-color: white;
    visibility: ${isClicked ? "visible" : "hidden"};
    z-index: 10000000000000000;
    top: 0;
  `;

  const handleCloseBtn = (e: MouseEvent<HTMLButtonElement>) => {
    setIsClicked(0);
  };

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

        // 마커를 표시할 위치입니다
        const position = new kakao.maps.LatLng(33.450701, 126.570667);

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          position: position,
          clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        });

        marker.setMap(map);

        // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
        const iwContent =
          "<div style='background : green; margin-bottom : 100px'>Hello World!</div>"; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        // 커스텀 오버레이가 표시될 위치입니다
        const iwposition = new kakao.maps.LatLng(33.450701, 126.570667);

        // 커스텀 오버레이를 생성합니다
        const customOverlay = new kakao.maps.CustomOverlay({
          position: iwposition,
          content: iwContent,
        });

        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(map);

        // const positions = [
        //   {
        //     id: 0,
        //     content: "<div>카카오</div>",
        //     latlng: new window.kakao.maps.LatLng(33.450705, 126.570677),
        //   },
        //   {
        //     id: 1,
        //     content: "<div>생태연못</div>",
        //     latlng: new window.kakao.maps.LatLng(33.450936, 126.569477),
        //   },
        //   {
        //     id: 2,
        //     content: "<div>텃밭</div>",
        //     latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
        //   },
        //   {
        //     id: 3,
        //     content: "<div>근린공원</div>",
        //     latlng: new window.kakao.maps.LatLng(33.451393, 126.570738),
        //   },
        // ];

        // for (let i = 0; i < positions.length; i++) {
        //   // 마커를 생성합니다
        //   const marker = new window.kakao.maps.Marker({
        //     map: map, // 마커를 표시할 지도
        //     position: positions[i].latlng, // 마커의 위치
        //     id: i,
        //   });

        //   function makeOutListener() {
        //     return function () {
        //       setIsClicked(1);
        //       setTestNumber(i);
        //       const moveLatLon = positions[i].latlng;
        //       map.panTo(moveLatLon);
        //     };
        //   }

        //   window.kakao.maps.event.addListener(marker, "click", makeOutListener());
        // }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [longitude, latitude]);

  return (
    <MapWrapper>
      <MapContainer id="map" />
      <PopupTest>
        id : {NAMETEST[testNumber].id}
        name : {NAMETEST[testNumber].name}
        color : {NAMETEST[testNumber].color}
        <button type="button" onClick={handleCloseBtn}>
          닫기
        </button>
      </PopupTest>
    </MapWrapper>
  );
}

const MapContainer = styled.div`
  width: 40vw;
  min-width: 600px;
  height: 100vh;
`;

const MapWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
