import styles from "./currentWeatherDetails.module.css";

export default function CurrentWeatherDetails({ weather }) {
  return (
    <div className={styles.details}>
      <p className={styles.temperature}>{weather.main.temp.toFixed(0)}°C</p>
      <div className={styles.infoWrapper}>
        <p className={styles.title}>Details</p>
        <div className={styles.divider}></div>

        <div className={styles.info}>
          <p>
            Pressure <span>{weather.main.pressure}hPa</span>
          </p>
          <p>
            Humidity <span>{weather.main.humidity}%</span>
          </p>
          <p>
            Wind <span>{weather.wind.speed}m/s</span>
          </p>
        </div>
      </div>
    </div>
  );
}
