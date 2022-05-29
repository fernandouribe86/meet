import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: 32,
    errorText:'',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;

    if (value <= 0 || value > 32) {
      this.setState({
        numberOfEvents: "",
        errorText:"Please enter a number from 1 to 32",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
    }
    this.props.updateNumberOfEvents(value);
  };

  render(){

    return (
      <div className="NumberOfEvents">

      <input
        id="numberOfEvents"
        className="numberOfEvents"
        type="number"
        placeholder = {"Items to Show: " + this.state.numberOfEvents}
        onChange={this.handleInputChanged} >
        </input>
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;