import styled from "@emotion/styled";
import { ReactNode } from "react";
import { css } from "@emotion/react";

interface Props {
  children: ReactNode;
  center?: boolean;
}

const PageStyle = styled.div<{ center: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ center }) =>
    center &&
    css`
      align-items: center;
    `}
  background-color: ${({ theme }) => theme.colors.deepGray[0]};
  width: 400px;
  min-height: 100vh;
  position: relative;
  padding: 0px 25px;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const PageLayout = ({ children, center = true }: Props) => {
  return <PageStyle center={center}>{children}</PageStyle>;
};

export default PageLayout;
