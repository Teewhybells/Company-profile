import React from 'react'

const ProfileCard = (props) => {
  return (
    <div className='profile-card'>
        <img src={props.profile.picture} alt='' />
        <div>
        <div></div>
            <div>{props.profile.id}</div>
            <div>{props.profile.title} {props.profile.firstName} {props.profile.lastName} </div>
        </div>
    </div>
  )
}

export default ProfileCard