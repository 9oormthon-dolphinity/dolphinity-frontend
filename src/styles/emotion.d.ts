/* Theme 타입 설정 파일 */

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      cyan: Color;
    };
    typography: {
      h1: Typography;
      h2: Typography;
      h3: Typography;
      paragraph: Typography;
    };
  }

  export interface Color {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  export interface Typography {
    fontSize: string;
    lineHeight: string;
  }
}
