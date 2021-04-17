import React, {Component} from 'react';
import './SearchBar.css';


export default class SearchBar extends Component{
    render(){
        return(
            <div className="search-container">
                <h2>Search</h2>
                <form >
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}