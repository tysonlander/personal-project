import React from 'react'
import {Link} from 'react-router-dom'


const QuickActions = () => {
  return (
    <div>
      <h2>Quick Actions</h2>
      <hr/>
      <h4><Link to='/dashboard/AddToHerd'>Add to Herd</Link></h4>
      <h4><Link to='/dashboard/HerdManagement'>Remove A Cow</Link></h4>
    </div>
  )
}

export default QuickActions