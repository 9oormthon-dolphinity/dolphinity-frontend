import Typography from "components/Typography";
import { usePostContext } from "../PostContext";
import { useTheme } from "@emotion/react";

const PostContent = () => {
  const { situation } = usePostContext();
  const theme = useTheme();

  return (
    <Typography variant="paragraph" color={theme.colors.deepBlue[0]} lineHeight={20}>
      {situation}
    </Typography>
  );
};

export default PostContent;
