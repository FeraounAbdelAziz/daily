import React from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { Route, Routes, HashRouter } from "react-router-dom";
import App from "./App";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Informatique from "./specialites/Informatique";
import ScienceEtTechnologie from "./specialites/ScienceEtTechnologie";
import Physique from "./specialites/Physique";
import Electronique from "./specialites/Electronique";
import Telecommunications from "./specialites/Telecommunications";
import Biologie from "./specialites/Biologie";
import Algorithm from "./courses/Informatique/Algorithm";
import Footer from "./components/Footer";
import ToggleButton from "./components/ToggleButton";
import DownloadPage from "./DownloadPage";
function AppRoute() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "color-scheme",
    defaultValue: "light",
  });
  const toggleColorScheme = () => {
    setColorScheme((current) => (current === "dark" ? "light" : "dark"));
  };
  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
          }}
        >
          <HashRouter>
            <ToggleButton />
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/Informatique" element={<Informatique />} />
              <Route
                path="/Informatique/Algorithmique_1"
                element={<Algorithm />}
              />
              <Route
                path="/Informatique/Algorithm/DownloadPage"
                element={<DownloadPage />}
              />

              <Route
                path="/Science-et-technologie"
                element={<ScienceEtTechnologie />}
              />
              <Route path="/Physique" element={<Physique />} />
              <Route path="/Electronique" element={<Electronique />} />
              <Route
                path="/Telecommunications"
                element={<Telecommunications />}
              />
              <Route path="/Biologie" element={<Biologie />} />
            </Routes>
            <Footer />
          </HashRouter>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default AppRoute;
