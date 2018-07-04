import React, { Component } from "react";
import Button from "../../Buttons/Button";
import css from "./Thumbnail.css";

export default class Thumbnail extends Component {
  render() {
    let songsLoaded;
    if(this.props.artworkUrl100) {
      songsLoaded = (
        <div className="card">
        <img
          className="card-img-top"
          src={this.props.artworkUrl100}
          alt=""
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.trackName}</h4>
          <h5 className="card-price">
            Now For {this.props.trackPrice}
          </h5>
          <p className="card-text">{this.props.artistName}</p>
        </div>
        <div className="card-footer">
          <Button href={this.props.previewUrl} />
        </div>
      </div>
      );
    } else {
      songsLoaded = (
        <div className="card">
        <img
          className="card-img-top"
          src={this.props["im:image"][2].label}
          alt=""
        />
        <div className="card-body">
          <h4 className="card-title">{this.props["im:name"].label}</h4>
          <h5 className="card-price">
            Now For {this.props["im:price"].label}
          </h5>
          <p className="card-text">{this.props["im:artist"].label}</p>
        </div>
        <div className="card-footer">
          <Button href={this.props.link["attributes"]["href"]} />
        </div>
      </div>
      );
    }
    return (
      <div className="col-xs-3 col-md-3 mb-4">
       {songsLoaded}
      </div>
    );
  }
}
