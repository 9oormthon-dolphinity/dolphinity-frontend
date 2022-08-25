import { HTMLAttributes } from "react";
import { TypographyLayout } from "./styles";

export interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: "h1" | "h2" | "h3" | "paragraph";
  color?: string | undefined;
  weight?: number;
}

const Typography = ({ children, variant = "paragraph", color, weight = 500 }: TypographyProps) => {
  return (
    <TypographyLayout variant={variant} color={color} weight={weight}>
      {children}
    </TypographyLayout>
  );
};

export default Typography;
