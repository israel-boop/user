import React from 'react';
import UserProfilesPage from './UserProfilePage';
import './App.css';

function App() {
  const profiles = [
    {
      picture: 'https://via.placeholder.com/150',
      username: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      location: 'New York, NY',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      picture: 'https://via.placeholder.com/150',
      username: 'jane_doe',
      name: 'Jane Doe',
      email: 'jane@example.com',
      location: 'Los Angeles, CA',
      bio: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    // Add more profiles here...
  ];

  return (
    <div className="app">
      <UserProfilesPage profiles={profiles} />
    </div>
  );
}

export default App;
