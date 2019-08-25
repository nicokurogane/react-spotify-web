import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/artists';
import GenresList from '../../artist/genres-list/GenresList';
import RelatedArtistList from '../../artist/related-artist-list/RelatedArtistsList';
import TopTracksList from '../../artist/top-tracks-list/TopTracksList';
import TitleSection from '../../title-section/TitleSection';

import './artist-detail.scss';

class ConnectedArtistDetail extends React.Component {
  componentDidMount() {
    const { fetchArtist, fetchTopTracks, fetchRelatedArtist } = this.props;
    const { id } = this.props.match.params;

    fetchArtist(id);
    fetchTopTracks(id);
    fetchRelatedArtist(id);
  }

  render() {
    const { topTracks, relatedArtists, selectedArtist } = this.props;
    const { name, images = [], genres = [] } = selectedArtist;

    return (
      <div className="artist-detail-container">
        <TitleSection title={'Artist Detail'} />
        <div className="basic-info-container">
          <div>
            {images.length > 0 ? (
              <img src={images[1].url} alt={name} className="artist-img" />
            ) : null}
          </div>
          <div className="artist-info">
            <span>{name}</span>
            <GenresList genres={genres} />
            <TopTracksList tracks={topTracks} />
          </div>
        </div>

        <RelatedArtistList artists={relatedArtists} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedArtist: state.artists.selected,
  topTracks: state.artists.selectedTopTracks,
  relatedArtists: state.artists.relatedArtists
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: artistId => dispatch(actions.fetchArtistById(artistId)),
  fetchTopTracks: artistId => dispatch(actions.fetchArtistTopTracks(artistId)),
  fetchRelatedArtist: artistId =>
    dispatch(actions.fetchArtistRelatedArtist(artistId))
});

const ArtistDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedArtistDetail);

export default ArtistDetail;
