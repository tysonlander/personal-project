import React from 'react'
import {Link} from 'react-router-dom'
import * as Icon from 'react-feather'

const QuickActions = () => {
  return (
    <div>
      <h3>Quick Actions</h3>
      <hr className='horizontal-rule'/>
      <h4><Icon.PlusCircle size={20}/><Link to='/dashboard/AddToHerd' className='link-text'>Add to Herd</Link></h4>
      <h4><Icon.PlusCircle size={20}/><Link to='/dashboard/HerdManagement' className='link-text'>Remove A Cow</Link></h4>
      <h4><Icon.PlusCircle size={20}/><Link to='/dashboard/HealthSettings' className='link-text'>Health Settings</Link></h4>
    </div>
  )
}

export default QuickActions