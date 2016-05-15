import React from 'react'
import test from 'tape';
import sinon from 'sinon'
import { shallow, mount } from 'enzyme';

import Restart from './Restart'

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

test('Restart component', (t) => {

  t.equal(
    shallow(<Restart current={[1,2,3,4]}/>).contains('Restart'),
    false,
    'Restart should not be displayed if there are current items')

  t.equal(
    shallow(<Restart />).contains('Restart'),
    true,
    'Restart button should be displayed')

  t.equal(
    (() => {
      const onButtonClick = sinon.spy()
      const wrapper = mount(
        <Restart restart={onButtonClick} />
      );
      wrapper.find('a').simulate('click')
      return onButtonClick.calledOnce
    })(),
    true,
    'Click on restart link should invoke restat action'
  );

  t.end()
})
