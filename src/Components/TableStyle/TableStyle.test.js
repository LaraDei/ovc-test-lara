import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import TableStyle from "./TableStyle";

describe("TableStyle component", () => {
  const props = {
    columns: ["test1", "test2", "test3"],
    data: [
      {
        id: 123,
        name: "testName",
        email: "testEmal",
        city: "testCity",
        company: "testCompany",
      },
    ],
  };
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TableStyle {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const wrapper = renderer.create(<TableStyle {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("renders a header for each item in given array", () => {});
  it("it renders a row for each item in given array", () => {});
  it("it executes a function when row is clicked", () => {});
});
