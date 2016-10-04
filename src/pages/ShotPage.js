import React from 'react'
import ShotInfo from '../components/Detail/ShotInfo'
import ShotUserProfile from '../components/Detail/ShotUserProfile'
import ShotAction from '../components/Detail/ShotAction'

export default class ShotDetail extends React.Component {
  render() {
    return (
      <div id="main" className="container clearfix">
        <div className="col-8 px-12">
          <ShotInfo />
        </div>

        <div className="col-4 px-12">
          <ShotUserProfile />
          <ShotAction />
        </div>
      </div>
    )
  }
}
