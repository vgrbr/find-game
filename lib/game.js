import head from 'lodash/head'
import take from 'lodash/take'
import shuffle from 'lodash/shuffle'
import { compose } from 'redux'

export const getActive = (items) => {
  return head(items.filter(item => item.active === true))
}

export const getNotCompleted = (items) => {
  return head(items.filter(item => item.completed === false))
}

export const getFour = (items) => {
  const active = getNotCompleted(items)

  if (active) {
    active.active = true
    const other = items.filter(item => item.id !== active.id)
    const otherThree = take(shuffle(other), 3)
    return shuffle([active, ...otherThree])
  }

  return []
}
