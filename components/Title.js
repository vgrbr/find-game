import React from 'react'
import css from './Title.less'

const Title = ({title}) => {
  return (
    <h2>{title ? title.title : 'Good job :) You found everything!'}</h2>
  )
}

export default Title
