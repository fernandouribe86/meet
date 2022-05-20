import React from "react";
import { shallow } from "enzyme";
import CitySearch from "../CitySearch";
import { mockData } from "../mock-data";
import { extractLocations } from "../api";

describe('<CitySearch /> component', () => {
  let CitySearchWrapper;
  beforeAll(() => {
    const locations = extractLocations(mockData);
    CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => {}} />);
    });
   
    // RENDER TEXT INPUT
  test('render text input', () => {
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });

  // RENDER A LIST OF SUGGESTIONS
  test('renders a list of suggestions', () => {
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });

  // RENDER TEXT INPUT CORRECTLY
  test('render text input correctly', () => {
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });

  // CHANGE STATE WHEN TEXT INPUT CHANGES
  test('change state when text input changes', () => {
    CitySearchWrapper.setState({
      query: 'Munich'
    });
    const eventObject = { target: { value: 'Berlin'}};
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  });

  // RENDER LIST OF SUGGESTIONS CORRECTLY
  test('render list of suggestions correctly', () => {
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length+1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
    }
  });
    
  // SUGGESTION LIST MATCH THE QUERY WHEN CHANGED
    test('suggestion list match the query when changed', () => {
      CitySearchWrapper.setState({ query: '', suggestions: [] });
      CitySearchWrapper.find(".city").simulate("change", {
        target: { value: "Berlin" },
      });
      const query = CitySearchWrapper.state("query");
      const locations = extractLocations(mockData);
      const filteredLocations = locations.filter((location) => {
        return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
      });
      expect(CitySearchWrapper.state("suggestions")).toEqual(filteredLocations);
    });

  // SELECTING  A SUGGESTION SHOUDL CHANGE QUERY STATE
  test("selecting a suggestion should change query state", () => {
    CitySearchWrapper.setState({
      query: 'Berlin'  });
    const suggestions = CitySearchWrapper.state('suggestions');
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state("query")).toBe(suggestions[0]);
  });

  // SELECTING CITYSEARCH INPUT REVEALS SUGGESTION LIST
  test("selecting CitySearch input reveals the suggestions list", () => {
    CitySearchWrapper.find('.city').simulate('focus');
    expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
    expect(CitySearchWrapper.find('.suggestions').prop('style')).not.toEqual({ display: 'none'});
  })

// SELECTED A SUGGESTION SHOULD HIDE THE SUGGESTION LIST
test("selecting a suggestion should hide the suggestions list", () => {
  CitySearchWrapper.setState({
    query: 'Berlin',
    showSuggestions: undefined
  });
  CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
  expect(CitySearchWrapper.state('showSuggestions')).toBe(false);
  expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({ display: 'none' });
});

});