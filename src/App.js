import React, { Component } from "react";
import { Route } from "react-router-dom";
import UserPage from "./Components/UserPage/UserPage";
import UserPostPage from "./Components/UserPostPage/UserPostPage";
import { getUsers } from "./Store/usersSlice";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={UserPage} />
        <Route path="/post/:userId" component={UserPostPage} />
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <main className="app-main">{this.renderMainRoutes()}</main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProps = () => {
  return {
    getUsers,
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(App);
