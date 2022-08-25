import styled from "@emotion/styled";
import Image from "components/Image";

const LogoWrapper = styled.div`
  position: relative;
  margin-left: -12px;
  line-height: 1;
`;

interface Props {
  src: string;
}

const Logo = ({ src }: Props) => {
  return (
    <LogoWrapper>
      <Image src={src} alt="logo" width="180px" height="18px" priority />
    </LogoWrapper>
  );
};

export default Logo;
