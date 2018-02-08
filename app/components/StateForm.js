import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class StateForm extends Component {
  static propTypes = {
    direction: PropTypes.string,
  };

  static defaultProps = {
    direction: 'column',
  };

  state = {
    state: 'Kuala Lumpur',
  };

  render() {
    return (
      <div className="zipcode-container" style={{ flexDirection: this.props.direction }}>
        <input
          className="form-control"
          onChange={this.handleUpdateState}
          placeholder="Kuala Lumpur"
          type="text"
          value={this.state.state}
        />
        <button type="button" style={{ margin: 10 }} className="btn btn-success" onClick={this.handleSubmitState}>
          See Forecast
        </button>
      </div>
    );
  }
}
