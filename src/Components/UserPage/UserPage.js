import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TableStyle from '../TableStyle/TableStyle';


export default class UserPage extends Component{
  render(){
    return(
        <div className="user-page">
          <SearchBar/>
          <h1>List of Users</h1>
          <TableStyle/>
        </div>
    )
    }
}