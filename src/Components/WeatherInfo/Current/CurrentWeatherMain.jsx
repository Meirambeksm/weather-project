import styles from "./currentWeatherMain.module.css";

export default function CurrentWeatherMain({
  geo,
  city,
  weather,
  weatherIcons,
}) {
  return (
    <div className={styles.currentWeatherMainWrapper}>
      <div className={styles.currentWeatherMain}>
        <p className={styles.location}>
          {geo ? `Your current geolocation (${city})` : city}
        </p>
        <p className={styles.description}>{weather.weather[0].description}</p>
      </div>
      <img
        className={styles.image}
        src={weatherIcons[weather.weather[0]?.description]}
        alt="weather icon"
      />
    </div>
  );
}
