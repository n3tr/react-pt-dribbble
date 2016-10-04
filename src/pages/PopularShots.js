import React from 'react'
import ShotList from '../components/ShotList'
import Loading from '../components/Loading'
import fetchPopularShot from '../api/fetchPopularShot'

export default class PopularShots extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      shots: [],
      loading: false
    }
  }

  componentDidMount() {
    this.fetchShots()
  }

  fetchShots() {
    this.setState({
      loading: true
    })
    fetchPopularShot().then((shots) => {
      this.setState({
        shots,
        loading: false
      })
    })
  }

  render() {

    return (
      <div id="main" className="container clearfix">
      {
        this.state.loading ? <Loading /> : <ShotList shots={this.state.shots} />
      }
      </div>
    )
  }
}
