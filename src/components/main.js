import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './landingpage'
import Moto from './moto'
import Projects from './projects'

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/moto" component={Moto} />
    <Route path="/projects" component={Projects} />
  </Switch>
)

export default Main
