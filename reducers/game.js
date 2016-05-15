import { getFour } from '../lib/game'
import shuffle from 'lodash/shuffle'

const tryNext = (state, id) => {
  let goodCatch = false
  let nextItems = {
    attempts: state.attempts,
  }

  nextItems.items = state.items.map(item => {
    if (item.active && item.id === id) {
      item.completed = true
      item.active = false
      goodCatch = true
    }
    return item
  })

  if (goodCatch) {
    nextItems.current = getFour(nextItems.items)
    nextItems.attempts = 0
    if (nextItems.current.length === 0) {
      nextItems.finished = true
    }
  } else {
    nextItems.current = state.current
    nextItems.attempts += 1
  }

  return nextItems
}

export default function game(state = {}, action) {
  switch (action.type) {
    case 'NEXT':
      return Object.assign(
        {},
        state,
        tryNext(state, action.id),
      )
    case 'RESTART':
      const restart = {
        items: [],
        current: [],
        finished: false,
      }

      restart.items = shuffle(state.items.map(item => {
        item.active = false
        item.completed = false
        return item
      }))

      restart.current = getFour(restart.items)

      return Object.assign(
        {},
        state,
        restart
      )
    default:
      return state
  }
}
