import React, {Component} from 'react';
import './SearchBar.css';


export default class SearchBar extends Component{    

    render(){
        return(
            <div className="search-container">
                <form>
                <input type="text" placeholder="Search.." name="search" id="searchInput" onChange={(e)=>this.props.setTerm(e)}/>
                <button type="clear" onClick={this.props.clearTerm}>Clear</button>
                </form>
            </div>
        )
    }

}