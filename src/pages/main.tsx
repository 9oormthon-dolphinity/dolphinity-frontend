import Clock from "components/Clock";
import KakaoMap from "components/KakaoMap";
import Header from "layout/Header";
import PageLayout from "layout/PageLayout";
import SubHeader from "layout/SubHeader";
import { IconPin } from "@tabler/icons";
import FloatingButton from "components/FloatingButton";
import { useState, useMemo, useEffect } from "react";
import styled from "@emotion/styled";
import { Drawer } from "@mantine/core";
import Register from "components/Register";
import { GiDolphin, GiSpermWhale } from "react-icons/gi";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { apiAxios } from "utils/commonAxios";
import { Ping } from "types/api";

const EditDrawer = styled(Drawer)`
  .mantine-Drawer-root {
    position: relative;
  }
  .mantine-Drawer-drawer {
    background-color: ${({ theme }) => theme.colors.deepBlue[0]};
    border-radius: 32px 32px 0 0;
    height: 640px;
  }
`;

interface Props {
  pins: Ping[];
}

const Main = ({ pins }: Props) => {
  const [drawOpen, setDrawOpen] = useState(false);
  const router = useRouter();
  const actions = useMemo(
    () => [
      { label: "등록하기", icon: <IconPin />, onClick: () => setDrawOpen((prev) => !prev) },
      { label: "남방큰돌고래란?", icon: <GiDolphin />, onClick: () => router.push("/dolphin") },
      { label: "돌고래 보는방법", icon: <GiSpermWhale />, onClick: () => router.push("/watch") },
    ],
    [router]
  );
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
      <div
        style={{
          width: "100%",
          height: "600px",
          position: "relative",
          padding: "0px 8px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <KakaoMap latitude={nowLat} longitude={nowLon} pins={pins} />
      </div>
      {!drawOpen && <FloatingButton actions={actions} />}
      <EditDrawer position="bottom" opened={drawOpen} onClose={() => setDrawOpen(false)}>
        <Register />
      </EditDrawer>
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
