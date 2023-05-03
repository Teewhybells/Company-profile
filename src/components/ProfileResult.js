import React from 'react'
import ProfileCard from './ProfileCard'


const ProfileResult = (props) => {

  return (
    <div className='display-result'>{props.profiles.map((profile, index) => 
      <ProfileCard profile={profile} key={index} />
      )}
      </div>
  )
}

export default ProfileResult