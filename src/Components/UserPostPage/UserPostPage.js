import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../Store/postsSlice";
import TableStyle from "../TableStyle/TableStyle";
import { store } from "../../Store/store";
import { findUser } from "../../helpers";

class UserPostPage extends Component {
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.props.getPosts(userId);
  }

  render() {
    const { userId } = this.props.match.params;
    const { users } = store.getState().users;
    const userName = findUser(users, userId) || { content: "" };
    const { posts } = store.getState().posts;
    const postsData = posts.map((post) => {
      return {
        id: post.id,
        title: post.title,
        body: post.body,
      };
    });
    const headerList = ["Title", "Body"];
    return (
      <div>
        <button
          className="back-btn"
          onClick={() => this.props.history.push('/')}
        >
          BACK
        </button>
        <h2>{userName.name}'s Posts</h2>
        <TableStyle columns={headerList} data={postsData} function={() => {}} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
const mapDispatchToProps = () => {
  return {
    getPosts,
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(UserPostPage);
