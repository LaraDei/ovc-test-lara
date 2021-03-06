import React, { Component } from "react";

import "./TableStyle.css";

export default class TableStyle extends Component {
  renderTableHeader() {
    return this.props.columns.map((title, index) => {
      return <th key={index + title}>{title}</th>;
    });
  }
  renderTableBody() {
    return this.props.data.map((item) => {
      return (
        <tr key={item.id} id={item.id} onClick={(e) => this.props.function(e)}>
          {Object.keys(item).map((key, index) => {
            if (index > 0) {
              return <td key={key + index}>{item[key]}</td>;
            } else return null;
          })}
        </tr>
      );
    });
  }

  render() {
    const { data, columns } = this.props;
    return (
      <div className="table-container">
        {data && columns ? (
          <table className="table">
            <thead>
              <tr>{this.renderTableHeader()}</tr>
            </thead>
            <tbody>{this.renderTableBody()}</tbody>
          </table>
        ) : (
          <p>"no data"</p>
        )}
      </div>
    );
  }
}
