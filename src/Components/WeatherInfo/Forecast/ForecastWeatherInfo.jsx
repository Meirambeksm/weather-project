import styles from "./forecastWeatherInfo.module.css";

export default function ForecastWeatherInfo({ forecast, weatherIcons, day }) {
  function getDay(time) {
    const date = new Date(time * 1000);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  }
  return (
    <div className={styles.card}>
      <div className={styles.main}>
        <p className={styles.day}>
          {getDay(forecast.list[day].dt).slice(0, 3)}
        </p>
        <p className={styles.temp}>
          {forecast.list[day].main.temp.toFixed()}°C
        </p>
      </div>

      <div className={styles.description}>
        <img
          className={styles.weatherIcon}
          src={weatherIcons[forecast.list[day].weather[0].description]}
          alt="weather icon"
        />
        <p className={styles.weatherDescription}>
          {forecast.list[day].weather[0].description}
        </p>
      </div>

      <div className={styles.details}>
        <p>
          Pressure: <span>{forecast.list[day].main.pressure}</span> hPa
        </p>
        <p>
          Humidity: <span>{forecast.list[day].main.humidity}</span>%
        </p>
        <p>
          Wind: <span>{forecast.list[day].wind.speed}</span> m/s
        </p>
      </div>
    </div>
  );
}
