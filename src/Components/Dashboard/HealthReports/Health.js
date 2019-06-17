import React, {Component} from 'react'
import axios from 'axios';
import {connect} from 'react-redux'
import {updateFlags} from '../../../redux/healthFlags'
import HerdHealthMetrics from './HerdHealthMetrics'


class Health extends Component{
    
  componentDidMount(){
    this.handleGetFlags()
  }

  handleGetFlags =() =>{
    axios
    .post('/api/getHealthFlags', {ownerId: this.props.ownerId})
    .then(res => {
      this.props.updateFlags(res.data[0])
    })
    .catch((err) =>
      console.log(err)
    )
  }

  render(){
    return(
      <div>
        <div className='page-header'>
          <h1>Health</h1>
          <hr></hr>
        </div>
        <HerdHealthMetrics/>
      </div>
    )
  }
} 

function mapStateToProps(reduxState){
  return {
    ownerId: reduxState.user.id,
    milk: reduxState.healthFlags.milk,
    sleep: reduxState.healthFlags.sleep,
    steps: reduxState.healthFlags.steps,
    stress: reduxState.healthFlags.stress,
    temp: reduxState.healthFlags.temp
  }
}

export default connect(mapStateToProps, {updateFlags})(Health)