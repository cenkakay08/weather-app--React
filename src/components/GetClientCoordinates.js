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
import Swal from "sweetalert2";

const GetClientCoordinates = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [detectedCity, setDetectedCity] = useState(null);
  const getLocation = async () => {
    try {
      let response = await fetch(process.env.REACT_APP_GEO_FULL);
      let json = await response.json();
      setDetectedCity(await getWeatherInfoFromApiByCity(json.city));
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Please disable the Adblock extensions!",
        icon: "error",
        confirmButtonText: "Cool",
      });
      console.error(error);
    }
  };

  return (
    <StyledLocate>
      <LocationTitle>Find my Location</LocationTitle>

      {detectedCity ? null : (
        <StyledButton onClick={getLocation}>Find my City</StyledButton>
      )}
      <div></div>
      {detectedCity ? <WeatherCard {...detectedCity}></WeatherCard> : null}
    </StyledLocate>
  );
};

export default GetClientCoordinates;
