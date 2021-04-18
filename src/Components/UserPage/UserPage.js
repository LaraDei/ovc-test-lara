import React, { Component } from 'react';
import { connect } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar';
import TableStyle from '../TableStyle/TableStyle';
import {getUsers} from '../../Store/usersSlice';


class UserPage extends Component{
  static defaultProps = {
    history: {
      push: () => {}
    }
}
  componentDidMount(){
    this.props.getUsers();
  };

  handleClick(e){
    e.preventDefault()
    let userId = e.target.parentElement.id
    this.props.history.push(`/post/${userId}`)
  }
  
  render(){
    const usersData = this.props.users.users.map(user => {
      return {
        userId: user.id,
        name: user.name,
        email: user.email,
        city: user.address.city,
        company: user.company.name
      }
    });
    const headerList = ['Name','Email','City','Company'];
    return(
        <div className="user-page">
          <SearchBar/>
          <h1>List of Users</h1>
          <TableStyle columns={headerList} data={usersData} function={(e)=>this.handleClick(e)}/>
        </div>
    )
    }
}
const mapStateToProps = (state) => {
  return {
    users : state.users
  }
};
const mapDispatchToProps = () => {
  return {
    getUsers
  }
};
export default connect(mapStateToProps, mapDispatchToProps())(UserPage);

