import Typography from "components/Typography";
import { IntroFooterWrapper } from "./styles";
import { IconArrowRight } from "@tabler/icons";
import { ActionIcon } from "@mantine/core";
import { useRouter } from "next/router";

interface Props {
  color?: string;
}

const IntroFooter = ({ color = "white" }: Props) => {
  const router = useRouter();
  return (
    <IntroFooterWrapper>
      <Typography variant="paragraph" color={color} weight={300}>
        남방큰돌고래 인기 스팟 한눈에 보러가기
      </Typography>
      <ActionIcon onClick={() => router.push("/main")} size="xl" variant="transparent">
        <IconArrowRight size={64} color={color} />
      </ActionIcon>
    </IntroFooterWrapper>
  );
};

export default IntroFooter;
