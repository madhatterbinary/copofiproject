import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../../store/actions/index";

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
      }
    submit(e) {
        e.preventDefault();
        const name = e.target.search.value;
        if(name === '') {
            this.props.emptySearchActive(true);
        } else {
            this.props.emptySearchActive(false);
            this.props.onGetSearchSongs(name);
        }
    }
    handleChange(event) {
    const name = event.target.value;
    if(name === '') {
          this.props.emptySearchActive(true);
        } else {
            this.props.emptySearchActive(false);
            this.props.onGetSearchSongs(name);
        }
    }    
    render() {
        return (
            <div className='row'>
            <form className='form-inline' onSubmit={this.submit}>
            <div className='form-group'>
            <input
                onChange={this.handleChange}
                type="search"
                id="search"
                name="search"
                className='form-control'
            />
            <input className='form-control' type="submit" value="Search" />
            </div>
            </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      search: state.search.search,
      loading: state.song.loading
    };
  };
  
  const mapDispatchToProps = dispatch => {
    
    return {
      onGetSearchSongs: (name) => dispatch(actions.getSearchSongs(name)),
      emptySearchActive: (active) => dispatch(actions.emptySearchActive(active))
    };
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(SearchBox)
  );
