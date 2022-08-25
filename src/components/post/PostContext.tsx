import { createContext, ReactNode, useContext } from "react";
import { Post } from "types/api";

interface PostContextValue extends Post {}

const postContext = createContext<PostContextValue | null>(null);

const PostProvider = ({ post, children }: { post: PostContextValue; children: ReactNode }) => {
  return <postContext.Provider value={post}>{children}</postContext.Provider>;
};

const usePostContext = () => {
  const context = useContext(postContext);

  if (!context) {
    throw new Error("usePostContext must be used within a PostContextProvider");
  }
  return context;
};

export { PostProvider, usePostContext };
