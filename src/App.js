import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import getWeatherInfoFromApiByCity from "./getWeatherInfoFromApiByCity";

function App() {
  const [apiData, setApiData] = useState("");
  useEffect(async () => {
    setApiData(await getWeatherInfoFromApiByCity("istanbul"));
  }, []);
  useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        {apiData.toString()}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
