import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SearchBar from "./SearchBar";

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
});
