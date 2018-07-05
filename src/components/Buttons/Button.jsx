import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <a
        id="ThumbButton"
        href={this.props.href}
        className="btn btn-primary"
        type="button"
        target="_blank"
      >
        {this.props.title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="70"
          viewBox="0 0 20 20"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      </a>
    );
  }
}
