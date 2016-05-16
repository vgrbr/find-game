import React from 'react'
import Item from './Item'
import Restart from './Restart'
import css from './Board.less'

const Board = ({game, next, current, restart}) =>{
  return (
    <div className="board">
      {game.map((item) =>
        <Item key={item.id} item={item} next={next} current={current}/>
      )}
      <Restart current={current} restart={restart}/>
    </div>
  )
}

export default Board
