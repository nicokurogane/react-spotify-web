import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/albums';
import LayoutApp from '../../layout-app/LayoutApp';
import AlbumList from '../../albums/list/List';
import Paginator from '../../paginator/Paginator';
import SearchBar from '../../albums/search-bar/SearchBar';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';

import './main.scss';

class ConnectedMain extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumsList('a');
  }

  onChangeClick = offset => {
    const { fetchAlbumsList, searchTerm } = this.props;
    let term = searchTerm === '' ? 'a' : searchTerm;
    console.log(`llamamos onChangeClick ${term} ${offset}`);
    fetchAlbumsList(term, offset);
  };

  render() {
    const { albums, isLoadingAlbums } = this.props;
    return (
      <LayoutApp>
        <div className="main-page-container">
          <div className="search-bar">
            <LoadingSpinner
              isLoading={isLoadingAlbums}
              className="side-loading-spinner"
            />
            <SearchBar />
          </div>
          <div>
            <AlbumList albums={albums} />
          </div>
          <Paginator onChangeClick={this.onChangeClick} limit={20} />
        </div>
      </LayoutApp>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums.list,
    searchTerm: state.albums.searchTerm,
    isLoadingAlbums: state.albums.isLoadingAlbums
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbumsList: (searchTerm, offset = 0) =>
    dispatch(actions.fetchAlbumsBySearchTerm(searchTerm, offset))
});

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedMain);

export default Main;
