import Typography from "components/Typography";
import Image from "components/Image";
import { ImageWrapper } from "./styles";
import { SubHeaderWrapper } from "./styles";
import { useTheme } from "@emotion/react";

const SubHeader = () => {
  const theme = useTheme();
  return (
    <SubHeaderWrapper>
      <ImageWrapper>
        <Image src="/focus.svg" alt="focus" width="68px" height="45px" />
      </ImageWrapper>
      <Typography variant="paragraph" color={theme.colors.deepBlue[0]}>
        제주 남방큰돌고래 목격 스팟을 공유해주세요
      </Typography>
    </SubHeaderWrapper>
  );
};

export default SubHeader;
