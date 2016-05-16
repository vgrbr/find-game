import React, {Component} from 'react'
import Title from './Title'
import Board from './Board'
import { getActive } from '../lib/game'
import css from './game.less'

class Game extends Component {
  componentWillMount() {
    this.props.restart()
  }
  render() {
    const {game, next, restart} = this.props
    const active = getActive(game.current)

    return (
      <div className="game">
        <Title title={active} />
        <Board game={game.current} next={next} restart={restart} current={active ? active.id : false}/>
      </div>
    )
  }
}

export default Game
