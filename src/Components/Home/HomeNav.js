import React from 'react'
import {Link} from 'react-router-dom'
// import {connect } from 'react-redux'

const HomeNav = () => {
  return(
    <nav>
      <Link to='/'>Home</Link>
      <button><Link to='/login'>Login</Link></button>
    </nav>
  )
}

export default HomeNav