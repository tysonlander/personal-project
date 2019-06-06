import React from 'react'
import {Link} from 'react-router-dom'
import './DashSideNav.css'

export default () => {
  return(
    <nav className='dash-side-nav'>
      <Link to='/dashboard/'>Dashboard</Link>
      <Link to='/dashboard/AddToHerd'>Add To Herd</Link>
    </nav>
  )
}