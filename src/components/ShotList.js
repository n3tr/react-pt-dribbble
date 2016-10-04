import React from 'react'
import ShotPreview from './ShotPreview'


class ShotList extends React.Component {
  render() {

    const { shots } = this.props
    const shotListElements = shots.map((shot) => <ShotPreview shot={shot} key={shot.id} />)

    return (
      <div>
        {shotListElements}
      </div>
    )
  }
}

ShotList.propTypes = {
  shots: React.PropTypes.array.isRequired
}

export default ShotList
