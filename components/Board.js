import React from 'react'
import Item from './Item'
import Restart from './Restart'

const Board = ({game, next, current, restart}) =>{
  return (
    <div className="wrap">
      {game.map((item) =>
        <Item key={item.id} item={item} next={next} current={current}/>
      )}
      <Restart current={current} restart={restart}/>
    </div>
  )
}

export default Board
