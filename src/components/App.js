import styled from "styled-components";
import GetClientCoordinates from "./GetClientCoordinates";
import "../App.css";
import { StyledApp } from "../styles/styledComponents";
import Header from "./Header";
import SearchCity from "./SearchCity";
import DefaultCities from "./DefaultCities";

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
