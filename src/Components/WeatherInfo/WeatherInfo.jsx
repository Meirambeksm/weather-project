import { useState } from "react";
import styles from "./weatherInfo.module.css";
import Button from "../Additional/Button";
import CurrentWeather from "../WeatherInfo/Current/CurrentWeather";
import ForecastWeather from "../WeatherInfo/Forecast/ForecastWeather";
import getData from "./../../Services/getData";
import Loading from "../Additional/Loading";

export default function WeatherInfo({
  city,
  setCity,
  apiKey,
  loading,
  setLoading,
  error,
  setError,
  geo,
  displayGetWeather,
  setDisplayGetWeather,
  input,
  showWeather,
  setShowWeather,
}) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [current, setCurrent] = useState(true);
  const weatherIcons = {
    "clear sky": "/Assets/clear-sky.png",
    "few clouds": "/Assets/few-clouds.png",
    "scattered clouds": "/Assets/scattered-clouds.png",
    "broken clouds": "/Assets/broken-clouds.png",
    "overcast clouds": "/Assets/broken-clouds.png",
    "light rain": "/Assets/shower-rain.png",
    "shower rain": "/Assets/shower-rain.png",
    rain: "/Assets/rain.png",
    thunderstorm: "/Assets/thunderstorm.png",
    snow: "/Assets/snow.png",
    mist: "/Assets/mist.png",
  };

  async function getWeather() {
    setCity(input.current.value);

    if (!city.trim()) return;

    const weatherSuccess = await getData(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
      setWeather,
      setLoading,
      setError,
      "weather"
    );

    if (!weatherSuccess) return;

    const forecastSuccess = await getData(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`,
      setForecast,
      setLoading,
      setError,
      "weather"
    );

    if (!forecastSuccess) return;

    setShowWeather(true);
    setCurrent(true);
    setDisplayGetWeather(false);
    input.current.value = "";
  }

  return (
    <div className={styles.weatherInfo}>
      {error && <p className={styles.error}>{error}. Enter valid city name!</p>}
      {displayGetWeather && (
        <Button onClick={getWeather} type="primary">
          Get Weather
        </Button>
      )}
      {loading && <Loading />}
      {!loading && showWeather && (
        <div>
          {current && (
            <CurrentWeather
              weather={weather}
              weatherIcons={weatherIcons}
              geo={geo}
              city={city}
              setCurrent={setCurrent}
            />
          )}
          {!current && (
            <ForecastWeather
              city={city}
              forecast={forecast}
              geo={geo}
              weatherIcons={weatherIcons}
              setCurrent={setCurrent}
            />
          )}
        </div>
      )}
    </div>
  );
}
