import React, {Component} from 'react'
import * as css from './Restart.less'

const Restart = ({current, restart}) => {
  return (
    <div className="restart">
      {!current &&
        <a onClick={restart}>Restart</a>}
    </div>
  )
}

export default Restart
