import { default as NextImage, ImageProps } from "next/image";
import { css } from "@emotion/react";

export interface Props extends ImageProps {
  blur?: boolean;
}

const Image = ({ src, blur = false, ...rest }: Props) => {
  return (
    <>
      {typeof src === "string" ? (
        <NextImage
          src={src}
          {...rest}
          {...(blur && {
            placeholder: "blur",
            blurDataURL: src,
            css: css`
              transition: 0.3s ease-in-out;
            `,
          })}
        />
      ) : (
        <NextImage src={src} {...rest} {...(blur && { placeholder: "blur" })} />
      )}
    </>
  );
};

export default Image;
