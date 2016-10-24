import React from 'react'
import ShotInfo from '../components/Detail/ShotInfo'
import ShotUserProfile from '../components/Detail/ShotUserProfile'
import ShotAction from '../components/Detail/ShotAction'

import Loading from '../components/Loading'

import { fetchDetail } from '../actions/shotActions'

import { connect } from 'react-redux'


class ShotDetail extends React.Component {

  componentDidMount() {
    this.props.fetchDetail()
  }

  render() {
    const { shot } = this.props
    if (!shot) {
      return <Loading />
    }
    return (
      <div>
        <div className="col-8 px-12">
          <ShotInfo shot={shot} />
        </div>

        <div className="col-4 px-12">
          <ShotUserProfile user={shot.user} />
          <ShotAction />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const shot = state.shotById[ownProps.params.id]
  return {
    shot
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDetail: () => dispatch(fetchDetail(ownProps.params.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShotDetail)
