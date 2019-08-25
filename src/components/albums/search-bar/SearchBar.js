import React from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import {
  fetchAlbumsBySearchTerm,
  updateSearchAlbumTerm
} from '../../../actions/albums';

import './search-bar.scss';

const { Search } = Input;

class ConnectedSearchBar extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="search-bar-container">
        <Search
          placeholder="Type something to look up!"
          onChange={e => this.setSearchTerm(e.target.value)}
        />
      </div>
    );
  }

  debounce = (fn, time) => {
    let timeout;

    return function() {
      const functionCall = () => fn.apply(this, arguments);
      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  };

  setSearchTerm = this.debounce(searchTerm => {
    const { fetchNewAlbumList, updateSearchTerm } = this.props;
    let term = searchTerm !== '' ? searchTerm : 'a';
    updateSearchTerm(term);
    fetchNewAlbumList(term);
  }, 700);
}

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: searchTerm => dispatch(updateSearchAlbumTerm(searchTerm)),
  fetchNewAlbumList: searchTerm => dispatch(fetchAlbumsBySearchTerm(searchTerm))
});

const SearchBar = connect(
  null,
  mapDispatchToProps
)(ConnectedSearchBar);

export default SearchBar;
