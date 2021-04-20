import React from "react";
import ReactDOM from "react-dom";
import "../../setupTests"
import { shallow } from 'enzyme';
import renderer from "react-test-renderer";
import UserPostPage from "./UserPostPage";
import { Provider } from "react-redux";
import { store } from "../../Store/store";
import sinon from 'sinon';


describe("UserPostPage component", () => {
  const props = {
    users: [
      {
        id: 1,
        name: "testName",
        email: "testEmal",
        city: "testCity",
        company: "testCompany",
      },
      {
        id: 2,
        name: "testName",
        email: "testEmal",
        city: "testCity",
        company: "testCompany",
      },
    ],
    posts: [
      {
        id: 1,
        userId: 2,
        title: "testTitle",
        body: "testBody",
      },
      {
        id: 2,
        userId: 1,
        title: "testTitle",
        body: "testBody",
      },
      {
        id: 3,
        userId: 2,
        title: "testTitle",
        body: "testBody",
      },
    ],
  };
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <UserPostPage
          users={props.users}
          match={{ params: { id: 1 }, isExact: true, path: "", url: "" }}
        />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders by default", () => {
    const wrapper = renderer
      .create(
        <Provider store={store}>
          <UserPostPage
            users={props.users}
            match={{ params: { id: 1 }, isExact: true, path: "", url: "" }}
          />
        </Provider>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
