import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios';
import CowTableRow from './CowTableRow'
import { updateLoading } from '../../../redux/loadingReducer'


class HerdManagement extends Component {
  constructor() {
    super();
    this.state = {
      cows: []
    }
  }

  componentDidMount() {
    this.handleRopeCows()
  }

  handleRopeCows = () => {
    axios.post('/api/cows/', { id: this.props.id })
      .then(res => {
        this.setState({
          cows: res.data
        })
      })
  }



  render() {
    let cowList = this.state.cows.map((element, index) => {
      return (
        <CowTableRow cowItem={element}
          key={index}
          handleRopeCows={this.handleRopeCows}
        />
      )
    })

    console.log(this.state.cows)
    return (
      <div className='manage-herd'>
        {this.props.loadStatus ? (<div><img src='https://cdn.dribbble.com/users/92954/screenshots/4006601/4-cow-3.gif' alt='' />></div>) : (<div></div>)}
        <div className='page-header'>
          <h1>Manage Herd</h1>
          <hr></hr>
        </div>

        <button className='butn-two-primary'><Link to='/dashboard/AddToHerd'>Add Cow</Link></button>
        <br />

        <table>
          <thead>
            <tr className='table-header'>
              <th className='column1'>RFID</th>
              <th className='column2'>Breed</th>
              <th className='column3'>Gender</th>
              <th className='column4'>Purchase Price</th>
              <th className='column5'>Location</th>
              <th className='column6'>Action</th>
            </tr>
          </thead>
          <tbody>
            {cowList}
          </tbody>
        </table>
        <br />
        <hr />
        <div className='center-aligned'>
          <button className='butn-two-secondary'><Link to='/dashboard'>Back to Dashboard</Link></button>
          <button className='butn-two-primary'><Link to='/dashboard/AddToHerd'>Add Cow</Link></button>
        </div>

      </div>

    )
  }
}

function mapStateToProps(reduxState) {
  return {
    id: reduxState.user.id,
    loadStatus: reduxState.loading.loadStatus
  }
}

export default connect(mapStateToProps, { updateLoading })(HerdManagement)

