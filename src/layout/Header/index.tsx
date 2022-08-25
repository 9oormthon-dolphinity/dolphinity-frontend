import { HeaderLayout, LeftSection, RightSection } from "layout/Header/styles";
import Logo from "components/Logo";
import { ActionIcon, Drawer } from "@mantine/core";
import { IconChevronLeft, IconPlus } from "@tabler/icons";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import Register from "components/Register";
import styled from "@emotion/styled";

interface Props {
  noPadding?: boolean;
}

const Header = ({ noPadding = true }: Props) => {
  const theme = useTheme();
  const [opened, setOpened] = useState(false);

  const EditDrawer = styled(Drawer)`
    .mantine-Drawer-root {
      position: relative;
    }
    .mantine-Drawer-drawer {
      background-color: ${theme.colors.deepBlue[0]};
      border-radius: 32px 32px 0 0;
      height: 640px;
    }
  `;

  return (
    <HeaderLayout noPadding={noPadding}>
      <LeftSection>
        <ActionIcon size={32} onClick={() => history.back()}>
          <IconChevronLeft color={theme.colors.deepBlue[0]} />
        </ActionIcon>
      </LeftSection>
      <div style={{ display: "flex", justifySelf: "center", alignItems: "center" }}>
        <Logo />
      </div>
      <RightSection>
        <ActionIcon
          size={30}
          variant="filled"
          sx={{ backgroundColor: theme.colors.deepBlue[0], borderRadius: "50%" }}
          onClick={() => setOpened(true)}
        >
          <IconPlus stroke={1} />
        </ActionIcon>
      </RightSection>
      <EditDrawer position="bottom" opened={opened} onClose={() => setOpened(false)}>
        <Register />
      </EditDrawer>
    </HeaderLayout>
  );
};

export default Header;
