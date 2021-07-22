import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import fetchLocation from "./fetchLocation";
import getWeatherInfoFromApiByCity from "./getWeatherInfoFromApiByCity";
import WeatherCard from "./WeatherCard";

const GetClientCoordinates = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [detectedCity, setDetectedCity] = useState("");
  const getLocation = async () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);

          var city = await fetchLocation(
            position.coords.latitude + "," + position.coords.longitude
          );
          setDetectedCity(
            await getWeatherInfoFromApiByCity(city.data[0].region)
          );
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  useEffect(getLocation, [lat, lng]);

  return (
    <StyledLocate>
      <LocationTitle>Find my Location</LocationTitle>
      <div>
        <StyledWarning>
          You have to permit to location on browser settings!
        </StyledWarning>
      </div>
      {lat ? null : (
        <StyledButton onClick={getLocation}>Find my City</StyledButton>
      )}
      <div></div>
      {detectedCity.name ? <WeatherCard {...detectedCity}></WeatherCard> : null}
    </StyledLocate>
  );
};
const StyledLocate = styled.div`
  grid-area: Locate;
  align-items: center;
  text-align: center;
`;
const LocationTitle = styled.div`
  font-size: calc(1vw + 1vh + 0.5vmin);
  text-decoration: underline;
`;
const StyledButton = styled.button`
  font-size: calc(1vw + 1vh + 0.5vmin);
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
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
const StyledWarning = styled.u`
  font-size: calc(0.5vw + 0.5vh + 0.5vmin);
  text-decoration: underline;
`;
export default GetClientCoordinates;
