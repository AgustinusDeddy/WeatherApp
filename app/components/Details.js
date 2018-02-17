import React from 'react';
import PropTypes from 'prop-types';
import WeatherItem from './WeatherItem';
import { convertTemp } from '../utils/helpers';

export default function Details({ location }) {
  console.log(location);
  const state = location.data;

  return (
    <div style={{ paddingTop: '70px' }}>
      <WeatherItem day={state} />
      <div className="description-container">
        <p>{state.city}</p>
        <p>{state.weather[0].description}</p>
        <p>min temp: {convertTemp(state.temp.min)} degrees</p>
        <p>max temp: {convertTemp(state.temp.max)} degrees</p>
        <p>humidity: {state.humidity}</p>
      </div>
    </div>
  );
}

Details.propTypes = {
  location: PropTypes.shape({
    data: PropTypes.object.isRequired,
  }).isRequired,
};
