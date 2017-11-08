import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = () => <div> Home </div>
const About = () => <div> About </div>

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </div>
)

export default App;
