import React from 'react'

function UserProfile(profile) {
  return (
   <><div>{profile.picture}</div>
   <div>{profile.username}</div>
   <div>{profile.name}</div>
   <div>{profile.email}</div>
   <div>{profile.location}</div>
   <div>{profile.bio}</div></>
  )
}

export default UserProfile