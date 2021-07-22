import {
  StyledHeaderDiv,
  StyledMainTitle,
  MainLogo,
} from "../styles/styledComponents";

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

export default Header;
