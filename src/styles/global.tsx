import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

export const globalStyles = (
  <Global
    styles={css`
      ${emotionReset}
      *, *::after, *::before {
        box-sizing: border-box;
      }

      // 이후 필요한 전역 스타일링 속성 추가
    `}
  />
);
