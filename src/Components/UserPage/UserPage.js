import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import TableStyle from "../TableStyle/TableStyle";
import { store } from "../../Store/store";

export default class UserPage extends Component {
  constructor(props) {
    super();
    this.state = {
      searchTerm: "",
    };
  }

  handleClick(e) {
    e.preventDefault();
    let userId = e.target.parentElement.id;
    this.props.history.push(`/post/${userId}`);
  }

  setSearchTerm = (e) => {
    e.preventDefault();
    const searchTerm = e.target.value.toLowerCase();
    this.setState({ searchTerm: searchTerm });
  };
  clearSearchTerm = () => {
    this.setState({ searchTerm: "" });
  };

  getFilteredUsers = (searchTerm) => {
    const { users } = store.getState().users;
    return users.filter((user) => user.name.toLowerCase().includes(searchTerm));
  };

  // export const findItem = (searchTerm)
  render() {
    const users = this.getFilteredUsers(this.state.searchTerm);
    const usersData = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        city: user.address.city,
        company: user.company.name,
      };
    });
    const headerList = ["Name", "Email", "City", "Company"];
    return (
      <div className="user-page">
        <div className="user-search-wrapper">
          <h3>Search Users By Name:</h3>
          <SearchBar
            data={usersData}
            setTerm={(e) => this.setSearchTerm(e)}
            clearTerm={() => this.clearSearchTerm}
          />
        </div>
        <h2>List of Users</h2>
        <TableStyle
          columns={headerList}
          data={usersData}
          function={(e) => this.handleClick(e)}
        />
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     users : state.users
//   }
// };
// const mapDispatchToProps = () => {
//   return {
//     getUsers
//   }
// };
// export default connect(mapStateToProps, mapDispatchToProps())(UserPage);
