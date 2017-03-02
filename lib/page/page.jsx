import './page.scss'

import CtrlComponent from 'ctrl-react-component'
import React from 'react'

class Page extends CtrlComponent {
  renderFiltered() {
    const title = this.getContent('title')

    document.title = title

    return (
      <div className='page'>
        <div className='row'>
          <h1>PLACEHOLDER PAGE COMPONENT</h1>
        </div>
      </div>
    )
  }
}

export default Page
