import { useEffect, useState } from "react";
import getDefaultCitiesInfo from "./getDefaultCitiesInfo";
import WeatherCard from "./WeatherCard";
import { StyledDefaultCities } from "../styles/styledComponents";

const DefaultCities = () => {
  const [defaultCities, setDefaultCities] = useState(null);
  useEffect(async () => {
    setDefaultCities(await getDefaultCitiesInfo());
  }, []);
  return (
    <StyledDefaultCities>
      {defaultCities
        ? defaultCities.map((city, i) => (
            <WeatherCard key={i} {...city}></WeatherCard>
          ))
        : null}
    </StyledDefaultCities>
  );
};

export default DefaultCities;
