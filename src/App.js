import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = () => <div> Home </div>

/**
 * @param '/' {Go to Article List}
 * @param '/articles/:slug' {Go to Article Page}
 */
const App = () => (
  <div className="App">
    <div className="ui grid">
      <div className="four wide column"></div>
      <div className="four wide column"></div>
      <div className="four wide column"></div>
      <div className="four wide column"></div>
    </div>

    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
)

export default App;
