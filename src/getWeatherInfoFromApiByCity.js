const getWeatherInfoFromApiByCity = async (CityName) => {
  try {
    let response = await fetch(
      process.env.REACT_APP_API_URL +
        CityName +
        "&units=metric&appid=" +
        process.env.REACT_APP_API_KEY
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export default getWeatherInfoFromApiByCity;
