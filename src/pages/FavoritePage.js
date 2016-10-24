import React from 'react'
import ShotList from '../components/ShotList'
import Loading from '../components/Loading'

import { favoriteShot } from '../actions/shotActions'
import { connect } from 'react-redux'

class FavoritePage extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <ShotList
          shots={this.props.shots}
          favoriteIds={this.props.favoriteIds}
          onClickFavorite={this.props.onClickFavorite}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ shotById, favorite }) => {
  return {
    shots: favorite.map( (id) => shotById[id] ),
    favoriteIds: favorite
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickFavorite: (id) =>  dispatch(favoriteShot(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage)
