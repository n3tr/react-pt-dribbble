import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="container">
          <div className="logo fl">
            <a href="">Deeep</a>
          </div>
          <ul className="lsn fr p-0 m-0 main-nav">
            <li className="nav-item-like"><a href="#" className="fr"><i className="like-count p-2 px-8 mr-8">10</i>Like</a></li>
          </ul>
        </div>
      </header>
    )
  }
}
