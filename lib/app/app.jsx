import './app.scss'

import ContentManager from '../content-manager/content-manager'
import get from 'lodash.get'
import React from 'react'
import Router from '../router/router'

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

// add getContent method to React.Component  
function getContent(path) {
  // this.props.log('Getting content:', path)

  if (path === undefined) {
    return this.props.content
  }

  return get(this.props.content, path, null)
}

const proto = React.Component.prototype

proto.getContent = getContent


export default App
