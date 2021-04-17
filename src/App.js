import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import UserPage from './Components/UserPage/UserPage';
import UserPostPage from './Components/UserPostPage/UserPostPage'
import './App.css';

export default class App extends Component {

  renderMainRoutes(){
    return (
      <>
      <Route
        exact
        path='/'
        component={UserPage}
      />
      <Route
        path='/post/:userId'
        component={UserPostPage}
      />
      </>
    )
  }

  render(){
    return (
      <div className="App">
        <main className="app-main">
          {this.renderMainRoutes()}
        </main>
      </div>
    )
  }
}



