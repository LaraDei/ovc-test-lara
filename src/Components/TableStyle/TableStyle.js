import React, {Component} from 'react';

import './TableStyle.css';

export default class TableStyle extends Component{

    renderTableHeader(){
        return this.props.columns.map((title, index)=>{
            return (
                <th key={index+title}>{title}</th>
            )
        })
    }
    renderTableBody(){
        return this.props.data.map(item => {
           return (
               <tr key={item.userId} id={item.userId} onClick={(e)=>this.props.function(e)}>
                   {Object.keys(item).map((key, index) => {
                        if(index >0){
                            return (
                            <td key={item[key]}>{item[key]}</td>
                            )
                        }else return null;
                })}
               </tr>
            )
        })
    }


    render(){
        return(
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            {this.renderTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableBody()}
                    </tbody>
                </table>
                
            </div>
        )
    }
    
}