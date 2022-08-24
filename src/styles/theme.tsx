import { Theme } from "@emotion/react";

/* theme 속성을 추가하고싶다면, emotion.d.ts에 타입을 추가할 것 */

const theme: Theme = {
  colors: {
    cyan: {
      100: "#D5F1F6",
      200: "#A6E3ED",
      300: "#7ED9E7",
      400: "#52CDE0",
      500: "#1EBAD2",
      600: "#1FA8BD",
      700: "#2095A7",
      800: "#217E8C",
      900: "#23707B",
    },
  },
  typography: {
    h1: {
      fontSize: "38px",
      lineHeight: "57px",
    },
    h2: {
      fontSize: "32px",
      lineHeight: "48px",
    },
    h3: {
      fontSize: "24px",
      lineHeight: "36px",
    },
    paragraph: {
      fontSize: "14px",
      lineHeight: "22px",
    },
  },
};

export default theme;
