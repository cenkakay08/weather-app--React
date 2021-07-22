import { useState } from "react";
import styled, { css } from "styled-components";

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
const StyledCard = styled.span`
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  background: #b5e2fa;
  min-width: fit-content;
  width: 20vw;
  font-size: calc(1vw + 1vh + 0.5vmin);
  display: inline-block;
  border-radius: 51% 49% 31% 69% / 100% 0% 100% 0%;
  text-align: center;
  margin-top: 1vh;
`;
const InfoIcon = styled.img``;
const StyledCityName = styled.div`
  padding-top: 5vh;
`;
const StyledTempString = styled.div`
  padding-bottom: 1vh;
`;
export default WeatherCard;
