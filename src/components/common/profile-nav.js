import React from 'react';

import { Link } from 'react-router-dom';

const ProfileNav = () => {
  return (
    <Link to="/profile" className="profileButton">
      Profile
    </Link>
  );
};

export default ProfileNav;
