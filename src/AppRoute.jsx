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
          <HashRouter>
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
            <ToggleButton />
            <Routes>
              <Route path="/daily" element={<App />} />
              <Route path="/daily/Informatique" element={<Informatique />} />
              <Route
                path="/daily/Informatique/Algorithmique_1"
                element={<Algorithm />}
              />
              <Route
                path="/daily/Informatique/Algorithm/DownloadPage"
                element={<DownloadPage />}
              />

              <Route
                path="/daily/Science-et-technologie"
                element={<ScienceEtTechnologie />}
              />
              <Route path="/daily/Physique" element={<Physique />} />
              <Route path="/daily/Electronique" element={<Electronique />} />
              <Route
                path="/daily/Telecommunications"
                element={<Telecommunications />}
              />
              <Route path="/daily/Biologie" element={<Biologie />} />
            </Routes>
            <Footer />
          </MantineProvider>
        </ColorSchemeProvider>
      </HashRouter>
    </>
  );
}

export default AppRoute;
