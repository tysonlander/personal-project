import React, { Component } from 'react'
import * as Icon from 'react-feather'

class HealthSettingConfirm extends Component {

  handleBack = () => {
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div className='health-settings-conf'>
        <div className='page-header'>
          <h1>Health Settings</h1>
          <hr></hr>
        </div>

        <div className='row-a'>
          <Icon.CheckSquare size={100} stroke='#f88379' className='heart-icon' />
          <h4>Your health flags have been set!</h4>
        </div>

        <div className='bottom-row'>
          <hr></hr>
          <div className='center-aligned-2butn'>
            <button className='butn-two-primary' onClick={this.handleBack}>Back to Dashboard</button>

          </div>
        </div>
      </div>
    )
  }
}


export default HealthSettingConfirm