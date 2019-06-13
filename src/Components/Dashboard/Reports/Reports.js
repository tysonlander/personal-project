import React, {Component} from 'react'
import ReportByBreed from './ReportByBreed'
import {connect} from 'react-redux'

class Reports extends Component{

  render(){
    return(
      <div>
        <ReportByBreed id={this.props.id}/>
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