import React from 'react';
import { connect } from 'react-redux';
import {
  fetchArtistById,
  fetchArtistTopTracks,
  fetchArtistRelatedArtist
} from '../../../actions/artists';

import './artist-detail.scss';

class ConnectedArtistDetail extends React.Component {
  componentDidMount() {
    const {
      fetchArtistById,
      fetchArtistTopTracks,
      fetchArtistRelatedArtist
    } = this.props;

    const { id } = this.props.match.params;

    fetchArtistById(id);
    fetchArtistTopTracks(id);
    fetchArtistRelatedArtist(id);
  }

  render() {
    const { name, images = [], genres = [] } = this.props.selectedArtist;
    const { topTracks, relatedArtists } = this.props;
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

        <div>
          related artist:
          {relatedArtists.map(artist => {
            const { name, images } = artist;
            return (
              <div>
                <span>{name}</span>
                <img src={images[0].url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedArtist: state.artists.selected,
  topTracks: state.artists.selectedTopTracks,
  relatedArtists: state.artists.relatedArtists
});

const ArtistDetail = connect(
  mapStateToProps,
  { fetchArtistById, fetchArtistTopTracks, fetchArtistRelatedArtist }
)(ConnectedArtistDetail);

export default ArtistDetail;
