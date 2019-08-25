import React from 'react';
import { Input } from 'antd';

import './search-bar.scss';

const { Search } = Input;

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };

  render() {
    return (
      <div className="search-bar-container">
        <Search
          placeholder="Busca un album"
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
    console.log(searchTerm);
    this.setState({ searchTerm });
  }, 1000);
}

export default SearchBar;
