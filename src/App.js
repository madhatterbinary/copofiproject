import React, { Component } from "react";
import "./bootstrap.min.css";
import "./heroic-features.css";
import "./App.css";
import ThumbnailList from "./components/Gallery/ThumbnailList/ThumbnailList";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "./store/actions/index";
import 'typeface-roboto';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "az",
      songs: []
    };
  }
  componentDidMount = ()=> {
    this.props.onGetSongs();
  }
  render() {
    console.log('the props ',this.props);
    console.log('the search ',this.props.search);
    console.log('the songs ',this.props.songs);
    
    let loadSongs;

      if(this.props.emptySearchActive){
        loadSongs = (
          <ThumbnailList order={this.state.order} results={this.props.songs} />
        )
      } else {
        loadSongs = (
          <ThumbnailList order={this.state.order} results={this.props.search} />
        )
      }
      return (
        <div>
          {loadSongs}
        </div>
      );
    }

}
const mapStateToProps = state => {
  return {
    songs: state.song.songs,
    search: state.search.search,
    emptySearchActive: state.search.active,
    loading: state.song.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetSongs: () => dispatch(actions.getSongs())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
