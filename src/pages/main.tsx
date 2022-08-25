import KakaoMap from "components/KakaoMap";
import Header from "layout/Header";
import PageLayout from "layout/PageLayout";

const Main = () => {
  return (
    <PageLayout>
      <Header />
      <div style={{ width: "400px", height: "600px", position: "relative" }}>
        <KakaoMap latitude={33.450701} longitude={126.570667} />
      </div>
    </PageLayout>
  );
};
export default Main;
