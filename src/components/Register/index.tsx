import Typography from "components/Typography";
import { useTheme } from "@emotion/react";
import "dayjs/locale/ko";
import Image from "next/image";
import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { FileButton } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import {
  EditDataPicker,
  InputDiv,
  RegisterBtn,
  RegisterContents,
  RegisterWrapper,
  TextAreaDiv,
  TopDiv,
} from "./styles";

export default function Register() {
  const theme = useTheme();

  const AttachBtn = styled.button`
    width: 47px;
    height: 47px;
    margin-top: 10px;
    border-radius: 17px;
    border: none;
    line-height: 68px;

    svg {
      color: white;
      background-color: ${theme.colors.deepBlue[0]};
      border-radius: 20px;
      width: 32px;
      height: 32px;
      padding: 8px;
    }
  `;
  const [address, setAddress] = useState<string>("");

  const [, setFile] = useState<File | null>(null);

  const longitude = "126.570667";
  const latitude = "33.450701";

  const getAddress = async () => {
    try {
      await axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${longitude}&y=${latitude}`,
          {
            headers: {
              Authorization: "KakaoAK dff659523aede6fed1e24d03c3da3a3b", // REST API 키
            },
          }
        )
        .then((res) => {
          const location = res.data.documents[0];
          setAddress(location.road_address.address_name);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <>
      <Image
        src="/RegisterBackground.png"
        alt="register"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ borderRadius: "32px 32px 0 0" }}
      />
      <RegisterContents>
        <RegisterWrapper>
          <div style={{ marginBottom: "27px" }}>
            <TopDiv />
          </div>
          <Typography variant="paragraph" color={theme.colors.deepGray[1]} weight={700}>
            제목을 입력하세요.
          </Typography>
          <TextAreaDiv style={{ resize: "none" }} placeholder="발견 상황을 입력해주세요." />
          <Typography variant="paragraph" color={theme.colors.deepGray[1]} weight={700}>
            목격 위치
          </Typography>
          <InputDiv type="text" value={address} readOnly></InputDiv>

          <Typography variant="paragraph" color={theme.colors.deepGray[1]} weight={700}>
            목격 날짜
          </Typography>
          <EditDataPicker
            locale="ko"
            placeholder="Pick date"
            inputFormat="YYYY년 MM월 DD일"
            labelFormat="MM/YYYY"
            defaultValue={new Date()}
          />
          <Typography variant="paragraph" color={theme.colors.deepGray[1]} weight={700}>
            사진 첨부
          </Typography>
          <FileButton onChange={setFile} accept="image/png,image/jpeg">
            {(props) => (
              <AttachBtn {...props}>
                <IconPlus />
              </AttachBtn>
            )}
          </FileButton>
          <RegisterBtn type="button">
            <Typography variant="paragraph" color={theme.colors.deepGray[1]} weight={700}>
              등록하기
            </Typography>
          </RegisterBtn>
        </RegisterWrapper>
      </RegisterContents>
    </>
  );
}