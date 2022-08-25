import Head from "next/head";
import PageLayout from "layout/PageLayout";
import Background from "components/intro/Background";
import IntroHeader from "components/intro/IntroHeader";
import IntroFooter from "components/intro/IntroFooter";

export default function Intro() {
  return (
    <PageLayout center={false}>
      <Head>
        <title>Dolfinity</title>
        <meta name="description" content="9oormthon Dolfinity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <IntroHeader />
      <IntroFooter />
    </PageLayout>
  );
}
