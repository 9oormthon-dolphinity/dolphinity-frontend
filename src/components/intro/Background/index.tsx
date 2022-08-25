import Image from "components/Image";

const Background = () => {
  return (
    <Image
      src="/IntroImage.png"
      alt="intro"
      layout="fill"
      objectFit="cover"
      quality={100}
      style={{ filter: "brightness(85%)" }}
    />
  );
};

export default Background;
