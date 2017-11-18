import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/commons/Header'
import ArticlesContainer from './containers/ArticlesContainer'
import ArticlePreviewContainer from './containers/ArticlePreviewContainer'
import SigninContainer from './containers/SigninContainer'
import SignupContainer from './containers/SignupContainer'

const App = () => (
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

export default App;
