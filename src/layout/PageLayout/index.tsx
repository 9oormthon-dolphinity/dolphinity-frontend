import styled from "@emotion/styled";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.deepGray[0]};
  max-width: 400px;
  min-height: 100vh;
  @media (min-width: 400px) {
    width: 100%;
  }
`;

const PageLayout = ({ children }: Props) => {
  return <PageStyle>{children}</PageStyle>;
};

export default PageLayout;
