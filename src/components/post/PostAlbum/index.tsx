import { Carousel } from "@mantine/carousel";
import { usePostContext } from "components/post/PostContext";
import Image from "components/Image";

const PostAlbum = () => {
  const { img } = usePostContext();

  return (
    <Carousel sx={{ width: "100%", borderRadius: "20px" }} withIndicators height={360}>
      <Carousel.Slide>
        <Image src={img || "/example.png"} alt="album" layout="fill" objectFit="cover" />
      </Carousel.Slide>
    </Carousel>
  );
};

export default PostAlbum;
