import { Box, Container, Flex, SimpleGrid, Space, Title } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../../Theme";

function Algorithm() {
  const navigate = useNavigate();  
  const {classes} = useStyles();
  return (
    <>
      <Container>
        <Flex align={"center"} justify={"flex-start"}>
          <IconArrowNarrowLeft
            onClick={() => navigate(-1)}
            strokeWidth={2}
            size={"4rem"}
          />
          <Space w="24vw" />
          <Title order={2}>Algorithm</Title>
        </Flex>
      </Container>
      <Space h={"2rem"}/>

      
      <Container>
        <SimpleGrid cols={1} spacing="sm">
          <Box
            component="a"
            href="/Informatique/Algorithm/DownloadPage"
            sx={classes.sx}
          >
            <Title order={5}>tout les cours algorithm 1</Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>autre cours algorithmique 1 </Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>autre cours algorithmique 1</Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>autre cours algorithmique 1</Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>autre cours algorithmique 1</Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>135 exercices corriges algorithmique</Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>170 exercices corriges algorithmique</Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>
              200 exercices corriges algorithmique en java
            </Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>80 examens,sujets corriges algorithmique</Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>180 exercices corriges algorithmique en c</Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>129 exercices corriges algorithmique</Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>ALGO algorithmique Exercices Corriges</Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>autre examen corrige Algorithmique 1 -1-</Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>autre examen corrige Algorithmique 1 -2-</Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>autre examen corrige Algorithmique 1 -3-</Title>
          </Box>
          <Box
            component="a"
            sx={classes.sx}
          >
            <Title order={5}>autre examen corrige Algorithmique 1 -4-</Title>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Algorithm;
