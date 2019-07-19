import React from 'react'
import {Link} from 'react-router-dom'
// import {connect } from 'react-redux'

const HomeNav = () => {
  return(
    <nav className='home-nav'>
      <div className='container-one'>
        <img src='https://moolapics.s3-us-west-1.amazonaws.com/cowbell-black.JPG' alt='bell-logo' className='home-nav-logobell' />
        <div className='vertical-line'></div>
        <img src='https://moolapics.s3-us-west-1.amazonaws.com/logo+screenshot.JPG' alt='logo' className='home-nav-logoname' />
      </div>
      <div className='container-two'>
        <button className='butn-primary'><Link to='/login'>Register</Link></button>
        <button className='butn-secondary'><Link to='/login'>Login</Link></button>
        {/* <ul>
          <li className="butn-primary"><a>test button</a></li>
        </ul> */}
      </div>
    </nav>
  )
}

export default HomeNav