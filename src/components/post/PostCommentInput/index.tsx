import { ActionIcon } from "@mantine/core";
import { useState, useCallback } from "react";
import { IconBrandTelegram } from "@tabler/icons";
import styled from "@emotion/styled";
import { apiAxios } from "utils/commonAxios";
import { useRouter } from "next/router";

const CustomInputWrapper = styled.div`
  padding: 20px 30px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.colors.deepBlue[0]};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

const CustomInput = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.colors.deepBlue[0]};
  color: white;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

const PostCommentInput = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const handleCommentWrite = useCallback(() => {
    if (input === "") {
      alert("댓글 내용을 입력하세요.");
      return;
    }
    apiAxios.post("/reviews/add", { content: input, id }).then(() => {
      router.reload();
    });
  }, [input, id, router]);
  return (
    <CustomInputWrapper>
      <CustomInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="댓글을 입력하세요."
      />
      <ActionIcon variant="transparent" onClick={handleCommentWrite}>
        <IconBrandTelegram color="white" />
      </ActionIcon>
    </CustomInputWrapper>
  );
};

export default PostCommentInput;
