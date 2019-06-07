import React from 'react'
import {Link} from 'react-router-dom'
import './DashSideNav.css'

export default () => {
  return(
    <nav className='dash-side-nav'>
      <Link to='/dashboard/'>Dashboard</Link>
      <Link to='/dashboard/HerdManagement'>Manage Herd</Link>
      <Link to='/dashboard/Reports'>Reports</Link>
    </nav>
  )
}