import React from 'react'
import test from 'tape';

import { shallow } from 'enzyme';

import Title from './Title'

test('Title component', (t) => {

  t.equal(
    shallow(<Title />).contains('Good job :) You found everything!'),
    true,
    'Should be displayed default title / game finished'
  )

  t.equal(
    shallow(<Title title={{title: 'Test Title'}}/>).contains('Test Title'),
    true,
    'Should be passed title'
  )

  t.end()
})
