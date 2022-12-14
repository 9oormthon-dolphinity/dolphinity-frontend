import { HeaderLayout, LeftSection } from "layout/Header/styles";
import Logo from "components/Logo";
import { ActionIcon } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons";
import { useTheme } from "@emotion/react";

interface Props {
  noPadding?: boolean;
}

const Header = ({ noPadding = true }: Props) => {
  const theme = useTheme();

  return (
    <HeaderLayout noPadding={noPadding}>
      <LeftSection>
        <ActionIcon size={32} onClick={() => history.back()}>
          <IconChevronLeft color={theme.colors.deepBlue[0]} />
        </ActionIcon>
      </LeftSection>
      <div style={{ display: "flex", justifySelf: "center", alignItems: "center" }}>
        <Logo src="/dolfinity.svg" />
      </div>
      {/* <RightSection>
        <ActionIcon
          size={30}
          variant="filled"
          sx={{ backgroundColor: theme.colors.deepBlue[0], borderRadius: "50%" }}
          onClick={() => setOpened(true)}
        >
          <IconPlus stroke={1} />
        </ActionIcon>
      </RightSection> */}
    </HeaderLayout>
  );
};

export default Header;
