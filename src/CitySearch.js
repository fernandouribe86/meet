import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if( suggestions.length === 0){
    this.setState({ 
      query: value,
      infoText: 'We cannot find the city you are looking for. Please try another city.',
    })
  } else{
    return this.setState({
      query: value,
      suggestions,
      infoText:''
    })
  };
  }

  handleItemClicked = (suggestion) => {
    this.setState({
        query: suggestion,
        showSuggestions: false,
        infoText: ''
    });
    this.props.updateEvents(suggestion);
  }

  render(){
    return (
      <div className="CitySearch" id="citySearch">
        <p id="searchTitle">search</p>
        <div id="searchBarContainer">
          <input 
            type="text"
            className="city"
            value = {this.state.query}
            onChange={this.handleInputChanged}
            placeholder="Try a city like 'London' or 'Berlin'"
            onFocus={ () => { this.setState({ showSuggestions: true })}}
            />
            <ul className='suggestions' style={this.state.showSuggestions ? {}: { display: 'none'}}>
              {this.state.suggestions.map((suggestion) => (
                <li id="citySearchSuggestion"
                key={suggestion}
                onClick= {() => this.handleItemClicked(suggestion)}
                >{suggestion}</li>
              ))}
              <li id="citySearchBar" onClick={() => this.handleItemClicked("all")}>
                <p id="seeAll">See all cities</p>
              </li>
            </ul>
            <InfoAlert id="infoAlert" text={this.state.infoText} />
        </div>
      </div>
    );
  }
}

export default CitySearch;