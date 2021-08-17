import styled from "styled-components";

export const StyledApp = styled.div`
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
    height: 150vh;
  }
`;

export const StyledHeaderDiv = styled.div`
  grid-area: Header;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const MainLogo = styled.img`
  max-width: 20vw;
  min-width: 200px;
  height: auto;
`;
export const StyledMainTitle = styled.span`
  font-family: "Tourney", cursive;
  font-size: clamp(70px, 2vw, 120px);
  text-shadow: 4px 4px 4px #aaa;
`;

export const StyledCard = styled.span`
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  background: #b5e2fa;
  width: clamp(100px, 20vw, 500px);

  font-size: calc(1vw + 1vh + 0.5vmin);
  display: inline-block;
  border-radius: 51% 49% 31% 69% / 100% 0% 100% 0%;
  text-align: center;
  margin-top: 1vh;
`;
export const InfoIcon = styled.img``;
export const StyledCityName = styled.div`
  padding-top: 5vh;
`;
export const StyledTempString = styled.div`
  padding-bottom: 1vh;
`;

export const StyledDefaultCities = styled.div`
  grid-area: DefaultCities;
  align-items: center;
  text-align: center;
`;

export const StyledLocate = styled.div`
  grid-area: Locate;
  align-items: center;
  text-align: center;
`;
export const LocationTitle = styled.div`
  font-size: calc(1vw + 1vh + 0.5vmin);
  text-decoration: underline;
`;
export const StyledButton = styled.button`
  font-size: calc(1vw + 1vh + 0.5vmin);
  font-weight: 200;
  letter-spacing: 1px;
  width: clamp(100px, 25vw, 500px);
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  margin-top: 1vh;
  ::after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }
  :hover::after {
    top: 0px;
    left: 0px;
  }
`;
export const StyledWarning = styled.u`
  font-size: calc(0.5vw + 0.5vh + 0.5vmin);
  text-decoration: underline;
`;

export const StyledInput = styled.input`
  border-radius: 10px;
  width: clamp(100px, 25vw, 500px);
  height: 5vh;
  margin-top: 1vh;
  font-size: calc(1vw + 1vh + 0.5vmin);
`;
export const StyledSearch = styled.div`
  grid-area: Search;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: calc(1vw + 1vh + 0.5vmin);
  text-decoration: underline;
`;
