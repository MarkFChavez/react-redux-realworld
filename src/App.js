import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/commons/Header'
import ArticlesContainer from './containers/ArticlesContainer'
import ArticlePreviewContainer from './containers/ArticlePreviewContainer'

const App = () => (
  <div className='App'>
    <div className='ui container'>
      <div className='ui grid'>
        <div className='column'>
          <Header title='conduit' />

          <Switch>
            <Route exact path='/' component={ArticlesContainer} />
            <Route path='/articles/:slug' component={ArticlePreviewContainer} />
          </Switch>
        </div>
      </div>
    </div>
  </div>
)

export default App;
