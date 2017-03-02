import './app.scss'

import ContentManager from '../content-manager/content-manager'
import Router from '../router/router'
import React from 'react'

import content from '../content/content'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content
    }
  }

  render() {
    return (
      <Router>
        <ContentManager content={this.state.content}/>
      </Router>
    )
  }
}

export default App
