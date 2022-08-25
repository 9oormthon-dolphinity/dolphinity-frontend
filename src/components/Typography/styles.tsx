import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { TypographyProps } from ".";

const h1Style = (theme: Theme) => css`
  font-size: ${theme.headings.sizes.h1.fontSize}px;
  line-height: ${theme.headings.sizes.h1.lineHeight}px;
  margin: 0px;
`;
const h2Style = (theme: Theme) => css`
  font-size: ${theme.headings.sizes.h2.fontSize}px;
  line-height: ${theme.headings.sizes.h2.lineHeight}px;
  margin: 0px;
`;

const h3Style = (theme: Theme) => css`
  font-size: ${theme.headings.sizes.h3.fontSize}px;
  line-height: ${theme.headings.sizes.h3.lineHeight}px;
  margin: 0px;
`;

const paragraphStyle = (theme: Theme) => css`
  font-size: ${theme.headings.sizes.h5.fontSize}px;
  line-height: ${theme.headings.sizes.h5.lineHeight}px;
  margin: 0px;
`;

interface TypographyLayoutProps extends TypographyProps {}

export const TypographyLayout = styled.h3<TypographyLayoutProps>`
  ${({ theme, variant }) => variant === "h1" && h1Style(theme)}
  ${({ theme, variant }) => variant === "h2" && h2Style(theme)}
  ${({ theme, variant }) => variant === "h3" && h3Style(theme)}
  ${({ theme, variant }) => variant === "paragraph" && paragraphStyle(theme)}
  color: ${({ color }) => color};
  font-family: "Noto Sans KR";
  font-weight: ${({ weight }) => weight};
`;
