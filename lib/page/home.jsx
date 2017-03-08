import './page.scss'

import React from 'react'

export default class HomePage extends React.Component {
  render() {
    const title = this.getContent('title')

    return (
      <div className='page'>
        <div className='row'>
          <h1>{title}</h1>
        </div>
      </div>
    )
  }
}
