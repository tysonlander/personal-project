import React, {Component} from 'react'
import ReportsPie from './ReportPie'
import MilkVsStress from './MilkVsStress';
import {connect} from 'react-redux'

class Reports extends Component{

  render(){
    return(
      <div>
        <MilkVsStress id={this.props.id}/>
        <ReportsPie/>
      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return {
    id: reduxState.user.id
  }
}

export default connect(mapStateToProps)(Reports)