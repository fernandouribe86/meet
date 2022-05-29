import React, { Component } from 'react';
import ErrorAlert from './Alert';

class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: '32',
  }

  handleInputChanged = (event) => {
    //if no number is set, numberValue is set to 32 by default
    const numberValue = event.target.value;
    this.setState({ numberOfEvents: numberValue });
    if(this.numberValue > 32 || this.numberValue < 1 ){
      this.setState({
      errorText: 'Number of events cannot exceed 32 and must be at least 1',
      }); 
      } else {
      this.props.updateNumber(numberValue);
      this.setState({
        errorText: '',
      });
    };
  };

  render(){
    // const { events, updateNumber } = this.props;

    return (
      <div className="NumberOfEvents">

      <input
        id="numberOfEvents"
        className="numberOfEvents"
        type="number"
        placeholder = "'# of Events: ' + {this.state.numberOfEvents}"
        onChange={this.handleInputChanged} >
        </input>
        <ErrorAlert id="errorAlert" text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;