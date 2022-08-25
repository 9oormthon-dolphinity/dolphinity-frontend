import styled from "@emotion/styled";

const SubHeaderWrapper = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1;
`;

export { SubHeaderWrapper, ImageWrapper };
