import { SimpleGrid } from "@mantine/core";
import React from "react";
import ContentBox from "./Paper";

function GridSystem() {
  return (
    <SimpleGrid
      cols={3}
      spacing="xl"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: "md" },
        { maxWidth: 755, cols: 2, spacing: "sm" },
        { maxWidth: 600, cols: 1, spacing: "sm" },
      ]}
    >
      <ContentBox />
    </SimpleGrid> 
  );
}

export default GridSystem;
