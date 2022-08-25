import { usePostContext } from "components/post/PostContext";
import { ActionIcon } from "@mantine/core";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { useState, useCallback } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Typography from "components/Typography";
import { useRouter } from "next/router";
import { apiAxios } from "utils/commonAxios";

const PostStatWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  padding: 0px 20px;
  margin-top: 10px;
`;
const PostLikesWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PostCommentsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const PostStat = () => {
  const theme = useTheme();
  const { like, reviews } = usePostContext();
  const [likesValue, setLikesValue] = useState(like);
  const [likeClicked, setLikeClicked] = useState(false);
  const [commentsValue] = useState(reviews?.length || 0);
  const router = useRouter();
  const { id } = router.query;

  const handleLikeClick = useCallback(() => {
    setLikeClicked((prev) => !prev);
    setLikesValue(likeClicked ? likesValue - 1 : likesValue + 1);
    apiAxios.get(`/boards/like/${id}`);
  }, [likeClicked, likesValue, id]);

  return (
    <PostStatWrapper>
      <PostLikesWrapper>
        <ActionIcon
          onClick={handleLikeClick}
          color={theme.colors.deepBlue[0]}
          sx={{ borderRadius: "50%" }}
        >
          {likeClicked ? <AiFillHeart /> : <AiOutlineHeart />}
        </ActionIcon>
        <Typography variant="paragraph" color={theme.colors.deepBlue[0]}>
          {likesValue}
        </Typography>
      </PostLikesWrapper>
      <PostCommentsWrapper>
        <ActionIcon
          onClick={handleLikeClick}
          color={theme.colors.deepBlue[0]}
          variant="transparent"
        >
          <AiOutlineComment />
        </ActionIcon>
        <Typography variant="paragraph" color={theme.colors.deepBlue[0]}>
          {commentsValue}
        </Typography>
      </PostCommentsWrapper>
    </PostStatWrapper>
  );
};

export default PostStat;
