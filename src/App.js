import GetClientCoordinates from "./components/GetClientCoordinates";
import "./App.css";
import { StyledApp } from "./styles/styledComponents";
import Header from "./components/Header";
import SearchCity from "./components/SearchCity";
import DefaultCities from "./components/DefaultCities";

const App = () => {
  return (
    <StyledApp>
      <Header></Header>
      <SearchCity></SearchCity>
      <GetClientCoordinates></GetClientCoordinates>
      <DefaultCities></DefaultCities>
    </StyledApp>
  );
};

export default App;
