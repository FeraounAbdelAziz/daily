import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  sx: {
    display: "block",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[6]
        : theme.colors.gray[7],
    textAlign: "center",
    textDecoration: "none",
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    cursor: "pointer",
  },
  //Footer
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));
