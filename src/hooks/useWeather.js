import { useState } from 'react';
import WeatherService from '../services/WeatherService';

export default function useHome() {
  const [city, setCity] = useState('');
  const [weatherForecast, setWeatherForecast] = useState(null);

  function handleSetCity(event) {
    setCity(event.target.value);
  }

  const handleSearch = async () => {
    await WeatherService.getWeather(city).then((data) => {
      setWeatherForecast(data);
    });
  };

  return {
    city,
    handleSetCity,
    handleSearch,
    weatherForecast,
    setWeatherForecast,
  };
}
