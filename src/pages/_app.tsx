import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { CustomFonts } from "styles/globalFonts";
import CommonLayout from "layout/CommonLayout";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Page title</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>

    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        colors: {
          // Add your color
          deepBlue: ["#285BA9"],
          deepGray: ["#F9F9F9", "#F8F8F8", "#E4E4E4"],
        },

        shadows: {
          md: "1px 1px 3px rgba(0, 0, 0, .25)",
          xl: "5px 5px 3px rgba(0, 0, 0, .25)",
        },

        headings: {
          fontFamily: "Noto Sans KR",
          sizes: {
            h1: { fontSize: 38, lineHeight: 48 },
            h2: { fontSize: 32, lineHeight: 36 },
            h3: { fontSize: 24, lineHeight: 24 },
            h5: { fontSize: 14, lineHeight: 12 },
          },
        },
      }}
    >
      <CustomFonts />
      <CommonLayout>
        <Component {...pageProps} />
      </CommonLayout>
    </MantineProvider>
  </>
);

export default App;
