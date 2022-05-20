import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from "../mock-data";

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });
   
    // RENDER NUMBER OF EVENTS
    test('render text input', () => {
      expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });

    // RENDER TEXT INPUT CORRECTLY
    test('render text input correctly', () => {
      const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
      expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });

});