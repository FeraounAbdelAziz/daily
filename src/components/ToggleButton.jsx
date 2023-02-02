import { Switch, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { IconMoonStars, IconSun } from "@tabler/icons";
import React from "react";

function ToggleButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  
  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <Switch 
    style={{position : "absolute" , top : "1rem", right : "1rem"}}
      checked={colorScheme === "dark"}
      onChange={() => toggleColorScheme()}
      size="md"
      onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
      offLabel={
        <IconMoonStars color={theme.colors.gray[9]} size={20} stroke={1.5} />
      }
    />
  );
}

export default ToggleButton;
