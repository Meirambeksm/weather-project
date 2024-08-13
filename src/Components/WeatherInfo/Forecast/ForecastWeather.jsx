import styles from "./forecastWeather.module.css";
import ForecastWeatherInfo from "./ForecastWeatherInfo";
import Button from "../../Additional/Button";

export default function ForecastWeather({
  city,
  forecast,
  weatherIcons,
  setCurrent,
  geo,
}) {
  const forecastArray = [7, 15, 23, 31, 39];

  return (
    <div className={styles.forecastContainer}>
      <h4 className={styles.heading}>
        {geo
          ? `Weather for 5 days in your geolocation (${city})`
          : `Weather for 5 days in ${city}`}
      </h4>
      {forecastArray.map((day) => (
        <div key={day}>
          <ForecastWeatherInfo
            day={day}
            forecast={forecast}
            weatherIcons={weatherIcons}
          />
        </div>
      ))}
      <Button onClick={() => setCurrent(true)} type="secondary">
        See current weather
      </Button>
    </div>
  );
}
