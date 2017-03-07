import Header from '../header/header'
import Page from '../page/page'
import React from 'react'

// import debug from 'debug'
import env from '../env'

// const error = debug('hbaslp:error:content-manager')
// const log = debug('habslp:content-manager')

class ContentManager extends React.Component {
  constructor(props) {
    super(props)

    const page = this.getPage()

    // this.error = error
    // this.log = log

    if (env.NODE_ENV === 'development') {
      // this.log('Exposing contentManger:', this)
      window.contentManager = this
    }

    this.state = {
      page
    }
  }

  getPage() {
    const page = 'home'

    // this.log('Getting page:', page)

    return page
  }

  setPage(page) {
    this.setState({
      page
    })
  }

  render() {
    const pageContent = this.getContent(this.state.page) || ''
    const headerContent = this.getContent('global.header') || ''
    // this.log('Using content:', pageContent)

    return (
      <div id='content-manager'>
        <Header content={headerContent}/>
        <Page content={pageContent}/>
      </div>
    )
  }
}

export default ContentManager
