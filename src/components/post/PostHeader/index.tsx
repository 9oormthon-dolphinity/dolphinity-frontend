import { useTheme } from "@emotion/react";
import Typography from "components/Typography";
import { PostHeaderWrapper, PostSubHeaderWrapper, PostTop } from "./styles";
import { usePostContext } from "components/post/PostContext";
import { yearMonthDay } from "utils/date";

const PostHeader = () => {
  const { title, address, discovery } = usePostContext();
  const theme = useTheme();
  return (
    <PostTop>
      <PostHeaderWrapper>
        <Typography variant="h2" color={theme.colors.deepBlue[0]} weight={700}>
          {title}
        </Typography>
      </PostHeaderWrapper>
      <PostSubHeaderWrapper>
        <Typography variant="paragraph" color={"rgba(0, 0, 0, 0.6)"} weight={500}>
          {yearMonthDay(discovery)}
        </Typography>
        <Typography variant="paragraph" color={theme.colors.deepBlue[0]} weight={300}>
          {address}
        </Typography>
      </PostSubHeaderWrapper>
    </PostTop>
  );
};

export default PostHeader;
