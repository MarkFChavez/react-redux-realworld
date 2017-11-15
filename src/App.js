import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import ArticlesContainer from './containers/ArticlesContainer'
import ArticleItem from './components/ArticleItem'

const App = () => (
  <div className='App'>
    <div className='ui container'>
      <div className='ui grid'>
        <div className='column'>
          <Header title='conduit' />

          <Switch>
            <Route exact path='/' component={ArticlesContainer} />
            <Route path='/articles/:slug' component={ArticleItem} />
          </Switch>
        </div>
      </div>
    </div>
  </div>
)

export default App;
