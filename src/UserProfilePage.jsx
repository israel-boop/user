import React from 'react';
import UserProfile from './UserProfile';
import './UserProfilePage.css';

function UserProfilesPage(props) {
  const { profiles } = props;

  return (
    <div className="user-profiles-page">
      {profiles.map((profile, index) => (
        <UserProfile
          key={index}
          picture={profile.picture}
          username={profile.username}
          name={profile.name}
          email={profile.email}
          location={profile.location}
          bio={profile.bio}
        />
      ))}
    </div>
  );
}

export default UserProfilesPage;
