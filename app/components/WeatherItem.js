import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../utils/helpers';

export default function DayItem(props) {
  const date = getDate(props.day.dt);
  const { icon } = props.day.weather[0];
  return (
    <div className="dayContainer">
      <img className="weather" src={`/app/images/weather-icons/${icon}.svg`} alt="Weather" />
      <h2 className="subheader">{date}</h2>
    </div>
  );
}

DayItem.propTypes = {
  day: PropTypes.object.isRequired,
};
