import React from 'react'
import {Link} from 'react-router-dom'
import * as Icon from 'react-feather'

const QuickActions = () => {
  return (
    <div>
      <h2>Quick Actions</h2>
      <hr/>
      <h4><Icon.PlusCircle size={20}/><Link to='/dashboard/AddToHerd'>Add to Herd</Link></h4>
      <h4><Icon.PlusCircle size={20}/><Link to='/dashboard/HerdManagement'>Remove A Cow</Link></h4>
    </div>
  )
}

export default QuickActions