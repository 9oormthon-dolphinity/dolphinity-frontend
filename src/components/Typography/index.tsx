import { HTMLAttributes } from "react";
import { TypographyLayout } from "./styles";

export interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: "h1" | "h2" | "h3" | "paragraph";
  color?: string | undefined;
}

const Typography = ({ children, variant = "paragraph", color }: TypographyProps) => {
  return (
    <TypographyLayout variant={variant} color={color}>
      {children}
    </TypographyLayout>
  );
};

export default Typography;
