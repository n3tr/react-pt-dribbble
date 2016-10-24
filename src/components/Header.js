import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="container">
          <div className="logo fl">
            <Link to="/">Deeep</Link>
          </div>
          <ul className="lsn fr p-0 m-0 main-nav">
            <li className="nav-item-like"><a href="#" className="fr">
            <i className="like-count p-2 px-8 mr-8">{this.props.favoriteCount}</i>Like</a></li>
          </ul>
        </div>
      </header>
    )
  }
}

const mapStateToProps = ({ favorite }) => {
  return {
    favoriteCount: favorite.length
  }
}

export default connect(mapStateToProps)(Header)
