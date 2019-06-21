import React from 'react'
import {Link} from 'react-router-dom'
import './DashSideNav.css'
import * as Icon from 'react-feather'


export default () => {
  return(
    <nav className='dash-side-nav'>
      <div className='dash-side-nav-link-container'>
        <Link 
          to='/dashboard/' className='link-one'><Icon.Compass size={20} className='left-nav-icon'/>   Dashboard</Link>
        <Link 
          to='/dashboard/Health' className='link-one'><Icon.Activity size={20}/>   Health Reports
        </Link>
        
        <Link 
          to='/dashboard/HerdManagement' className='link-one'><Icon.Clipboard size={20} />   Manage Herd
        </Link>
        <Link to='/dashboard/Reports' className='link-one'><Icon.PieChart size={20} />   Business Reports</Link>
        <Link to='/dashboard/Messages' className='link-one'><Icon.MessageCircle size={20} />   Messages</Link>

      </div>
    </nav>
  )
}