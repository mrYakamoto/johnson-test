import './app.scss'

import get from 'lodash.get'
import Header from '../header/header'
import HomePage from '../page/home'
import React from 'react'
import Router from '../router/router'

import content from '../content/content'
// eslint-disable-next-line no-unused-vars
import {routes, getBackendPath} from '../content/routes'

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
        <Header
          content={content.global.header}
        />
        <HomePage
          content={content.home}
          routeFilter={routes.HomePage.filter}
        />
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
