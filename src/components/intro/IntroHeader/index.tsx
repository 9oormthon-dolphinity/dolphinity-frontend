import Logo from "components/intro/Logo";
import Typography from "components/Typography";
import { useTheme } from "@emotion/react";

const IntroHeader = () => {
  const theme = useTheme();
  return (
    <div style={{ marginTop: "80px" }}>
      <div style={{ marginBottom: "10px" }}>
        <Logo />
      </div>
      <Typography variant="h2" color={theme.colors.deepBlue[0]} weight={300}>
        제주 남방큰돌고래
      </Typography>
      <Typography variant="h2" color={theme.colors.deepBlue[0]} weight={300}>
        한눈에 스팟
      </Typography>
    </div>
  );
};

export default IntroHeader;
