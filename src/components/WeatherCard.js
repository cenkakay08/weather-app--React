import {
  StyledCard,
  StyledCityName,
  InfoIcon,
  StyledTempString,
} from "../styles/styledComponents";

const WeatherCard = (props) => {
  const weatherIconString =
    "https://openweathermap.org/img/wn/" + props.weather[0].icon + "@2x.png";
  return (
    <>
      {props.name ? (
        <StyledCard>
          <StyledCityName>{props.name}</StyledCityName>
          <InfoIcon src={weatherIconString}></InfoIcon>
          <StyledTempString>{props.main.temp} °</StyledTempString>
        </StyledCard>
      ) : (
        <div>Sorry we could not find your City. Check the name please!</div>
      )}
    </>
  );
};

export default WeatherCard;
