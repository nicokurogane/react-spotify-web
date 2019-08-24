import React from 'react';
import { Input } from 'antd';

import './search-bar.scss';

const { Search } = Input;

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar-container">
        <Search
          placeholder="Busca un album"
          onSearch={value => console.log(value)}
          enterButton
        />
      </div>
    );
  }
}

export default SearchBar;
