import styled from "@emotion/styled";
import Image from "components/Image";

const LogoWrapper = styled.div`
  position: relative;
  margin-left: -12px;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Image src="/dolfinity.svg" alt="logo" width="180px" height="18px" priority />
    </LogoWrapper>
  );
};

export default Logo;
