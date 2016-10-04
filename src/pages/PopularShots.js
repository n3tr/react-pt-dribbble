import React from 'react'
import ShotList from '../components/ShotList'
import ShotData from '../data/shots.json'

export default class PopularShots extends React.Component {
  render() {
    return (
      <div id="main" className="container clearfix">
        <ShotList shots={ShotData} />
      </div>
    )
  }
}
