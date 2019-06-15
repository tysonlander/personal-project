import React, {Component} from 'react'
import ReportByBreed from './ReportByBreed'
import {connect} from 'react-redux'

class Reports extends Component{

  render(){
    return(
      <div>
        <div className='page-header'>
          <h1>Reports</h1>
          <hr></hr>
        </div>
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