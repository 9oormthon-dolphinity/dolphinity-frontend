import { ReactNode } from "react";
import { CommonStyle } from "./styles";

interface Props {
  children: ReactNode;
}

const CommonLayout = ({ children }: Props) => {
  return <CommonStyle>{children}</CommonStyle>;
};

export default CommonLayout;
