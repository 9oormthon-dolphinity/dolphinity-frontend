import { usePostContext } from "components/post/PostContext";
import Comment from "../Comment";

const PostComments = () => {
  const { reviews } = usePostContext();
  return (
    <>
      {reviews.map(({ id, content, createdAt }, idx) => (
        <Comment key={idx} username={`익명${id}`} content={content} created={createdAt} />
      ))}
    </>
  );
};

export default PostComments;
