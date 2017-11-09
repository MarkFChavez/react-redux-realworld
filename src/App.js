import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = () => <div> Home </div>

const App = () => (
  <div className='App'>

    {/* routing */}
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </div>
)

export default App;
