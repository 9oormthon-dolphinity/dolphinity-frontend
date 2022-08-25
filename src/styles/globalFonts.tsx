import { Global } from "@mantine/core";

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Noto Sans KR",
            fontStyle: "normal",
            fontWeight: 100,
            src: `local(''),
                url('/fonts/noto-sans-kr-100.woff2') format('woff2'),
                url('/fonts/noto-sans-kr-100.woff') format('woff')`,
          },
        },
        {
          "@font-face": {
            fontFamily: "Noto Sans KR",
            fontStyle: "normal",
            fontWeight: 300,
            src: `local(''),
                url('/fonts/noto-sans-kr-300.woff2') format('woff2'),
                url('/fonts/noto-sans-kr-300.woff') format('woff')`,
          },
        },
        {
          "@font-face": {
            fontFamily: "Noto Sans KR",
            fontStyle: "normal",
            fontWeight: 500,
            src: `local(''),
                url('/fonts/noto-sans-kr-500.woff2') format('woff2'),
                url('/fonts/noto-sans-kr-500.woff') format('woff')`,
          },
        },
        {
          "@font-face": {
            fontFamily: "Noto Sans KR",
            fontStyle: "normal",
            fontWeight: 600,
            src: `local(''),
                url('/fonts/noto-sans-kr-regular.woff2') format('woff2'),
                url('/fonts/noto-sans-kr-regular.woff') format('woff')`,
          },
        },
        {
          "@font-face": {
            fontFamily: "Noto Sans KR",
            fontStyle: "normal",
            fontWeight: 700,
            src: `local(''),
                url('/fonts/noto-sans-kr-700.woff2') format('woff2'),
                url('/fonts/noto-sans-kr-700.woff') format('woff')`,
          },
        },
        {
          "@font-face": {
            fontFamily: "Noto Sans KR",
            fontStyle: "normal",
            fontWeight: 900,
            src: `local(''),
                url('/fonts/noto-sans-kr-900.woff2') format('woff2'),
                url('/fonts/noto-sans-kr-900.woff') format('woff')`,
          },
        },
      ]}
    />
  );
}
