import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import UserPage from "./UserPage";

describe("UserPage component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UserPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders by default", () => {
    const wrapper = renderer.create(<UserPage />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it("filters array", () => {});
});
