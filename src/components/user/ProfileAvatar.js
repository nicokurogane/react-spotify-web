import React from 'react';
import { connect } from 'react-redux';
import { fetchLoggedInUserInfo } from '../../actions/users';
import { Avatar } from 'antd';

import '../../css/_variables.scss';

class ConnectedProfileAvatar extends React.Component {
  componentDidMount() {
    this.props.fetchLoggedInUserInfo();
  }

  render() {
    console.log(this.props.user);
    const { user = {} } = this.props;
    return (
      <div className="profile-avatar-container">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.selected
});

const ProfileAvatar = connect(
  null,
  { fetchLoggedInUserInfo }
)(ConnectedProfileAvatar);

export default ProfileAvatar;
