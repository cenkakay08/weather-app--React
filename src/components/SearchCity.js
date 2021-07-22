import turkeyCityList from "../turkeyCityList";
import getWeatherInfoFromApiByCity from "./getWeatherInfoFromApiByCity";
import styled, { css } from "styled-components";
import { useState } from "react";
import WeatherCard from "./WeatherCard";
const SearchCity = () => {
  const [weatherInfo, setWeatherInfo] = useState("");
  const handleInput = async (e) => {
    const response = await getWeatherInfoFromApiByCity(
      e.target.value.toString()
    );
    setWeatherInfo(response);
  };
  return (
    <StyledSearch>
      <div>Look for your City</div>
      <StyledInput
        list="cities"
        placeholder="Enter City Name"
        id="city"
        onChange={handleInput}
      />
      <datalist id="cities">
        {turkeyCityList.map((cityName, i) => (
          <option value={cityName} key={i} />
        ))}
      </datalist>
      <div>
        {weatherInfo.name ? <WeatherCard {...weatherInfo}></WeatherCard> : null}
      </div>
    </StyledSearch>
  );
};
const StyledInput = styled.input`
  border-radius: 10px;
  width: 20vw;
  height: 5vh;
  margin-top: 1vh;
  font-size: calc(1vw + 1vh + 0.5vmin);
`;
const StyledSearch = styled.div`
  grid-area: Search;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: calc(1vw + 1vh + 0.5vmin);
  text-decoration: underline;
`;

export default SearchCity;
