import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import ArticlesPage from './components/ArticlesPage'

const App = () => (
  <div className='App'>

    {/**
     * @desc SEMANTIC-UI GRID SETUP
     */}

    <div className='ui container'>
      <div className='ui grid'>
        <div className='column'>
          <Header />

          <Switch>
            <Route exact path='/' component={ArticlesPage} />
          </Switch>
        </div>
      </div>
    </div>

  </div>
)

export default App;
