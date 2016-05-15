import test from 'tape';
import game from  './game'
import * as actions from '../actions/game'
import data from '../data'

test('Testing game reducer', (t) => {
  data.game.finished = true
  t.equal(
    game(data.game, {type: 'RESTART'}).finished,
    false,
    'Game should not be finished after restart'
  )

  t.equal(
    game(data.game, {type: 'RESTART'}).items.reduce( (prev, curr) => {
      return prev ? prev : curr.completed
    }, false),
    false,
    'There should not be completed items after restart'
  )

  t.equal(
    game(data.game, {type: 'RESTART'}).current.length,
    4,
    'Game should have 4 current items after restart'
  )

  t.equal(
    game(data.game, {type: 'RESTART'}).attempts,
    0,
    'Game should have 0 attempts after restart'
  )

  data.game.attempts = 10

  t.equal(
    game(data.game, {type: 'NEXT', id: 100000}).attempts,
    11,
    'Game should have +1 attempt after next'
  )



  t.end();
})
