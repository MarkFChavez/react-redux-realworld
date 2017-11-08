import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = () => <div> Home </div>
const About = () => <div> About </div>

/**
 * @param '/' {Go to Article List}
 * @param '/articles/:slug' {Go to Article Page}
 */
const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/articles/:slug" component={About} />
    </Switch>
  </div>
)

export default App;
