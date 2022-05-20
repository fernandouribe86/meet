import React, { Component } from 'react';

class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: '32',
  }

  inputChanged = (event) => {
    //if no number is set, numberValue is set to 32 by default
    const numberValue = event.target.value;
    this.setState({ numberOfEvents: numberValue });
    this.props.updateNumber(numberValue);
  };

  render(){
    // const { events, updateNumber } = this.props;

    return (
      <div className="NumberOfEvents">

      <input
        id="numberOfEvents"
        className="numberOfEvents"
        type="number"
        placeholder = {this.state.numberOfEvents}
        onChange={this.inputChanged} >
        </input>

      </div>
    );
  }
}

export default NumberOfEvents;