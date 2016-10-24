import React from 'react'
import ShotPreview from './ShotPreview'


class ShotList extends React.Component {
  render() {

    const { shots, onClickFavorite, favoriteIds } = this.props
    const shotListElements = shots.map((shot) => {
      return (
        <ShotPreview
          shot={shot}
          key={shot.id}
          onClickFavorite={onClickFavorite}
          liked={favoriteIds.indexOf(shot.id) !== -1}
           />
      )
    })

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
