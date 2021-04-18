import React, {Component} from 'react';
import { connect } from 'react-redux'
import {getPosts} from '../../Store/postsSlice';
import TableStyle from '../TableStyle/TableStyle';

class UserPostPage extends Component{


    componentDidMount(){
        const {userId} = this.props.match.params
        this.props.getPosts(userId);
      };
    getName(id){
        // eslint-disable-next-line eqeqeq
        const currUser = this.props.users.users.find(user => user.id == id)
        return currUser.name
    }
    render(){
        const postsData = this.props.posts.posts.map(post => {
            return {
              id: post.id,
              title: post.title,
              body: post.body
            }
          });
          const headerList = ['Title', 'Body']
          const {userId} = this.props.match.params
          const userName = this.getName(userId) || {content: ''}
        return(
            <div>
                <button className='back-btn' onClick={() => this.props.history.goBack()}>BACK</button>
                <h2>{userName}'s Posts</h2>
                <TableStyle columns={headerList} data={postsData} function={()=>{}}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      users : state.users,
      posts : state.posts,
    }
  };
  const mapDispatchToProps = () => {
    return {
      getPosts
    }
  };
  export default connect(mapStateToProps, mapDispatchToProps())(UserPostPage);