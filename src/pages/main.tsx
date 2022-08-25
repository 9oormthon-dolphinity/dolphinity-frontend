import Clock from "components/Clock";
import KakaoMap from "components/KakaoMap";

import Header from "layout/Header";
import PageLayout from "layout/PageLayout";
import SubHeader from "layout/SubHeader";
import { GetServerSideProps } from "next";
import { apiAxios } from "utils/commonAxios";
import { Ping } from "types/api";
import { useEffect, useState } from "react";

interface Props {
  pins: Ping[];
}

const Main = ({ pins }: Props) => {
  const [nowLat, setNowLat] = useState(33.450701);
  const [nowLon, setNowLon] = useState(126.570667);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도
        setNowLat(lat);
        setNowLon(lon);
      });
    }
  }, []);

  return (
    <PageLayout noPadding>
      <Header noPadding={false} />
      <SubHeader />
      <Clock />
      <div style={{ width: "500px", height: "600px", position: "relative" }}>
        <KakaoMap latitude={nowLat} longitude={nowLon} pins={pins} />
      </div>
    </PageLayout>
  );
};
export default Main;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await apiAxios.get("/boards");
    return {
      props: {
        pins: res.data.data,
        error: false,
      },
    };
  } catch (err) {
    return {
      props: {
        error: true,
        data: {},
      },
    };
  }
};
