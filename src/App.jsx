import { useEffect, useState } from "react";
import { useRef } from "react";
import Navigation from "./Components/SearchBar/Navigation";
import WeatherInfo from "./Components/WeatherInfo/WeatherInfo";

export default function App() {
  const [city, setCity] = useState("");
  const [geo, setGeo] = useState(false);
  const [displayGetWeather, setDisplayGetWeather] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const input = useRef(null);
  const apiKey = "6939db6e9eaeb3666bfbbacf93470984";

  useEffect(() => {
    if (input.current) {
      input.current.value = city;
    }
  }, [city, input]);

  return (
    <>
      <Navigation
        city={city}
        setCity={setCity}
        apiKey={apiKey}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
        setGeo={setGeo}
        setDisplayGetWeather={setDisplayGetWeather}
        setShowWeather={setShowWeather}
        input={input}
      />
      <WeatherInfo
        city={city}
        setCity={setCity}
        apiKey={apiKey}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
        geo={geo}
        displayGetWeather={displayGetWeather}
        setDisplayGetWeather={setDisplayGetWeather}
        showWeather={showWeather}
        setShowWeather={setShowWeather}
        input={input}
      />
    </>
  );
}
