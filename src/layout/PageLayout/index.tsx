import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

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
  max-width: 400px;
  min-height: 100vh;
  @media (min-width: 400px) {
    width: 100%;
  }
`;

const PageLayout = ({ children, center = true }: Props) => {
  return (
    <PageStyle center={center}>
      <div style={{ marginBottom: "100px" }}>sdfdsf</div>
      {children}
    </PageStyle>
  );
};

export default PageLayout;
