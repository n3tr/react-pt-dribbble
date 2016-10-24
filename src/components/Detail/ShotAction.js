import React from 'react'

export default ({ onClickFavorite, liked }) => (
  <div className="shot-action p-24">
    <a href="#"  onClick={
      (e) => {
        e.preventDefault()
        onClickFavorite()
      }
    } className="like-btn liked p-12">
      <i className="fa fa-heart" aria-hidden="true"></i>
      { liked ? 'Liked' : 'Like'}
    </a>
  </div>
)
