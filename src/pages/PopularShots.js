import React from 'react'
import ShotList from '../components/ShotList'
import Loading from '../components/Loading'

import { fetchPopular, favoriteShot } from '../actions/shotActions'
import { connect } from 'react-redux'

class PopularShots extends React.Component {

  componentDidMount() {
    if (this.props.shots.length == 0){
      this.props.fetch()
    }

  }

  render() {
    console.log(this.props);
    return (
      <div>
      {
        this.props.fetching ? <Loading /> : null
      }
      <ShotList
        shots={this.props.shots}
        favoriteIds={this.props.favoriteIds}
        onClickFavorite={this.props.onClickFavorite}
      />
      </div>
    )
  }
}

const mapStateToProps = ({ popular, shotById, favorite }) => {
  const popularShots = popular.shots.map((id)=>{
    return shotById[id]
  })
  return {
    shots: popularShots,
    fetching: popular.fetching,
    favoriteIds: favorite
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => dispatch(fetchPopular()),
    onClickFavorite: (id) =>  dispatch(favoriteShot(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularShots)
