import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/LoginForm'
import Register from './Components/Login/RegisterForm'
import Dashboard from './Components/Dashboard/DashWireSetup/Dashboard'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/dashboard' component={Dashboard} />

  </Switch>
)