import './header.scss'

import CtrlComponent from 'ctrl-react-component'
import React from 'react'

export default class Header extends CtrlComponent {
  render() {
    return (
      <nav className='row-fluid'>
        <div
          className="columns small-12"
        />
      </nav>
    )
  }
}
