import React from 'react'
import {Link} from 'react-router-dom'
// import {connect } from 'react-redux'

const HomeNav = () => {
  return(
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </nav>
  )
}

export default HomeNav