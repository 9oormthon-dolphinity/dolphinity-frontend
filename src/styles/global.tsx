import { Global } from "@mantine/core";

export const globalStyles = (
  <Global
    styles={(theme) => ({
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },
      body: {
        margin: 0,
        fontFamily: "'Noto Sans KR', sans-serif",
      },
    })}
  />
);
