import getData from "../../Services/getData";
import Button from "../Additional/Button";
import styles from "./navigation.module.css";

export default function Navigation({
  city,
  setCity,
  apiKey,
  setLoading,
  setError,
  setGeo,
  setDisplayGetWeather,
  input,
  setShowWeather,
}) {
  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getData(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${apiKey}`,
            setCity,
            setLoading,
            setError,
            "city"
          );
        },
        (error) => {
          setError(`${error.message}, please give access in your browser`);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  function handleInputChange(e) {
    setDisplayGetWeather(true);
    setCity(e.target.value);
  }

  function handleGeoRequest() {
    getUserLocation();
    setGeo(true);
    setDisplayGetWeather(true);
    setShowWeather(false);
    input.current.value = city;
  }

  function handleReset() {
    setShowWeather(false);
    setGeo(false);
  }

  return (
    <div className={styles.navigation}>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          ref={input}
          onChange={(e) => handleInputChange(e)}
          onFocus={handleReset}
          placeholder="Enter City Name..."
        />
        <Button onClick={handleGeoRequest} type="geo">
          <img
            className={styles.geoImage}
            src="./Assets/geolocation-icon.svg"
            alt="geolocation icon"
          />
        </Button>
      </div>
    </div>
  );
}
