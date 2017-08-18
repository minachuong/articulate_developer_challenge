import React from 'react'
import PropTypes from 'prop-types'

function Icon (props) {
  const icons = [
    {
      "id": "check", 
      "path": "M22.8,53.9L22.8,53.9c-0.7,0-1.3-0.3-1.8-0.8L0.7,32.8c-1-1-1-2.6,0-3.6c1-1,2.6-1,3.6,0l18.4,18.5l36.8-36.8c1-1,2.6-1,3.6,0c1,1,1,2.6,0,3.6L24.6,53.2C24.1,53.6,23.4,53.9,22.8,53.9z"
    },
    {
      "id": "cross", 
      "path": "M37.3,32L62.9,6.4c1.5-1.5,1.5-3.8,0-5.3c-1.5-1.5-3.8-1.5-5.3,0L32,26.7L6.4,1.1c-1.5-1.5-3.8-1.5-5.3,0c-1.5,1.5-1.5,3.8,0,5.3L26.7,32L1.1,57.6c-1.5,1.5-1.5,3.8,0,5.3C1.8,63.6,2.8,64,3.8,64c1,0,1.9-0.4,2.7-1.1L32,37.3l25.6,25.6c0.7,0.7,1.7,1.1,2.7,1.1c1,0,1.9-0.4,2.7-1.1c1.5-1.5,1.5-3.8,0-5.3L37.3,32z"
    }
  ]
  
  
  return (
    <svg viewBox="0 0 64 64" width="10" height="10" fill={props.color}>
      <path d={icons.filter((icon) => icon.id === `${props.name}`)[0].path}/>
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Icon
