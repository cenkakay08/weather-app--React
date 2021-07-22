import styled, { css } from "styled-components";

const Header = () => {
  return (
    <StyledHeaderDiv>
      <StyledMainTitle>Weather Storm</StyledMainTitle>
      <div>
        <MainLogo src="mainLogo.png"></MainLogo>
      </div>
    </StyledHeaderDiv>
  );
};

const StyledHeaderDiv = styled.div`
  grid-area: Header;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const MainLogo = styled.img`
  max-width: 20vw;
  min-width: 200px;
  height: auto;
`;
const StyledMainTitle = styled.span`
  font-family: "Tourney", cursive;
  font-size: calc(2vw + 2vh + 0.5vmin);
  text-shadow: 4px 4px 4px #aaa;
`;

export default Header;
