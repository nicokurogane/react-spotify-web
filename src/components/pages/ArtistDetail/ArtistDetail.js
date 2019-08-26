import React from 'react';
import { connect } from 'react-redux';
import { Skeleton } from 'antd';
import * as actions from '../../../actions/artists';
import GenresList from '../../artist/genres-list/GenresList';
import RelatedArtistList from '../../artist/related-artist-list/RelatedArtistsList';
import TopTracksList from '../../artist/top-tracks-list/TopTracksList';
import TitleSection from '../../title-section/TitleSection';
import LayoutApp from '../../layout-app/LayoutApp';

import './artist-detail.scss';

class ConnectedArtistDetail extends React.Component {
  componentDidMount() {
    const { fetchArtist, fetchTopTracks, fetchRelatedArtist } = this.props;
    const { id } = this.props.match.params;

    fetchArtist(id);
    fetchTopTracks(id);
    fetchRelatedArtist(id);
  }

  renderErrorSection = section => {
    return <div>{`Error loading ${section} info :(`}</div>;
  };

  renderSkeleton = () => {
    return (
      <div className="top-track-table">
        <Skeleton active />
      </div>
    );
  };

  renderBasicInfo = () => {
    const { name, images = [], genres = [] } = this.props.selectedArtist;
    return (
      <>
        <div>
          {images.length > 0 ? (
            <img src={images[1].url} alt={name} className="artist-img" />
          ) : null}
        </div>
        <div className="artist-info">
          <span className="artist-name">{name}</span>
          <GenresList genres={genres} />
        </div>
      </>
    );
  };

  renderTopTracks = topTracks => {
    return (
      <div className="top-track-table">
        <TopTracksList tracks={topTracks} />
      </div>
    );
  };

  renderRelatedArtist = relatedArtists => {
    return (
      <div className="related-artists-container">
        <RelatedArtistList artists={relatedArtists} />
      </div>
    );
  };

  render() {
    const {
      topTracks,
      relatedArtists,
      selectedArtist,
      isLoadingBasicInfo,
      isLoadingTopTracks,
      isLoadingRelatedArtist
    } = this.props;

    return (
      <LayoutApp>
        <div className="artist-detail-container">
          <TitleSection title={'Artist Detail'} />
          <div className="basic-info-container">
            {isLoadingBasicInfo
              ? this.renderSkeleton()
              : !isLoadingBasicInfo &&
                Object.getOwnPropertyNames(selectedArtist).length === 0
              ? this.renderErrorSection('basic info')
              : this.renderBasicInfo()}
          </div>
          <div className="top-tracks">
            <TitleSection title={'Top Tracks'} className="top-track-title" />
            {isLoadingTopTracks
              ? this.renderSkeleton()
              : !isLoadingTopTracks && topTracks.length > 0
              ? this.renderTopTracks(topTracks)
              : this.renderErrorSection('top track')}
          </div>
          <div className="related-artist">
            <TitleSection
              title={'Related Artists'}
              className="related-artist-title"
            />
            {isLoadingRelatedArtist
              ? this.renderSkeleton()
              : !isLoadingRelatedArtist && relatedArtists.length > 0
              ? this.renderRelatedArtist(relatedArtists)
              : this.renderErrorSection('related artist')}
          </div>
        </div>
      </LayoutApp>
    );
  }
}

const mapStateToProps = state => ({
  selectedArtist: state.artists.selected,
  topTracks: state.artists.selectedTopTracks,
  relatedArtists: state.artists.relatedArtists,
  isLoadingBasicInfo: state.artists.isLoadingBasicInfo,
  isLoadingTopTracks: state.artists.isLoadingTopTracks,
  isLoadingRelatedArtist: state.artists.isLoadingRelatedArtist
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
