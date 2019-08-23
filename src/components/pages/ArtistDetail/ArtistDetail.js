import React from 'react';
import { connect } from 'react-redux';
import {
  fetchArtistById,
  fetchArtistTopTracks
} from '../../../actions/artists';

import './artist-detail.scss';

class ConnectedArtistDetail extends React.Component {
  componentDidMount() {
    const { match, fetchArtistById, fetchArtistTopTracks } = this.props;
    fetchArtistById(match.params.id);
    fetchArtistTopTracks(match.params.id);
  }

  render() {
    const { name, images = [], genres = [] } = this.props.selectedArtist;
    const { topTracks } = this.props;
    return (
      <div className="artist-detail-container">
        <span>{name}</span>
        <span>
          {images.length > 0 ? <img src={images[1].url} alt={name} /> : null}
        </span>
        <div>
          genre:
          {genres.map(genre => (
            <span>{genre}</span>
          ))}
        </div>
        <div>
          top tracks:
          {topTracks.map(track => {
            const { name, popularity } = track;
            return <div>{`${name}, ${popularity}`}</div>;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedArtist: state.artists.selected,
    topTracks: state.artists.selectedTopTracks
  };
};

const ArtistDetail = connect(
  mapStateToProps,
  { fetchArtistById, fetchArtistTopTracks }
)(ConnectedArtistDetail);

export default ArtistDetail;
