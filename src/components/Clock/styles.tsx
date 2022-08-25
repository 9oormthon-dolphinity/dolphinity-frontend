import styled from "@emotion/styled";

const ClockWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: left;
  padding-left: -25px;
`;

const ClockLine = styled.hr`
  width: 65%;
  margin: 0;
  margin-right: 20px;
  justify-self: flex-end;
  border: ${({ theme }) => `0.5px dashed ${theme.colors.deepBlue[0]}`};
`;

export { ClockWrapper, ClockLine };
