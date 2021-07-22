import turkeyCityList from "../turkeyCityList";
import getWeatherInfoFromApiByCity from "./getWeatherInfoFromApiByCity";
import { StyledSearch, StyledInput } from "../styles/styledComponents";
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

export default SearchCity;
