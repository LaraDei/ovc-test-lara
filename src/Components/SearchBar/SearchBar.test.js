import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SearchBar from "./SearchBar";
// import {shallow } from 'enzyme';

describe("SearchBar component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders by default", () => {
    const wrapper = renderer.create(<SearchBar />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("it executes function onChange", () => {});

  it("it clears form with button is pushed", () => {});
});
