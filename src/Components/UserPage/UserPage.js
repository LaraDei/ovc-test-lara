import React, { Component } from 'react';
import { connect } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar';
import TableStyle from '../TableStyle/TableStyle';
import {getUsers, filterUsers} from '../../Store/usersSlice';


class UserPage extends Component{
  constructor(props){
    super()
      this.state = {
        userList: []
      }
  }
  componentDidMount(){
    this.props.getUsers();
    this.setState({userList: this.props.users.users})
  };

  handleClick(e){
    e.preventDefault()
    let userId = e.target.parentElement.id
    this.props.history.push(`/post/${userId}`)
  }

  handleSearch = (e) => {
    e.preventDefault()
    const {search} = e.target
    const term = search.value.toLowerCase()
    const users = this.props.users.users
    const filteredUsers =this.props.filterUsers(term, 'name', users)
    this.setState({userList: filteredUsers.payload})
    document.getElementById("searchInput").value=''
};
  render(){
    const usersData = this.state.userList.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        city: user.address.city,
        company: user.company.name
      }
    });
    const headerList = ['Name','Email','City','Company'];
    return(
        <div className="user-page">
          <SearchBar data={usersData} function={(e)=>this.handleSearch(e)}/>
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
    getUsers,
    filterUsers
  }
};
export default connect(mapStateToProps, mapDispatchToProps())(UserPage);

