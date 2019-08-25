import React from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { fetchAlbumsBySearchTerm } from '../../../actions/albums';

import './search-bar.scss';

const { Search } = Input;

class ConnectedSearchBar extends React.Component {
  render() {
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
    this.props.fetchAlbumsBySearchTerm(searchTerm);
  }, 700);
}

const SearchBar = connect(
  null,
  { fetchAlbumsBySearchTerm }
)(ConnectedSearchBar);

export default SearchBar;
