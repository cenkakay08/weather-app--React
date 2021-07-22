import styled from "styled-components";
import GetClientCoordinates from "./GetClientCoordinates";
import "../App.css";

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
const StyledApp = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.7fr 1.1fr 1.2fr;
  gap: 3% 3%;
  grid-template-areas:
    "Header Header Header Header"
    "Search Search Locate Locate"
    "DefaultCities DefaultCities DefaultCities DefaultCities";
  background-image: url("https://img1.picmix.com/output/stamp/normal/8/9/3/7/697398_ab88f.gif");
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 500px) {
    height: 120vh;
  }
`;
export default App;
