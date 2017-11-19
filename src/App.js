import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from './containers/HeaderContainer'
import ArticlesContainer from './containers/ArticlesContainer'
import ArticlePreviewContainer from './containers/ArticlePreviewContainer'
import SigninContainer from './containers/SigninContainer'
import SignupContainer from './containers/SignupContainer'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions'
import { bindActionCreators } from 'redux'

class App extends Component {

  componentWillMount () {
    // dispatch APP_LOAD; it sets the current user
    if (localStorage.getItem('jwt')) {
      this.props.getCurrentUser()
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='ui container'>
          <div className='ui grid'>
            <div className='column'>
              <Header title='conduit' />

              <Switch>
                <Route exact path='/' component={ArticlesContainer} />
                <Route path='/articles/:slug' component={ArticlePreviewContainer} />
                <Route path='/signin' component={SigninContainer} />
                <Route path='/signup' component={SignupContainer} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const dispatchToProps = dispatch => (
  bindActionCreators({ getCurrentUser }, dispatch)
)

export default withRouter(connect(null, dispatchToProps)(App))
