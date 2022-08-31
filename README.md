# 🐬 Dolphinity

<p align="center">
  <br>
  <img src="https://user-images.githubusercontent.com/88325253/187683881-bcc061bf-327e-4545-83dc-6c2fadaee90d.png">
  <br>
</p>

돌고래와 인간의 공생을 위한 웹 서비스, Dolphinity
> kakao X goorm : 제1회 [구름톤](https://9oormthon.goorm.io/) 우수상 수상작 🏆


## Project
### 주제
- 제주 연안에 살고 있는 남방큰돌고래를 육안으로 확인할 수 있는 장소 확인 서비스

### 주제 선정 이유
- 제주 남방큰돌고래는 개체수가 너무 적어서 지금은 선박관광보다는 보전에 중점을 두어야 한다.
- 돌고래, 환경, 인간은 서로 영향을 주고받는 상생관계이며, 현재 돌고래의 피해가 미래의 인간의 피해가 될 수 있다.
- 지속적이고 반복적인 관광선박의 접근은 돌고래들의 생체리듬을 교란시키고, 스트레스를 유발한다.
  - 선박관광이 계속될 경우 스트레스로 인해 돌고래 개체수가 감소하는 결과로 나타날 가능성이 높다.
- 제주남방큰돌고래는 연안성이어서 육상에서 충분히 관찰할 수 있다.

### 시연영상
- [🎥 프로젝트 시연영상](https://www.youtube.com/watch?v=aFNKPivpl0A)

### Project 인원
<table>
  <tr>
    <td align="center"><a href="https://github.com/Yangseungchan"><img src="https://user-images.githubusercontent.com/88325253/187687243-9602b2f7-7293-4a73-bdf4-3c5887f49a54.png" width="100px;" alt=""/>
    <td align="center"><a href="https://github.com/malgamlee"><img src="https://user-images.githubusercontent.com/88325253/187689044-fdb9357a-539d-470c-909d-667a3a603e25.png" width="100px;" alt=""/>
    <td align="center"><a href="https://github.com/Stark-Industries0417"><img src="https://user-images.githubusercontent.com/88325253/187689844-789d12d2-ac59-40d0-8f28-cb6a391daf10.jpeg" width="100px;" alt=""/>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Yangseungchan"><b>yangseungchan</b></a><br />Frontend</td>
    <td align="center"><a href="https://github.com/malgamlee"><b>malgamlee</b></a><br />Frontend/PM</td>
    <td align="center"><a href="https://github.com/Stark-Industries0417"><b>Stark-Industries0417</b></a><br />Backend</td>
  </tr>
</table>

## 기능

- **기능 1**
  - 카카오맵 API를 이용한 돌고래 목격장소 위치 표시
- **기능 2**
  - 사용자의 현재정보와 목격한 고래 사진 및 시간정보를 받아 하나의 게시물로 저장
- **기능 3**
  - 게시글 및 댓글기능을 통하여 돌고래 목격장소에 대해 이야기를 나누는 커뮤니케이션 기능
### 메인 화면
<img width="1004" alt="image" src="https://user-images.githubusercontent.com/88325253/187690899-82cfc230-f919-45a6-9580-7dca824907bf.png">

- 서비스의 기능을 의미하는 시작페이지에서 화살표 버튼을 클릭하면 메인페이지로 이동한다.
- 메인 페이지는 이전 버튼, 로고, 현재 시간, 핀과 지도, 기능 버튼으로 구성되어 있다.
  - 이전 버튼을 클릭하면 직전 페이지로 이동한다.
  - 지도를 드래그하여 이동할 수 있고, 확대/축소 버튼으로 지도 레벨 조절, 현재 위치 이동이 가능하다.
  - 지도 위의 핀을 클릭하면 해당 핀에서 촬영된 돌고래 사진과 관련 내용 팝업이 등장한다.
  - 팝업의 상세 버튼을 클릭하면 해당 핀에 대한 상세 내용 페이지로 이동한다.

### 상세/등록 화면
<img width="803" alt="image" src="https://user-images.githubusercontent.com/88325253/187693941-f614a172-d4f4-44b4-886a-a874706e3228.png">

- 상세 화면
  - 사용자가 작성한 제목, 주소, 업로드한 사진, 내용을 확인할 수 있다.
  - 다른 사용자가 게시글을 보고 하트를 클릭할 수 있고, 댓글을 달 수 있다.
- 등록 화면
  - 사용자가 돌고래를 목격한 게시글을 작성할 수 있다.
  - 제목, 내용, 날짜가 입력되고, 위치는 현재 위치를 자동으로 받아온다.
  - 사용자가 촬영한 사진을 업로드할 수 있다.
  - `등록하기` 버튼을 클릭하면 서버에 저장된다.

## UI Design

<img width="1243" alt="스크린샷 2022-08-31 오후 10 52 40" src="https://user-images.githubusercontent.com/88325253/187695557-2384a8b5-0937-4562-99b3-3bef7390bcf2.png">

<img width="1030" alt="image" src="https://user-images.githubusercontent.com/88325253/187695221-62e9afe0-1dd6-4332-b2c9-d4bfa3edae82.png">

- [피그마 디자인 시안](https://www.figma.com/file/GbJeyToIyZU60yVxPgufhE/%EB%8F%8C%ED%94%BC%EB%8B%88%ED%8B%B0?node-id=0%3A1)

## 기술 스택

|                                                      Typescript                                                      |                                                      Emotion                                                      |                                                     Next.js                                                      |                                                     Mantine                                                     |
| :------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| ![Typescript](https://user-images.githubusercontent.com/38908080/186812327-e4e70b85-5854-450e-b7bc-cd17106a776a.png) | ![emotion](https://user-images.githubusercontent.com/38908080/186812166-36ed1838-427a-4519-b356-f8c9bf90173e.png) | ![nextjs](https://user-images.githubusercontent.com/38908080/186812036-c38904e3-b94a-4df1-af63-96d2a28f256c.png) | ![image](https://user-images.githubusercontent.com/38908080/186812510-19650642-0fb8-4111-b07c-2f48614e7057.png) |


<br>

## 배운 점 & 아쉬운 점

- 필수적인 기능들은 가능한 많이 구현했다는 점은 유익했다

- 카카오맵 API에 대한 낮은 숙련도로 인해 프로젝트의 시간의 많은 부분을 빼앗김

<p align="justify">

</p>

<br>

## 라이센스

&copy; [9oormthon ](https://github.com/9oormthon-dolphinity)
