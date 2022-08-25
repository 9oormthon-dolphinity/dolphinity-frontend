import { IconBellPlus, Icon3dCubeSphere, IconAccessible, IconAlertTriangle } from "@tabler/icons";
import FloatingButton from "components/FloatingButton";
import KakaoMap from "components/KakaoMap";

const actions = [
  { label: "About", icon: <IconBellPlus />, onClick: console.log },
  { label: "Profile", icon: <Icon3dCubeSphere />, onClick: console.log },
  { label: "Picture", icon: <IconAccessible />, onClick: console.log },
  { label: "Trash", icon: <IconAlertTriangle />, onClick: console.log },
];

const Main = () => {
  return (
    <div style={{ width: "400px", height: "600px", position: "relative" }}>
      <KakaoMap latitude={33.450701} longitude={126.570667} />
      <FloatingButton actions={actions} />
    </div>
  );
};
export default Main;
