import React, { Component } from "react";

export default class SortingButton extends Component {
  render() {
    return (
      <div className="row text-center sort-container">
        <div className="col-md-12">
          <button id="sorting" className="btn btn-primary" onClick={this.props.sortAz}>
            (a-z) sort 
          </button>
        </div>
      </div>
    );
  }
}
