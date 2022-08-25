import styled from "@emotion/styled";
import Typography from "components/Typography";
import { useTheme } from "@emotion/react";
import { yearMonthDay } from "utils/date";

interface Props {
  username: string;
  content: string;
  created: string;
}

const CommentUserName = styled.div`
  margin-bottom: 10px;
`;

const CommentContent = styled.div`
  margin-bottom: 5px;
`;

const CommentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: flex-start;
  padding: 0px 25px;
  & :not(last-of-type) {
  }
`;

const CommentWrapper = styled.div`
  padding: 15px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Comment = ({ username, content, created }: Props) => {
  const theme = useTheme();
  return (
    <CommentContainer>
      <CommentWrapper>
        <CommentUserName>
          <Typography variant="paragraph" color={theme.colors.deepBlue[0]} weight={800}>
            {username}
          </Typography>
        </CommentUserName>
        <CommentContent>
          <Typography variant="paragraph" weight={300}>
            {content}
          </Typography>
        </CommentContent>
        <Typography variant="paragraph2">{yearMonthDay(created)}</Typography>
      </CommentWrapper>
    </CommentContainer>
  );
};

export default Comment;
