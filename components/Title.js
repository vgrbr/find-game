import React from 'react'

const Title = ({title}) => {
  return (
    <h2>{title ? title.title : 'Good job :) You found everything!'}</h2>
  )
}

export default Title
