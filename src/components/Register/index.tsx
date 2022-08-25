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
import { yearMonthDay } from "utils/date";

export default function Register() {
  const [nowLat] = useState(33.450701);
  const [nowLon] = useState(126.570667);

  const theme = useTheme();

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
      background-color: ${theme.colors.deepBlue[0]};
      border-radius: 20px;
      width: 32px;
      height: 32px;
      padding: 8px;
    }
  `;
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
    console.log(title);
    console.log(contents);
    console.log(address);
    console.log(yearMonthDay(String(date)));

    try {
      const res = await apiAxios.post("/boards/register", {
        title,
        address: address,
        lat: nowLat,
        lng: nowLon,
        situation: contents,
        discovery: date,
        like: 0,
      });
      console.log("res : ", res);
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
    const getAddress = (latitude: any, longitude: any) => {
      axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${latitude}&y=${latitude}`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAOMAP_REST_API_APPKEY}`, // REST API 키
            },
          }
        )
        .then((res) => {
          const location = res.data.documents[0];
          console.log("location : ", location);
          setAddress(location.road_address.address_name);
        });
    };
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도

        console.log("lat : ", lat);
        console.log("lon : ", lon);
        getAddress(lat, lon);
        // setNowLat(lat);
        // setNowLon(lon);
        console.log(lat, lon);
      });
    }
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
                <IconPlus />
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
