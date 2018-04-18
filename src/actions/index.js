import axios from 'axios';

const API_KEY = 'f406aa62a7893a89da4fff06d213a66b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},us;`
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
