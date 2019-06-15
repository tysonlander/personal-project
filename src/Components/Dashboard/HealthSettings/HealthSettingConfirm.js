import React, {Component} from 'react'

class HealthSettingConfirm extends Component{
  
  handleBack = () => {
    this.props.history.push('/dashboard')
  }
  
  render(){
    return(
      <>
        <div className='page-header'>
          <h1>Health Settings</h1>
          <hr></hr>
        </div>

        <h4>image</h4>
       <p>Your health flags to watch have been set!</p>

       <div className='page-header'>
        <hr></hr>
        <button onClick={this.handleBack}>Back to Dashboard</button>
       </div>
      </>
    )
  }
}


export default HealthSettingConfirm