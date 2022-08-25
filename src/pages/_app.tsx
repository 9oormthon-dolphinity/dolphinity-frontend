import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { CustomFonts } from "styles/globalFonts";

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
          deepBlue: [
            "#D5F1F6",
            "#A6E3ED",
            "#7ED9E7",
            "#52CDE0",
            "#1EBAD2",
            "#1FA8BD",
            "#2095A7",
            "#217E8C",
            "#23707B",
          ],
        },

        shadows: {
          md: "1px 1px 3px rgba(0, 0, 0, .25)",
          xl: "5px 5px 3px rgba(0, 0, 0, .25)",
        },

        headings: {
          fontFamily: "Noto Sans KR",
          sizes: {
            h1: { fontSize: 38, lineHeight: 57 },
            h2: { fontSize: 32, lineHeight: 48 },
            h3: { fontSize: 24, lineHeight: 36 },
            h5: { fontSize: 14, lineHeight: 22 },
          },
        },
      }}
    >
      <CustomFonts />
      <Component {...pageProps} />
    </MantineProvider>
  </>
);

export default App;
