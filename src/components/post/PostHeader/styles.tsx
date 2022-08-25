import styled from "@emotion/styled";

const PostTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const PostHeaderWrapper = styled.div`
  margin-bottom: 10px;
`;

const PostSubHeaderWrapper = styled.div`
  display: flex;
  & h3:first-of-type {
    padding: 2px;
    padding-right: 8px;
    padding-left: 0px;
    border-right: ${({ theme }) => `1.5px solid ${theme.colors.deepBlue[0]}`};
  }
  & h3:last-of-type {
    padding: 2px;
    padding-left: 8px;
    padding-right: 0px;
  }
`;

export { PostTop, PostHeaderWrapper, PostSubHeaderWrapper };
