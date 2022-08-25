import { css } from "@emotion/react";
import styled from "@emotion/styled";

const FabContainer = styled.ul<{ open: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-direction: column-reverse;
  position: fixed;
  right: 2em;
  bottom: 2em;
  max-height: ${({ open }) => (open ? "max-content" : "52px")};
  z-index: 999;
  li {
    border-radius: 50%;
    box-shadow: 0 3px 6px lightgrey;
    display: grid;
    place-items: center;
    margin: 8px 0;
    font-size: 28px;
    padding: 12px;
    cursor: pointer;
    position: relative;
  }
`;

const FabButton = styled.li<{ open: boolean }>`
  background-color: ${({ theme }) => theme.colors.deepBlue[0]};
  transition: all ease 0.3s;
  ${({ open }) =>
    open &&
    css`
      transform: rotate(45deg);
    `}
  svg {
    color: white;
  }
`;

const FabActionOnOpen = css`
  transform: translateY(0) scale(1);
  opacity: 1;
`;

const FabTooltip = styled.span<{ open: boolean }>`
  padding: 4px 6px;
  font-size: 12px;
  position: absolute;
  left: -12px;
  transform: translateX(-75%);
  background-color: #353b48;
  border-radius: 4px;
  color: white;
  opacity: 0;
  transition: transform 300ms, opacity 300ms;
  user-select: none;
`;

const FabAction = styled.li<{ open: boolean }>`
  transform: translateY(50px) scale(0);
  transition: transform 300ms, opacity 300ms;
  opacity: 0;
  background-color: white;

  &:hover {
    ${FabTooltip} {
      transform: translateX(-100%) scale(1);
      opacity: 1;
    }
  }
  ${({ open }) => open && FabActionOnOpen}
`;

export { FabContainer, FabButton, FabAction, FabTooltip };
