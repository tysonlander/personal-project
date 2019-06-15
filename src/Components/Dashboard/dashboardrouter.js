import React from 'react'
import {Switch, Route } from 'react-router-dom'
// import Dashboard from './Dashboard';
import AddToHerd from './AddToHerd/AddToHerd'
import DashHome from './DashHome/DashHome'
import HerdManagement from './HerdManagement/HerdManagement'
import AddCowConfirm from './AddToHerd/AddCowConfirm'
import Reports from './BusinessReports/Reports'
import Messages from './Messages/Messages'
import Health from './HealthReports/Health'
import HealthSettings from './HealthSettings/HealthSettings'
import HealthSettingConfirm from './HealthSettings/HealthSettingConfirm'

export default (
 <Switch>
   <Route exact path='/dashboard/' component={DashHome}/>
   <Route path='/dashboard/AddToHerd' component={AddToHerd}/>
   <Route path='/dashboard/AddToHerdConfirm' component={AddCowConfirm}/>
   <Route path='/dashboard/HerdManagement' component={HerdManagement}/>
   <Route path='/dashboard/Reports' component={Reports}/>
   <Route path='/dashboard/Messages' component={Messages}/>
   <Route path='/dashboard/Health' component={Health}/>
   <Route path='/dashboard/HealthSettings' component={HealthSettings}/>
   <Route path='/dashboard/HealthSettingConfirm' component={HealthSettingConfirm}/>
 </Switch>
)