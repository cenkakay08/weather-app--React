const getWeatherInfoFromApiByCity = async (CityName) => {
  try {
    console.log("how many time i called that api");
    let response = await fetch(
      process.env.REACT_APP_WEATHER_API_URL +
        CityName +
        "&units=metric&appid=" +
        process.env.REACT_APP_WEATHER_API_KEY
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export default getWeatherInfoFromApiByCity;
