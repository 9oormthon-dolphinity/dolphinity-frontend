import { useTheme } from "@emotion/react";
import Typography from "components/Typography";
import { IntroFooterWrapper } from "./styles";
import { IconArrowRight } from "@tabler/icons";
import { ActionIcon } from "@mantine/core";
import { useRouter } from "next/router";

const IntroFooter = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <IntroFooterWrapper>
      <Typography variant="paragraph" color={theme.colors.deepBlue[0]} weight={300}>
        남방큰돌고래 인기 스팟 한눈에 보러가기
      </Typography>
      <ActionIcon onClick={() => router.push("/main")} size="xl">
        <IconArrowRight size={36} color={theme.colors.deepBlue[0]} />
      </ActionIcon>
    </IntroFooterWrapper>
  );
};

export default IntroFooter;
