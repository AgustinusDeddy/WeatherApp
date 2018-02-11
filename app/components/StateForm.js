import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Input } from 'semantic-ui-react';

export default class StateForm extends Component {
  static propTypes = {
    direction: PropTypes.string,
  };

  static defaultProps = {
    direction: 'column',
  };

  state = {
    state: '',
  };

  //   handleSubmitState() {}

  handleChangeState = event => {
    const val = event.target.value;
    console.log(val);
    this.setState(() => ({ state: val }));
  };

  render() {
    return (
      <div className="stateFromContainer" style={{ flexDirection: this.props.direction }}>
        {/* <input
          className="form-control"
          onChange={this.handleUpdateState}
          placeholder="Kuala Lumpur"
          type="text"
          value={this.state.state}
        /> */}

        <Input icon placeholder="Kuala Lumpur" defaultValue={this.state.state}>
          <input onChange={this.handleChangeState} />
          <Icon name="search" />
        </Input>

        <Button primary animated style={{ margin: 10 }}>
          <Button.Content visible>See Forecast</Button.Content>
          <Button.Content hidden>
            <Icon name="globe" />
          </Button.Content>
        </Button>
      </div>
    );
  }
}
