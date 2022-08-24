import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { TypographyProps } from ".";

const h1Style = (theme: Theme) => css`
  font-size: ${theme.typography.h1.fontSize};
  line-height: ${theme.typography.h1.lineHeight};
`;
const h2Style = (theme: Theme) => css`
  font-size: ${theme.typography.h2.fontSize};
  line-height: ${theme.typography.h2.lineHeight};
`;

const h3Style = (theme: Theme) => css`
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};
`;

const paragraphStyle = (theme: Theme) => css`
  font-size: ${theme.typography.paragraph.fontSize};
  line-height: ${theme.typography.paragraph.lineHeight};
`;

interface TypographyLayoutProps extends TypographyProps {}

export const TypographyLayout = styled.h3<TypographyLayoutProps>`
  ${({ theme, variant }) => variant === "h1" && h1Style(theme)}
  ${({ theme, variant }) => variant === "h2" && h2Style(theme)}
  ${({ theme, variant }) => variant === "h3" && h3Style(theme)}
  ${({ theme, variant }) => variant === "paragraph" && paragraphStyle(theme)}
  color: ${({ color }) => color};
`;
