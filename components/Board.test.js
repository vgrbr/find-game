import React from 'react'
import test from 'tape';
import sinon from 'sinon'
import { shallow, } from 'enzyme';

import Board from './Board'
import Item from './Item'
import Restart from './Restart'

test('Board component', (t) => {

  t.equal(
    shallow(<Board game={[1,2,3,4]} />).find(Item).length,
    4,
    'Board should have 4 item components')

  t.equal(
    shallow(<Board game={[1,2,3,4]}/>).find(Restart).length,
    1,
    'Game shoul have one Restart component')


  t.end()
})
