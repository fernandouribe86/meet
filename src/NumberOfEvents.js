import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: 32,
    errorText: ''
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    if (value <= 0 || value > 32) {
      this.setState({
        errorText: 'Please insert a number between 1 and 32'
      })
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: ''
      })
    }
    this.props.updateNumber(value);
  };

  render(){

    return (
      <div className="NumberOfEvents">





      <input id="numberOfEvents" 
        type='number' 
        className='inputEventNumber' 
        onChange={this.handleInputChange} 
        value={this.state.numberOfEvents}>

      </input>
      <p>Choose Number of Events to Display</p>
      <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;