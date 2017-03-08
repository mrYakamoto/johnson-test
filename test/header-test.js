'use strict'

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Header from '../lib/header/header'

describe('Component Header', function() {
  it ('should have a class named row-fluid', function() {
  const wrapper = shallow(<Header />)
  expect(wrapper.is('.row-fluid')).to.equal(true)
  })
})


// use mount instead of shallow if test involves state, props, or lifecycle methods
