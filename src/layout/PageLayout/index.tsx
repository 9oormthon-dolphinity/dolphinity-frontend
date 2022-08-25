import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { css } from "@emotion/react";

interface Props {
  children: ReactNode;
  center?: boolean;
}

const PageStyle = styled.div<{ center: boolean; noPadding: boolean }>`
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
  ${({ noPadding }) =>
    !noPadding &&
    css`
      padding: 0px 25px;
    `}
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const PageLayout = ({ children, center = true, noPadding = false }: Props) => {
  return (
    <PageStyle center={center} noPadding={noPadding}>
      {children}
    </PageStyle>
  );
};

export default PageLayout;
