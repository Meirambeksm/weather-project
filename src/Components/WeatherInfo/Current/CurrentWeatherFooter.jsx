import styles from "./currentWeatherFooter.module.css";
import Button from "../../Additional/Button";

export default function CurrentWeatherFooter({ weather, setCurrent }) {
  function getTime(time, zone) {
    const date = new Date((time + zone) * 1000);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  return (
    <div className={styles.footer}>
      <div className={styles.time}>
        <p>Sunrise:</p>
        <p>{getTime(weather.sys.sunrise, weather.timezone)}</p>
      </div>
      <Button onClick={() => setCurrent(false)} type="secondary">
        See 5 days forecast
      </Button>
      <div className={styles.time}>
        <p>Sunset:</p>
        <p>{getTime(weather.sys.sunset, weather.timezone)}</p>
      </div>
    </div>
  );
}
