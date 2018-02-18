import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../utils/helpers';

export default function DayItem(props) {
  const date = getDate(props.day.dt);
  const { icon } = props.day.weather[0];
  const imagePath = require.context('../images/weather-icons', true);

  const icons = [
    '01d.svg',
    '01n.svg',
    '02d.svg',
    '02n.svg',
    '03d.svg',
    '03n.svg',
    '04d.svg',
    '04n.svg',
    '09d.svg',
    '09n.svg',
    '10d.svg',
    '10n.svg',
    '11d.svg',
    '11n.svg',
    '13d.svg',
    '13n.svg',
    '50d.svg',
    '50n.svg',
  ];

  const getIcon = () => icons.map(name => `<img src='${imagePath(name, true)}' alt='Weather' />`);
  // console.log(getIcon());

  // const requireContext = require.context('../images/weather-icons', true, /^\.\/.*\.svg$/);
  // requireContext.keys().map(requireContext);

  // TODO: Change img source to dynamic

  return (
    <div className="dayContainer" onClick={props.onClick} onKeyPress={() => {}} role="presentation">
      {/* <img className="weather" src={`./app/images/weather-icons/${icon}.svg`} alt="Weather" /> */}
      <img className={`weather img${icon}`} alt="Weather" />
      <h2 className="subheader">{date}</h2>
    </div>
  );
}

DayItem.propTypes = {
  day: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

DayItem.defaultProps = {
  onClick: () => {},
};
