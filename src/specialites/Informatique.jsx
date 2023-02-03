import {
  Autocomplete,
  Box,
  Container,
  Flex,
  Kbd,
  SimpleGrid,
  Space,
  Title,
} from "@mantine/core";
import { IconArrowNarrowLeft, IconSearch } from "@tabler/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../Theme";

function Informatique() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const modules = [
    "Sujets_Doctorat_Informatique",
    "Algorithmique_Avancée_et_Complexité ",
    "Administration_de_base_de_donnees ",
    "Administration_des_serveurs_Web",
    "Algorithmique_1 ",
    "Algorithmique_2",
    "Algorithmique_et_structures_de_donnees ",
    "Analyse_1 ",
    "Algebre_1 ",
    "Analyse_2 ",
    "Algebre_2 ",
    "Analyse_de_donnees ",
    "Analyse_de_faisabilite ",
    "Analyse_et_Conception_des_Système_d’Information",
    "Analyse_numerique ",
    "Architecture_Client/Serveur",
    "Apprentissage_automatique ",
    "Apprentissage_supervise ",
    "Architecture_des_ordinateurs ",
    "Architecture_DNS",
    "Architecture_TCP/IP ",
    "Architectures_logicielles",
    "Architectures_parallèles ",
    "Aspects_Juridiques_et_Économiques_du_Logiciel_(AJEL)",
    "Application_mobile ",
    "Base_de_donnees_NoSQL ",
    "Bases de données avancées",
    "Bases de donnees (bdd)",
    "Big data",
    "Calculabilite ",
    "CCNA Cisco ",
    "Chaine de mesure et labview",
    "Cloud Computing",
    "Codage Multimedia",
    "Codage",
    "Compilation ",
    "Circuits electriques ",
    "Applications reparties",
    "Codage et representation de l’information",
    "Cryptographie ",
    "Chimie 1 (structure de matiere)",
    "Development en html5 et css",
    "Development en javascript",
    "Development php et mysql",
    "Development en Visual Basic ",
    "Developpement en ajax ",
    "Developpement Angularjs ",
    "Developpement en bash",
    "Developpement en c# ",
    "Developpement de jeux video",
    "Developpement en Django ",
    "Developpement en JEE ",
    "Developpement mobiles",
    "Developpement Multiplateforme ",
    "Developpement en Node.js ",
    "Developpement en Perl",
    "Developpement en Python",
    "Developpement Web ",
    "Développement en XML",
    "Logique Formelle (mathématique)",
    "Droit de l'Informatique ",
    "Anglais informatique ",
    "Electronique ",
    "Economie Générale",
    "Ergonomie Web ",
    "ERP",
    "Data mining (fouille de données) ",
    "GNU/Linux",
    "Histoire des sciences",
    "Infographie ",
    "Entrepot de donnees",
    "Modélisation et simulation des réseaux ",
    "Informatique Decisionnelle ",
    "Informatique quantique",
    "Informatique Temps Reel ",
    "Ingenierie dirigee par les Modèles",
    "Interaction Homme - Machine (IHM) ",
    "Genie Logiciel ",
    "Intelligence Artificielle",
    "Reseaux d'entreprise ",
    "Modelisation et Evaluation de Performances des Systèmes ",
    "mongoDB ",
    "Optimisation des bases de donnees ",
    "Paradigmes des langages de programmation ",
    "Patrons de conception (Design patterns)",
    "Persistance de donnees ",
    "Programmation fonctionnelle",
    "Processus de Developpement de Logiciels ",
    "Progiciels de Gestion Integres ",
    "Programmation 3D",
    "Programmation evenementielle ",
    "Programmation generique ",
    "Programmation imperative",
    "Programmation lineaire ",
    "Programmation logique (prolog) ",
    "Programmation Orientee Objet (Poo) ",
    "Programmation par contraintes",
    "Physique 1 (mecanique de point)",
    "Physique 2 (electrostatique)",
    "Qualite de logiciels",
    "Qualité et Gestion de projet informatique ",
    "Realite Virtuelle ",
    "Multimédia et Qualité de service",
    "Methode numerique ",
    "Reseaux avances ",
    "Reseaux de Capteurs ",
    "Reseaux de neurones ",
    "Reseaux de Petri",
    "Reseaux de prochaine generation",
    "Reseaux de terrain ",
    "Reseaux et mobilite ",
    "Reseaux etendus ",
    "Reseaux Haut Debit ",
    "Reseaux ",
    "Réseaux sans fils et réseaux mobiles ",
    "Reseaux MPLS ",
    "Reseaux d’operateurs ",
    "Radiocommunication",
    "Reseaux telecommunication ",
    "RFID / NFC ",
    "RTC / PABX",
    "Securite de l'Internet (cybersecurite)",
    "Securite des donnees dans le Cloud computing ",
    "Securite des reseaux mobiles ",
    "Securite des reseaux ",
    "Securite Informatique",
    "Securite logicielle ",
    "Securite de l'information",
    "Semantique des langages de programmation ",
    "Signaux et systèmes",
    "Structure Machine ",
    "Structures et fonctionnement des ordinateurs",
    "Supervision des reseaux ",
    "Systèmes d’exploitation",
    "System On Chip",
    "Systèmes Distribues",
    "Systemes Embarques ",
    "Systèmes d'Information cooperatifs",
    "Informatique Decisionnelle",
    "Systèmes d’Information",
    "Systemes interactifs",
    "Systemes multi-agents",
    "Systemes temps reel ",
    "Systemes Decisionnels et Entrepots ",
    "Techniques d’optimisation",
    "Technologies d'accès ",
    "Teleinformatique ",
    "Analyse fonctionnelle",
    "Telematique ",
    "Telephonie ",
    "Terminologie scientifique et expression",
    "Theorie de l'information et Codage ",
    "Theorie des Graphes ",
    "Theorie des langages ",
    "Theorie des organisation",
    "Theorie des files d’attente ",
    "Techniques de l’Information et de la Communication",
    "Trafic et controle dans les reseaux",
    "Traitement Image ",
    "Transmissions reseaux ",
    "Types abstraits",
    "UML",
    "Urbanisation des Systèmes d'Informations ",
    "verification formelle de systèmes d'information ",
    "VHDL Language ",
    "Vision Artificielle ",
    "Wavelength Division Multiplexing (WDM)",
    "Web semantique (owl)",
    "WLAN (réseaux sans fils)",
  ];
  const { classes } = useStyles();
  const rightSection = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Kbd>Shift</Kbd>
      <span style={{ margin: "0 5px" }}>+</span>
      <Kbd>Alt</Kbd>
      <span style={{ margin: "0 5px" }}>+</span>
      <Kbd>F</Kbd>
    </div>
  );
  return (
    <>
      <Container>
        <Flex align={"center"} justify={"flex-start"}>
          <IconArrowNarrowLeft
            onClick={() => navigate(-1)}
            strokeWidth={2}
            size={"4rem"}
          />
          <Space w="22vw" />
          <Title order={2}>Informatique</Title>
        </Flex>
      </Container>
      <Container>
        <Autocomplete
          icon={<IconSearch />}
          placeholder="Search ..."
          data={modules}
          rightSectionWidth={160}
          rightSection={rightSection}
          size={"md"}
          styles={{ rightSection: { pointerEvents: "none" } }}
          accessKey="f"
          onChange={(e) => setSearch(e)}
        />

        <Space h={"2rem"} />
        <SimpleGrid cols={1} spacing="sm">
          {modules
            ?.filter((module) => {
              if (search === "") {
                return module;
              } else if (module.toLowerCase().includes(search.toLowerCase())) {
                return module;
              }
            })
            .map((module, index) => {
              return (
                <Box
                  key={index}
                  component="a"
                  sx={classes.sx}
                  href={`/Informatique/${module}`}
                >
                  {module}
                </Box>
              );
            })}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Informatique;
