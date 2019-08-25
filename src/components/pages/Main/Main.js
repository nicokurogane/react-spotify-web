import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums, fetchAlbumsBySearchTerm } from '../../../actions/albums';
import LayoutApp from '../../layout-app/LayoutApp';
import AlbumList from '../../albums/list/List';
import Paginator from '../../paginator/Paginator';
import SearchBar from '../../albums/search-bar/SearchBar';

import './main.scss';

class ConnectedMain extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumsBySearchTerm('a');
  }

  onChangeClick = offset => {
    this.props.fetchAlbumsBySearchTerm(this.props.searchTerm, offset);
  };

  render() {
    return (
      <div className="main-page-container">
        <LayoutApp>
          <div className="search-bar">
            <SearchBar />
          </div>
          <div>
            <AlbumList albums={this.props.albums} />
          </div>
          <Paginator onChangeClick={this.onChangeClick} limit={20} />
        </LayoutApp>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums.list,
    searchTerm: state.albums.searchTerm
  };
};

const Main = connect(
  mapStateToProps,
  { fetchAlbums, fetchAlbumsBySearchTerm }
)(ConnectedMain);

export default Main;
