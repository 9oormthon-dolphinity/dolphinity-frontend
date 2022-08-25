import PageLayout from "layout/PageLayout";
import Header from "layout/Header";
import PostHeader from "components/post/PostHeader";
import { PostProvider } from "components/post/PostContext";
import PostAlbum from "components/post/PostAlbum";
import styled from "@emotion/styled";
import PostContent from "components/post/PostContent";
import PostStat from "components/post/PostStat";
import { apiAxios } from "utils/commonAxios";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import PostComments from "components/post/PostComments";
import PostCommentInput from "components/post/PostCommentInput";
import { Post } from "types/api";

const PostAlbumWrapper = styled.div`
  padding: 0px 12px;
  width: 100%;
  overflow: hidden;
  margin-top: 20px;
`;

const PostContentWrapper = styled.div`
  padding: 0px 25px;
  width: 100%;
  margin-top: 10px;
`;

interface Props {
  post: Post;
}

const PostDetail = ({ post }: Props) => {
  return (
    <PageLayout noPadding>
      <Header noPadding={false} />
      <PostProvider post={post}>
        <PostHeader />
        <PostAlbumWrapper>
          <PostAlbum />
        </PostAlbumWrapper>
        <PostContentWrapper>
          <PostContent />
        </PostContentWrapper>
        <PostStat />
        <PostComments />
        <PostCommentInput />
      </PostProvider>
    </PageLayout>
  );
};

export default PostDetail;

interface IdParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IdParams;
  try {
    const res = await apiAxios.get(`/boards/detail/${id}`);
    return {
      props: {
        post: res.data.data,
        error: false,
      },
    };
  } catch (err) {
    return {
      props: {
        error: true,
        data: {},
      },
    };
  }
};
