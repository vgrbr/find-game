import React from 'react'
import test from 'tape';
import sinon from 'sinon'
import { shallow, mount } from 'enzyme';

import Item from './Item'

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

test('Item component', (t) => {

  t.equal(
    shallow(<Item item={{image: 'worm.png'}} />).hasClass('shake'),
    false,
    'Item shold not have shake css class')

  t.equal(
    (() => {
      const wrapper = mount(<Item item={{image: 'worm.png', id:1}} current={2} next={() => {}} />)
      wrapper.simulate('click')
      setTimeout(() => {
        t.equal(
          wrapper.state().flash,
          'shake',
          'Wrong item should have shake class on click'
        )
      }, 301)
      return wrapper.state().flash
    })(),
    'flash',
    'Wron item should have flash class on click')

    t.equal(
      (() => {
        const wrapper = mount(<Item item={{image: 'worm.png', id:1}} current={1} next={() => {}} />)
        wrapper.simulate('click')
        setTimeout(() => {
          t.notEqual(
            wrapper.state().flash,
            'shake',
            'Good item should not have shake class on click'
          )
        }, 301)
        return wrapper.state().flash
      })(),
      'flash',
      'Good item should have flash class on click')

  t.equal(
    shallow(<Item item={{image: 'worm.png'}} />).find('img').length,
    1,
    'Item should have one image')

  t.equal(
    (() => {
      const onButtonClick = sinon.spy()
      const wrapper = mount(
        <Item next={onButtonClick} item={{image: 'worm.png'}} />
      );
      wrapper.simulate('click')
      return onButtonClick.calledOnce
    })(),
    true,
    'Click on restart link should invoke restat action'
  );

  t.end()
})
