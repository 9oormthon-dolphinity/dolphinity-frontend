import Typography from "components/Typography";
import { useTheme } from "@emotion/react";
import "dayjs/locale/ko";
import Image from "next/image";
import styled from "@emotion/styled";
import axios from "axios";
import { FormEvent, MouseEvent, useCallback, useEffect, useState } from "react";
import { FileButton } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import {
  EditDataPicker,
  InputDiv,
  RegisterBtn,
  RegisterContents,
  RegisterWrapper,
  TopDiv,
} from "./styles";
import { apiAxios } from "utils/commonAxios";
import { useRouter } from "next/router";

const AttachBtn = styled.button`
  width: 47px;
  height: 47px;
  margin-top: 10px;
  border-radius: 17px;
  border: none;
  line-height: 68px;
  cursor: pointer;

  svg {
    color: white;
    background-color: ${({ theme }) => theme.colors.deepBlue[0]};
    border-radius: 20px;
    width: 32px;
    height: 32px;
    padding: 8px;
  }
`;

export default function Register() {
  const [nowLat] = useState(33.4501317);
  const [nowLon] = useState(126.9182933);
  const router = useRouter();
  const theme = useTheme();

  const [address, setAddress] = useState<string>("");

  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [date, setDate] = useState<Date | null>(new Date());

  const handleTitle = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleContents = (e: FormEvent<HTMLInputElement>) => {
    setContents(e.currentTarget.value);
  };

  const handleClickSubmitBtn = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await apiAxios.post("/boards/register", {
        title,
        address: address,
        lat: nowLat,
        lng: nowLon,
        situation: contents,
        discovery: date,
        like: 0,
      });
      router.reload();
    } catch (err) {
      console.log("err : ", err);
    }
  };

  const onUploadImage = useCallback(async (file: File | null) => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await apiAxios.post("/boards/upload", formData, {
        headers: { "Content-Type": "multipart/form-data", "Access-Control-Allow-Origin": "*" },
        withCredentials: true,
      });
      console.log("res : ", res);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${nowLon}&y=${nowLat}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAOMAP_REST_API_APPKEY}`, // REST API 키
          },
        }
      )
      .then((res) => {
        const location = res.data.documents[0];
        setAddress(location.road_address.address_name);
      });
  }, [nowLat, nowLon]);

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
          <InputDiv
            type="text"
            placeholder="제목을 입력해주세요."
            value={title}
            onInput={handleTitle}
          ></InputDiv>
          <Typography variant="paragraph" color={theme.colors.deepGray[1]} weight={700}>
            내용을 입력하세요.
          </Typography>
          <InputDiv
            type="text"
            placeholder="발견 상황을 입력해주세요."
            value={contents}
            onInput={handleContents}
          ></InputDiv>
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
            value={date}
            onChange={setDate}
          />
          <Typography variant="paragraph" color={theme.colors.deepGray[1]} weight={700}>
            사진 첨부
          </Typography>
          <FileButton onChange={(file) => onUploadImage(file)} accept="image/png,image/jpeg">
            {(props) => (
              <AttachBtn {...props}>
                <IconPlus color={theme.colors.deepBlue[0]} />
              </AttachBtn>
            )}
          </FileButton>
          <RegisterBtn type="button" onClick={handleClickSubmitBtn}>
            <Typography variant="paragraph" color={theme.colors.deepGray[1]} weight={700}>
              등록하기
            </Typography>
          </RegisterBtn>
        </RegisterWrapper>
      </RegisterContents>
    </>
  );
}
