import './page.scss'

import React from 'react'

class Page extends React.Component {
  render() {
    const title = this.getContent('title')

    document.title = title

    return (
      <div className='page'>
        <div className='row'>
          <h1>{title}</h1>
        </div>
      </div>
    )
  }
}

export default Page
