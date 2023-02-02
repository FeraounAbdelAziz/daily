import React from "react";
import { Container, Group, ActionIcon, Text } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";
import { MantineLogo } from "@mantine/ds";
import { useStyles } from "../Theme";


function Footer() {
  const { classes } = useStyles();
  
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>

        <Group>
          <Text>Provided By</Text>
        <MantineLogo size={28} />
        </Group>

        <Group>
          <Text>Copyright © 2022 All Rights Reserved by Feraoun Abdel Aziz</Text>
        </Group>

        <Group spacing={0} className={classes.links} position="right" noWrap>

          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

export default Footer;
