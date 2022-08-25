import Clock from "components/Clock";
import KakaoMap from "components/KakaoMap";

import Header from "layout/Header";
import PageLayout from "layout/PageLayout";
import SubHeader from "layout/SubHeader";

const Main = () => {
  return (
    <PageLayout noPadding>
      <Header noPadding={false} />
      <SubHeader />
      <Clock />
      <div style={{ width: "400px", height: "600px", position: "relative" }}>
        <KakaoMap latitude={33.450701} longitude={126.570667} />
      </div>
    </PageLayout>
  );
};
export default Main;
