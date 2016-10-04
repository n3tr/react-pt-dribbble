import React from 'react'
import ShotInfo from '../components/Detail/ShotInfo'
import ShotUserProfile from '../components/Detail/ShotUserProfile'
import ShotAction from '../components/Detail/ShotAction'
import fetchShotDetail from '../api/fetchShotDetail'
import Loading from '../components/Loading'

export default class ShotDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      shot: null,
      loading: true,
    }
  }

  componentDidMount() {
    fetchShotDetail(this.props.params.id).then( (shot) => {
      this.setState({
        shot,
        loading: false
      })
    })
  }

  render() {
    const { loading, shot } = this.state
    if (loading) {
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
