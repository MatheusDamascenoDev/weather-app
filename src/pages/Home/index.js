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
          <div className="informations">
            <h1> {weatherForecast.location.name} </h1>

            <p>
              {weatherForecast.location.localtime.substr(11)}
            </p>

            <img src={weatherForecast.current.condition.icon} alt="Broken Clouds" />

            <h2>{weatherForecast.current.condition.text}</h2>

            <h1>{weatherForecast.current.temp_c}ºC</h1>

            <div className="more-informations">
              <h2>Vento de: {weatherForecast.current.wind_kph} km/h</h2>

              <h2>Humidade de: {weatherForecast.current.humidity}%
              </h2>
            </div>
          </div>

        ) : (
          ''
        )
      }

    </Container>

  );
}
