import TitleMain from '../../components/TitleMain';
import InputSearch from './components/InputSearch';
import { Container } from './styles';
import SearchIcon from '../../assets/icons/search-icon.svg';
import useWeather from '../../hooks/useWeather';
// import Button from '../../components/Button';

export default function Home() {
  const {
    city,
    handleSearch,
    handleSetCity,
    weatherForecast,
  } = useWeather();

  return (
    <Container>
      <TitleMain />

      <p>Digite o nome da cidade</p>

      <InputSearch
        icon={SearchIcon}
        value={city}
        onChange={handleSetCity}
        onClick={handleSearch}
      />

      {
        weatherForecast ? (
          <>
            <h1> {weatherForecast.location.name} - {weatherForecast.location.region}</h1>

            <img src={weatherForecast.current.condition.icon} alt="Broken Clouds" />

            <h2>{weatherForecast.current.condition.text}</h2>

            <h2>{weatherForecast.current.temp_c}ºC</h2>

            {/* <div className="buttons">
              <Button
                type="button"
                value="humidade"
                onClick={handleClickPrecipotation}
              />

              <Button
                type="button"
                value="vento"
                onClick={handleClickWind}
              />

            </div> */}

            <h2>Vento de: {weatherForecast.current.wind_kph} km/h</h2>

            <h2>Humidade de: {weatherForecast.current.humidity}%
            </h2>
          </>

        ) : (
          ''
        )
      }

    </Container>

  );
}
