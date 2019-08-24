import React from 'react';
import LayoutApp from '../../layout-app/LayoutApp';
import UserInfoDetail from '../../user/detail/Detail';

const UserDetail = () => {
  return (
    <LayoutApp>
      <div className="page-user-detail-container">
        <UserInfoDetail />
      </div>
    </LayoutApp>
  );
};

export default UserDetail;
