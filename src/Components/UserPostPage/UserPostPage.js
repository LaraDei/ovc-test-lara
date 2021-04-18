import React, {Component} from 'react';

import TableStyle from '../TableStyle/TableStyle';

export default class UserPostPage extends Component{
    render(){
        const {userId} = this.props.match.params
        return(
            <div>
                <h2>Name's Posts</h2>
                
                <button className='back-btn' onClick={() => this.props.history.goBack()}>BACK</button>
            </div>
        )
    }
}