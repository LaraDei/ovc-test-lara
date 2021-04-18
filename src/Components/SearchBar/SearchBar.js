import React, {Component} from 'react';
import './SearchBar.css';


export default class SearchBar extends Component{    

    render(){
        // console.log(this.props.data)
        return(
            <div className="search-container">
                <h2>Search</h2>
                <form onSubmit={(e)=>this.props.function(e)}>
                <input type="text" placeholder="Search.." name="search" id="searchInput"/>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}