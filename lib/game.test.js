import test from 'tape';
import { getActive, getNotCompleted, getFour } from './game'
import data from '../data'

const setFlag = (items, id, flag = 'active', value = true) => {
  return items.map(item => {
    item[flag] = (item.id === id) ? value : !value
    return item;
  });
}

test('Game lib functions', t => {
  let gameItems = data.game.items

  t.equal(getActive(gameItems), undefined, 'getActive should return undefined for active')
  t.equal(getFour(gameItems).length, 4, 'getFour should return four items')

  t.equal(getActive(gameItems).id, 1, 'getActive should return item with id 1')

  gameItems = setFlag(data.game.items, 2)
  t.equal(getActive(gameItems).id, 2, 'getActive should return item with id 2')

  gameItems = setFlag(data.game.items, 1)
  t.equal(getActive(gameItems).id, 1, 'getActive should return item with id 1')

  t.equal(getNotCompleted(gameItems).id, 1, 'getNotCompleted should return item with id 1')

  gameItems = setFlag(data.game.items, 2, 'completed', false)
  t.equal(getNotCompleted(gameItems).id, 2, 'getNotCompleted should return item with id 2')

  t.end()
});
