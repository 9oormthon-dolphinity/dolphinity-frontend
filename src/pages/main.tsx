import Image from "components/Image";
import { IconBellPlus, Icon3dCubeSphere, IconAccessible, IconAlertTriangle } from "@tabler/icons";
import FloatingButton from "components/FloatingButton";

const actions = [
  { label: "About", icon: <IconBellPlus />, onClick: console.log },
  { label: "Profile", icon: <Icon3dCubeSphere />, onClick: console.log },
  { label: "Picture", icon: <IconAccessible />, onClick: console.log },
  { label: "Trash", icon: <IconAlertTriangle />, onClick: console.log },
];

const Main = () => {
  return (
    <div style={{ width: "400px", height: "600px", position: "relative" }}>
      <FloatingButton actions={actions} />
      {/* <KakaoMap latitude={33.450701} longitude={126.570667} /> */}
      {/* <Image src="/map.png" alt="카카오 지도" layout="fill" /> */}
    </div>
  );
};
export default Main;
