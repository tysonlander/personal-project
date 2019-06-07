import React from 'react'
import {Switch, Route } from 'react-router-dom'
// import Dashboard from './Dashboard';
import AddToHerd from './AddToHerd/AddToHerd'
import DashHome from './DashHome/DashHome'
import HerdManagement from './HerdManagement/HerdManagement'
import AddCowConfirm from './AddToHerd/AddCowConfirm'


export default (
 <Switch>
   <Route exact path='/dashboard/' component={DashHome}/>
   <Route path='/dashboard/AddToHerd' component={AddToHerd}/>
   <Route path='/dashboard/AddToHerdConfirm' component={AddCowConfirm}/>
   <Route path='/dashboard/HerdManagement' component={HerdManagement}/>
 </Switch>
)