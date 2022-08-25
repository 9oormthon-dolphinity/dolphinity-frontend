import Head from "next/head";
import PageLayout from "layout/PageLayout";
import Image from "components/Image";
import Typography from "components/Typography";
import styled from "@emotion/styled";
import Background from "components/intro/Background";
import IntroFooter from "components/intro/IntroFooter";

const LogoWrapper = styled.div`
  position: relative;
  margin-left: -12px;
  line-height: 1;
`;

export default function Dolphin() {
  return (
    <PageLayout center={false}>
      <Head>
        <title>Dolfinity</title>
        <meta name="description" content="9oormthon Dolfinity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background src="/dolphin.png" />
      <div style={{ marginTop: "80px" }}>
        <div style={{ marginBottom: "10px" }}>
          <LogoWrapper>
            <Image src="/logoWhite.svg" alt="logo" width="180px" height="18px" priority />
          </LogoWrapper>
        </div>
      </div>
      <div style={{ zIndex: 999, marginBottom: "20px" }}>
        <Typography variant="h2" color="white" weight={300}>
          남방 큰 돌고래
        </Typography>
      </div>
      <Typography variant="paragraph" color="white" weight={300} lineHeight={20}>
        제주 연안 가까이에 서식하며 1년 내내 관찰이 가능하다. 현재 돌고래 관광, 해양 쓰레기, 연안
        개발 등 인간의 활동에 가장 영향을 많이 받는 해양 포유류이다.
      </Typography>
      <IntroFooter color="white" />
    </PageLayout>
  );
}
