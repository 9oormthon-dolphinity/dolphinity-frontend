import styled from "@emotion/styled";

export const TitleText = styled.h1`
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.colors.deepBlue[1] : theme.colors.deepBlue[2]};
  font-size: 30px;
  font-weight: 800;
`;
