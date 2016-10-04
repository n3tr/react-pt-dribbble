import React from 'react'

export default ({ user }) => {
  return (
    <div className="user-profile p-12 mb-24">
      <div className="user-avatar py-24">
        <img
        alt=""
        src={user.avatar_url}/>
      </div>
      <div className="user-info">
        <h4 className="title">
          {user.name}
        </h4>
        <p className="bio" dangerouslySetInnerHTML={{__html: user.bio}}>
        </p>
      </div>
    </div>
  )
}
