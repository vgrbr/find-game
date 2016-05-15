import React from 'react'
import test from 'tape';
import sinon from 'sinon'
import { shallow } from 'enzyme';

import Game from './Game'
import Title from './Title'
import Board from './Board'

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

test('Game component', (t) => {

  t.equal(
    shallow(<Game restart={()=>{}} game={{current:[]}} />).find(Title).length,
    1,
    'Game should have one Title')

  t.equal(
    shallow(<Game restart={()=>{}} game={{current:[]}} />).find(Board).length,
    1,
    'Game shoul have one Board component')

  t.equal(
    (() => {
      const restart = sinon.spy();
      shallow(<Game restart={restart} game={{current:[]}} />)
      return restart.called
    })(),
    true,
    'Restart fn should be called on boot'
  )

  t.end()
})
