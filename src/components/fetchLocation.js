const fetchLocation = async (coordinates) => {
  try {
    let response = await fetch(
      process.env.REACT_APP_GEO_API_URL +
        "reverse?access_key=" +
        process.env.REACT_APP_GEO_API_KEY +
        "&query=" +
        coordinates
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export default fetchLocation;
/*
 */
