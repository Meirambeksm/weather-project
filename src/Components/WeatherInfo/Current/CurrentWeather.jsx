import styles from "./currentWeather.module.css";
import CurrentWeatherMain from "./CurrentWeatherMain";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import CurrentWeatherFooter from "./CurrentWeatherFooter";

export default function CurrentWeather({
  weather,
  weatherIcons,
  geo,
  city,
  setCurrent,
}) {
  return (
    <div className={styles.currentWeather}>
      <CurrentWeatherMain
        geo={geo}
        city={city}
        weather={weather}
        weatherIcons={weatherIcons}
      />
      <CurrentWeatherDetails weather={weather} />
      <CurrentWeatherFooter weather={weather} setCurrent={setCurrent} />
    </div>
  );
}
