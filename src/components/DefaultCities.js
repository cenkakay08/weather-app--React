import { useEffect, useState } from "react";
import getDefaultCitiesInfo from "./getDefaultCitiesInfo";
import WeatherCard from "./WeatherCard";
import styled, { css } from "styled-components";

const DefaultCities = () => {
  const [defaultCities, setDefaultCities] = useState(null);
  useEffect(async () => {
    setDefaultCities(await getDefaultCitiesInfo());
  }, []);
  return (
    <StyledDefaultCities>
      {defaultCities
        ? defaultCities.map((city) => <WeatherCard {...city}></WeatherCard>)
        : null}
    </StyledDefaultCities>
  );
};
const StyledDefaultCities = styled.div`
  grid-area: DefaultCities;
  align-items: center;
  text-align: center;
`;
export default DefaultCities;
