import { Card, Image, Text } from "@mantine/core";

function ContentBox() {
  return (
    <>
      <Card
        shadow="lg"
        p="xl"
        component="a"
        href="/informatique"
        sx={{
          "&:hover": {
            boxShadow: "0 0 30px #dbd5d490",
            transition: "all .5s",
          },
        }}
      >
        <Card.Section>
          <Image
            src="assets/informatique.png"
            height={160}
            alt="No way!"
          />
        </Card.Section>

        <Text weight={500} size="lg" mt="md">
          Informatique
        </Text>

        <Text mt="xs" color="dimmed" size="sm">
          Maths et Informatique, Génie logiciel, Intelligence
          artificielle,Réseaux et systèmes distribués, Multimedia...
        </Text>
      </Card>

      <Card
        shadow="lg"
        p="xl"
        component="a"
        href="/science-et-technologie"
        sx={{
          "&:hover": {
            boxShadow: "0 0 30px #dbd5d490",
            transition: "all .5s",
          },
        }}
      >
        <Card.Section>
          <Image
            src="./assets/Science et technology.jpg"
            height={160}
            alt="No way!"
          />
        </Card.Section>

        <Text weight={500} size="lg" mt="md">
          Science et Technologie
        </Text>

        <Text mt="xs" color="dimmed" size="sm">
          Modules de 1ere année,2eme année :Physique, Chimie, Informatique,
          Maths ,Analyse, Probabilité...{" "}
        </Text>
      </Card>

      <Card
        shadow="lg"
        p="xl"
        component="a"
        href="/biologie"
        sx={{
          "&:hover": {
            boxShadow: "0 0 30px #dbd5d490",
            transition: "all .5s",
          },
        }}
      >
        <Card.Section>
          <Image
            src="./assets/Biologie.jpg"
            height={160}
            alt="No way!"
          />
        </Card.Section>

        <Text weight={500} size="lg" mt="md">
          Biologie{" "}
        </Text>

        <Text mt="xs" color="dimmed" size="sm">
          SNV,Biochimie,Microbiologie, Ecologie, Génétique , Bacteriologie,
          Zoologie, Biotechnologie...
        </Text>
      </Card>

      <Card
        shadow="lg"
        p="xl"
        component="a"
        href="/physique"
        sx={{
          "&:hover": {
            boxShadow: "0 0 30px #dbd5d490",
            transition: "all .5s",
          },
        }}
      >
        <Card.Section>
          <Image
            src="./assets/physique.png"
            height={160}
            alt="No way!"
          />
        </Card.Section>

        <Text weight={500} size="lg" mt="md">
          Physique{" "}
        </Text>

        <Text mt="xs" color="dimmed" size="sm">
          Physique Théorique, Energétique, Physique des Rayonnement,
          NanoPhysique, Physique Nucléaire...
        </Text>
      </Card>

      <Card
        shadow="lg"
        p="xl"
        component="a"
        href="/telecommunication"
        sx={{
          "&:hover": {
            boxShadow: "0 0 30px #dbd5d490",
            transition: "all .5s",
          },
        }}
      >
        <Card.Section>
          <Image
            src="./assets/telecom.jpg"
            height={160}
            alt="No way!"
          />
        </Card.Section>

        <Text weight={500} size="lg" mt="md">
          Telecommunication
        </Text>

        <Text mt="xs" color="dimmed" size="sm">
          Signaux, Systèmes, Controle, Internet ,Multimédia,Communication Sans
          Fil, Radio ,Signal...
        </Text>
      </Card>

      <Card
        shadow="lg"
        p="xl"
        component="a"
        href="/electronique"
        sx={{
          "&:hover": {
            boxShadow: "0 0 30px #dbd5d490",
            transition: "all .5s",
          },
        }}
      >
        <Card.Section>
          <Image
            src="./assets/electronique.png"
            height={160}
            alt="No way!"
          />
        </Card.Section>

        <Text weight={500} size="lg" mt="md">
          Electronique
        </Text>

        <Text mt="xs" color="dimmed" size="sm">
          Microélectronique, Optoélectroniques, Systèmes embarqués,
          Instrumentation, Robotique...
        </Text>
      </Card>
    </>
  );
}
export default ContentBox;
