import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddCowConfirm extends Component {

  handleBack = () => {
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <section className='add-to-herd-confirmation'>
        <div className='page-header'>
          <h1>Add to Herd</h1>
          <hr></hr>
        </div>
        <div className='block-one'>
          <p >`One {this.props.breed} Cow, RFID {this.props.rfid},  has been added and is now in your {this.props.location}.`
          </p>
          <div className='page-header'>
            <hr></hr>
            <button className='butn-two-primary' onClick={this.handleBack}>Back to Dashboard</button>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    rfid: reduxState.newCow.rfid,
    breed: reduxState.newCow.breed,
    location: reduxState.newCow.location
  }
}

export default connect(mapStateToProps)(AddCowConfirm)