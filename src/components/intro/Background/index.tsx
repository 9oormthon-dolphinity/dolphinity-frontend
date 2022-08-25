import Image from "components/Image";

interface Props {
  src: string;
}

const Background = ({ src }: Props) => {
  return (
    <Image
      src={src}
      alt="intro"
      layout="fill"
      objectFit="cover"
      quality={100}
      style={{ filter: "brightness(85%)" }}
    />
  );
};

export default Background;
