import { HTMLAttributes } from "react";
import { TypographyLayout } from "./styles";

export interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: "h1" | "h2" | "h3" | "paragraph" | "paragraph2";
  color?: string | undefined;
  weight?: number;
  lineHeight?: number;
}

const Typography = ({
  children,
  variant = "paragraph",
  color,
  weight = 500,
  lineHeight,
}: TypographyProps) => {
  return (
    <TypographyLayout variant={variant} color={color} weight={weight} lineHeight={lineHeight}>
      {children}
    </TypographyLayout>
  );
};

export default Typography;
