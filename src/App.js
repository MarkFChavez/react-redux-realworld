import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import ArticleListPage from './components/ArticleListPage'
import ArticleItemPage from './components/ArticleItemPage'

const App = () => (
  <div className='App'>
    <div className='ui container'>
      <div className='ui grid'>
        <div className='column'>
          <Header title='conduit' />

          <Switch>
            <Route exact path='/' component={ArticleListPage} />
            <Route path='/articles/:slug' component={ArticleItemPage} />
          </Switch>
        </div>
      </div>
    </div>
  </div>
)

export default App;
