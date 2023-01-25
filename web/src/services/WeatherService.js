import HttpClient from './api';

class WeatherService {
  constructor() {
    this.httpClient = new HttpClient('http://api.weatherapi.com/v1/current.json?key=05c3078809ed4c03971173339222912&');
  }

  async getWeather(city, signal) {
    const dataWheater = await this.httpClient.get(`q=${city}&lang=pt`, { signal });
    return dataWheater;
  }
}

export default new WeatherService();
