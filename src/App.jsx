import {
  Container,
} from "@mantine/core";
import GridSystem from "./components/GridSystem.jsx";
import Header from "./components/Header.jsx";
function App() {
  
  return (
    <>
      <Header />
      <Container size="xl" px="xl">
        <GridSystem />
      </Container>
    </>
      
  );
}
export default App;
