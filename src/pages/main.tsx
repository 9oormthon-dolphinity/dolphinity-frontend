import Clock from "components/Clock";
import KakaoMap from "components/KakaoMap";

import Header from "layout/Header";
import PageLayout from "layout/PageLayout";
import SubHeader from "layout/SubHeader";
import { GetServerSideProps } from "next";
import { apiAxios } from "utils/commonAxios";
import { Ping } from "types/api";

interface Props {
  pins: Ping[];
}

const Main = ({ pins }: Props) => {
  return (
    <PageLayout noPadding>
      <Header noPadding={false} />
      <SubHeader />
      <Clock />
      <div style={{ width: "500px", height: "600px", position: "relative" }}>
        <KakaoMap latitude={33.450701} longitude={126.570667} pins={pins} />
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
