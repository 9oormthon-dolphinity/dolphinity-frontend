import Head from "next/head";
import PageLayout from "layout/PageLayout";
import Background from "components/intro/Background";
import IntroHeader from "components/intro/IntroHeader";
import IntroFooter from "components/intro/IntroFooter";

import IntroFocus from "components/intro/IntroFocus";
import { useTheme } from "@emotion/react";

export default function Intro() {
  const theme = useTheme();
  return (
    <PageLayout center={false}>
      <Head>
        <title>Dolfinity</title>
        <meta name="description" content="9oormthon Dolfinity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background src="/IntroImage.png" />
      <IntroHeader />
      <IntroFocus />
      <IntroFooter color={theme.colors.deepBlue[0]} />
    </PageLayout>
  );
}
