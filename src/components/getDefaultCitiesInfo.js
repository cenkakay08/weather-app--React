import getWeatherInfoFromApiByCity from "./getWeatherInfoFromApiByCity";

const getDefaultCitiesInfo = async () => {
  const cities = ["new york", "london", "paris", "tokyo"];
  let citiesInfo = [];
  for (let i = 0; i < cities.length; i++) {
    citiesInfo.push(await getWeatherInfoFromApiByCity(cities[i]));
  }
  return citiesInfo;
};

export default getDefaultCitiesInfo;
