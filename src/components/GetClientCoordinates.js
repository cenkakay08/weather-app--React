import React, { useEffect, useState } from "react";
import {
  StyledLocate,
  LocationTitle,
  StyledWarning,
  StyledButton,
} from "../styles/styledComponents";
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

export default GetClientCoordinates;
