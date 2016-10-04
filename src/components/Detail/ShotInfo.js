import React from 'react'
import ShotImage from './ShotImage'

export default ({ shot }) => (
  <div>
      <ShotImage
      src={shot.images.normal} />
  </div>
)
