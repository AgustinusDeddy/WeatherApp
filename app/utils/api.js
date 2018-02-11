import axios from 'axios';

const _baseURL = 'http://api.openweathermap.org/data/2.5/';
const _APIKEY = '0e271961a47a545a5068e01951f3a9c9';

function handleError(error) {
  console.warn(error);
  return null;
}

function prepRouteParams(queryStringData) {
  return Object.keys(queryStringData)
    .map(key => `${key}=${encodeURIComponent(queryStringData[key])}`)
    .join('&');
}

function prepUrl(type, queryStringData) {
  return `${_baseURL + type}?${prepRouteParams(queryStringData)}`;
}

function getQueryStringData(city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5,
  };
}

async function getCurrentWeather(city) {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl('weather', queryStringData);

  const result = await axios.get(url).catch(handleError);

  return result === null ? null : result.data;
}

async function getForecast(city) {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl('forecast/daily', queryStringData);

  const result = await axios.get(url).catch(handleError);

  return result === null ? null : result.data;
}

module.exports = {
  getCurrentWeather,
  getForecast,
};
