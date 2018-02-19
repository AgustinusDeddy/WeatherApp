import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { getForecast } from '../utils/api';
import WeatherItem from './WeatherItem';

export default class Forecast extends Component {
  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    loading: true,
    result: [],
  };

  componentDidMount() {
    const { state } = queryString.parse(this.props.location.search);
    this.city = state;
    this.getData(state);
  }

  getData = async state => {
    const result = await getForecast(state);
    console.log('get data', result);
    this.setState(() => ({ result, loading: false }));
  };

  handleClick(city) {
    city.city = this.city;
    this.props.history.push({
      pathname: `/details/${this.city}`,
      data: city,
    });
  }

  render() {
    console.log(this.props, 'props..');

    if (this.state.loading === true) {
      return <h1 className="forecast-header"> Loading </h1>;
    }
    console.log(this.state.result, 'result list');
    return this.state.result === null ? (
      <h1 className="forecast-header" style={{ color: 'red' }}>
        Cannot find state/city {this.city}
      </h1>
    ) : (
      <div>
        <h1 className="forecast-header">{this.city}</h1>
        <div className="forecast-container">
          {this.state.result.list.map(function(listItem) {
            return <WeatherItem onClick={() => this.handleClick(listItem)} key={listItem.dt} day={listItem} />;
          }, this)}
        </div>
      </div>
    );
  }
}
