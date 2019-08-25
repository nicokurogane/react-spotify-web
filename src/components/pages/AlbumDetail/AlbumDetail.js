import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import CustomLink from '../../custom-link/CustomLink';
import TrackList from '../../tracks/list/List';
import { fetchAlbumDetailsById } from '../../../actions/albums';
import TitleSection from '../../title-section/TitleSection';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';

import './album-detail.scss';

class ConnectedAlbumDetail extends React.Component {
  componentDidMount() {
    const { fetchAlbumDetailsById, match } = this.props;
    fetchAlbumDetailsById(match.params.id);
  }

  renderLoadingSpinner = () => {
    return (
      <LoadingSpinner
        isLoading={this.props.isLoadingAlbum}
        className="loading-spinner"
      />
    );
  };

  renderErrorPage = () => {
    return (
      <div>Couldn't get album detail :(. check your internet connection</div>
    );
  };

  renderAlbumDetail = () => {
    const {
      name,
      artists = [],
      external_urls = {},
      tracks = {},
      images = [],
      release_date = ''
    } = this.props.album;

    return (
      <>
        <TitleSection title={'Album Detail'} />
        <div className="main-panel">
          <Row type="flex" justify="space-around">
            <Col>
              {images.length > 0 ? (
                <img src={images[0].url} alt="album" className="carousel-img" />
              ) : null}
            </Col>
            <Col>
              <Card
                style={{
                  color: '#ffffff',
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: '0'
                }}
              >
                <div>{name}</div>
                <div className="detail-container">
                  {artists.length > 0 ? artists[0].name : null}
                </div>
                <div className="detail-container">
                  {new Date(release_date).getFullYear()}
                </div>
                <div className="detail-container">
                  <a
                    href={external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {external_urls.spotify}
                  </a>
                </div>
                <div className="detail-container">
                  <CustomLink
                    targetUrl={`/artist-detail/${
                      artists.length > 0 ? artists[0].id : 0
                    }`}
                    text="Artist details"
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="tracklist-panel">
          <TrackList tracks={tracks.items} />
        </div>
      </>
    );
  };

  render() {
    const { isLoadingAlbum, album } = this.props;

    return (
      <div className="album-detail-container">
        {isLoadingAlbum
          ? this.renderLoadingSpinner()
          : !isLoadingAlbum && Object.getOwnPropertyNames(album).length === 0
          ? this.renderErrorPage()
          : this.renderAlbumDetail()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  album: state.albums.selected,
  isLoadingAlbum: state.albums.isLoadingAlbums
});

const AlbumDetail = connect(
  mapStateToProps,
  { fetchAlbumDetailsById }
)(ConnectedAlbumDetail);

export default AlbumDetail;
