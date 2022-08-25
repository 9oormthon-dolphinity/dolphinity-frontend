import styled from "@emotion/styled";

export const HeaderLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 180px 1fr;
  align-items: center;
  margin-top: 50px;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
