import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
} from "@mantine/core";
import ToggleButton from "./ToggleButton";

export function Header() {
  
  const useStyles = createStyles((theme) => ({
    hero: {
      position: "relative",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingBottom: theme.spacing.xl * 6,
      zIndex: 1,
      position: "relative",
      marginBottom: "2rem",
      height: "100vh",
  
      [theme.fn.smallerThan("sm")]: {
        height: "100vh",
        paddingBottom: theme.spacing.xl * 3,
      },
    },
  
    title: {
      color: theme.white,
      fontSize: 60,
      fontWeight: 900,
      lineHeight: 1.1,
  
      [theme.fn.smallerThan("sm")]: {
        fontSize: 40,
        lineHeight: 1.2,
      },
  
      [theme.fn.smallerThan("xs")]: {
        fontSize: 20,
        lineHeight: 1.3,
      },
    },
    description: {
      color: theme.white,
      maxWidth: 600,
  
      [theme.fn.smallerThan("sm")]: {
        maxWidth: "100%",
        fontSize: theme.fontSizes.sm,
      },
    },
  
    control: {
      marginTop: theme.spacing.xl * 1.5,
  
      [theme.fn.smallerThan("sm")]: {
        width: "100%",
      },
    },
  }));
  
  const { classes } = useStyles();
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <ToggleButton />
      <Container className={classes.container}>
        <Title className={classes.title}>UnivPDF Website</Title>
        <Text className={classes.description} size="xl" mt="xl">
          {/* Discover the convenience of learning on your own terms with UnivPDF, your go-to source for high-quality university courses in PDF format ... */}
          The ultimate resource for top-quality university study materials
        </Text>

        <Button
          variant="gradient"
          size="xl"
          radius="xl"
          className={classes.control}
        >
          Get started
        </Button>
      </Container>
    </div>
  );
}
export default Header;
