import React, { Component } from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import SortingButton from "../../Buttons/SortingButton";
import SearchBox from "../SearchBox/SearchBox";

export default class ThumbnailList extends Component {
  constructor(props) {
    super(props);
    this.sortAz = this.sortAz.bind(this);
  }

  sortAz() {
    this.setState({
      order: "az"
    });
  }

  render() {
    if (this.props.results.length > 0) {
      if (this.props.order === "az") {
        this.props.results.sort(function(a, b) {
          if (a.trackName < b.trackName) return -1;
          if (a.trackName > b.trackName) return 1;
          return 0;
        });
      } else {
        this.props.results.sort(function(a, b) {
          if (b.trackName < a.trackName) return -1;
          if (b.trackName > a.trackName) return 1;
          return 0;
        });
      }
    }
    var list = this.props.results.map(function(thumbnailProps, i) {
      return <Thumbnail key={i} {...thumbnailProps} />;
    });
    return (
      <div>
        <SearchBox/>
        <SortingButton sortAz={this.sortAz} sortZa={this.sortZa} />
        <div className="row text-center">{list}</div>
      </div>
    );
  }
}
