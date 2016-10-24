import React from 'react'
import ShotList from '../components/ShotList'
import Loading from '../components/Loading'

import { fetchPopular } from '../actions/shotActions'
import { connect } from 'react-redux'

class PopularShots extends React.Component {


  componentDidMount() {
    this.props.dispatch(fetchPopular())
  }

  render() {

    return (
      <div>
      {
        this.props.fetching ? <Loading /> : null
      }
      <ShotList shots={this.props.shots} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { popular, shotById } = state
  const popularShots = popular.shots.map((id)=>{
    return shotById[id]
  })
  return {
    shots: popularShots,
    fetching: popular.fetching
  }
}

export default connect(mapStateToProps)(PopularShots)
