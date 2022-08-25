import styled from "@emotion/styled";
import { DatePicker } from "@mantine/dates";

export const RegisterContents = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const TopDiv = styled.div`
  width: 35px;
  height: 6px;
  background-color: white;
  border-radius: 30px;
  margin: 0 auto;
`;

export const RegisterWrapper = styled.div`
  width: 90%;
  height: 100%;
  position: relative;
`;

export const InputDiv = styled.input`
  width: 100%;
  border-radius: 15px;
  height: 36px;
  border: none;
  padding: 1px 12px;
  font-size: 14px;
  margin: 7px 0 12px;
`;

export const RegisterBtn = styled.button`
  width: 100%;
  height: 36px;
  background-color: #e97000;
  border: none;
  border-radius: 15px;
  display: block;
  position: absolute;
  bottom: 80px;
  cursor: pointer;
`;

export const EditDataPicker = styled(DatePicker)`
  .mantine-DatePicker-input {
    border-radius: 15px;
    height: 36px;
    margin: 7px 0 30px;
  }
`;
