import React from 'react'
import {Link} from 'react-router-dom'
import './DashSideNav.css'
import * as Icon from 'react-feather'


export default () => {
  return(
    <nav className='dash-side-nav'>
      <Icon.Compass size={20} className='left-nav-icon'/><Link to='/dashboard/' className='left-nav-text'>Dashboard</Link>
      <Link to='/dashboard/HerdManagement'><Icon.Clipboard size={20} />Manage Herd</Link>
      <Link to='/dashboard/Reports'><Icon.PieChart size={20} />Reports</Link>
      <Link to='/dashboard/Messages'><Icon.MessageCircle size={20} />Messages</Link>
    </nav>
  )
}