import { HeaderLayout, LeftSection, RightSection } from "layout/Header/styles";
import Logo from "components/Logo";
import { ActionIcon } from "@mantine/core";
import { IconChevronLeft, IconPlus } from "@tabler/icons";
import { useTheme } from "@emotion/react";

const Header = () => {
  const theme = useTheme();
  return (
    <HeaderLayout>
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
          onClick={() => console.log("register")}
        >
          <IconPlus stroke={1} />
        </ActionIcon>
      </RightSection>
    </HeaderLayout>
  );
};

export default Header;
