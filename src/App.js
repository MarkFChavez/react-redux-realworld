import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ArticlesPage from './components/ArticlesPage'

const App = () => (
  <div className='App' style={{ marginTop: '20px' }}>
    <Switch>
      <Route exact path='/' component={ArticlesPage} />
    </Switch>
  </div>
)

export default App;
