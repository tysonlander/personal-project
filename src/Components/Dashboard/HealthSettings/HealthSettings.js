import React, { Component } from 'react'
import axios from 'axios'
import { updateFlags } from '../../../redux/healthFlags'
import { connect } from 'react-redux'
import * as Icon from 'react-feather'

class HealthSettings extends Component {
  constructor() {
    super()
    this.state = {
      sleep: '',
      steps: '',
      stress: '',
      temp: '',
      milk: ''
    }
  }

  componentDidMount() {
    this.handleGetHealthFlags()
  }

  handleGetHealthFlags = () => {
    axios
      .post('/api/getHealthFlags', { ownerId: this.props.ownerId })
      .then(res => {
        console.log('response from request:', res.data)
        this.setState({
          sleep: res.data[0].sleep,
          steps: res.data[0].steps,
          stress: res.data[0].stress,
          temp: res.data[0].temp,
          milk: res.data[0].milk
        })
      })
      .catch(err => {
        console.log(err)
      })

  }

  handleAddHealthFlags = (e) => {
    e.preventDefault()
    const { sleep, steps, stress, temp, milk } = this.state
    const { ownerId } = this.props
    axios
      .post('/api/addhealthflag', { ownerId, sleep, steps, stress, temp, milk })
      .then((res) => {
        // this.props.updateNewCow(res.data[0])
        this.props.history.push('/dashboard/HealthSettingConfirm')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleEditHealthFlags = (e) => {
    e.preventDefault()
    const { sleep, steps, stress, temp, milk } = this.state
    const { ownerId } = this.props
    axios
      .put(`/api/edithealthflag/${ownerId}`, { sleep, steps, stress, temp, milk })
      .then((res) => {
        console.log('response from flag api', res.data)
        this.props.updateFlags(res.data)
        this.props.history.push('/dashboard/HealthSettingConfirm')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleHealthFlagInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.state.sleep)
    return (
      <div className='health-settings'>
        <div className='page-header'>
          <h1>Health Settings</h1>
          <hr></hr>
        </div>

        <div className='row-a'>
          <Icon.Heart size={100} fill='#f88379' stroke='none' className='heart-icon' />
          <h3>- Notify me when cow's health levels are outside these parameters -</h3>
        </div>

        <div className='row-b'>
          <div className='box-one'>
            {this.state.sleep === '' ? (
              <div>
                <form onSubmit={this.handleAddHealthFlags}>
                  <div className='health-level-row'>
                    <h4>Sleep is less than :</h4>
                    <input
                      type='number'
                      name='sleep'
                      placeholder='hrs / day'
                      onChange={this.handleHealthFlagInput}
                    />
                  </div>
                  <div className='health-level-row'>
                    <h4>Steps are less than :</h4>
                    <input
                      type='number'
                      name='steps'
                      placeholder='qty / day'
                      onChange={this.handleHealthFlagInput}
                    />
                  </div>
                  <div className='health-level-row'>
                    <h4>Stress is greater than :</h4>
                    <input
                      type='number'
                      name='stress'
                      placeholder='between 1 and 100'
                      onChange={this.handleHealthFlagInput}
                    />
                  </div>
                  <div className='health-level-row'>
                    <h4>Temp is lower than :</h4>
                    <input
                      type='number'
                      name='temp'
                      placeholder='Fahrenheit'
                      onChange={this.handleHealthFlagInput}
                    />
                  </div>
                  <div className='health-level-row'>
                    <h4>Milk is lower than :</h4>
                    <input
                      type='number'
                      name='milk'
                      placeholder='lbs / day'
                      onChange={this.handleHealthFlagInput}
                    />
                  </div>

                  <hr></hr>
                  <div className='center-box'>
                    <button className='butn-two-primary'>Submit</button>
                    <button className='butn-two-secondary' onClick={() => this.props.history.push('/dashboard')}> Back to Dashboard</button>
                  </div>
                </form>
              </div>
            ) : (
                <div>
                  <form onSubmit={this.handleEditHealthFlags}>
                    <div className='health-level-row'>
                      <h4>Sleep is less than :</h4>
                      <input
                        type='number'
                        name='sleep'
                        placeholder={this.state.sleep}
                        onChange={this.handleHealthFlagInput}
                      />
                    </div>
                    <div className='health-level-row'>
                      <h4>Steps are less than :</h4>
                      <input
                        type='number'
                        name='steps'
                        placeholder={this.state.steps}
                        onChange={this.handleHealthFlagInput}
                      />
                    </div>
                    <div className='health-level-row'>
                      <h4>Stress is greater than :</h4>
                      <input
                        type='number'
                        name='stress'
                        placeholder={this.state.stress}
                        onChange={this.handleHealthFlagInput}
                      />
                    </div>
                    <div className='health-level-row'>
                      <h4>Temp is lower than :</h4>
                      <input
                        type='number'
                        name='temp'
                        placeholder={this.state.temp}
                        onChange={this.handleHealthFlagInput}
                      />
                    </div>
                    <div className='health-level-row'>
                      <h4>Milk is lower than :</h4>
                      <input
                        type='number'
                        name='milk'
                        placeholder={this.state.milk}
                        onChange={this.handleHealthFlagInput}
                      />
                    </div>

                    <hr></hr>
                    <div className='center-box'>
                      <button className='butn-two-primary' >Update</button>
                      <button className='butn-two-secondary' onClick={() => this.props.history.push('/dashboard')}> Back to Dashboard</button>
                    </div>
                  </form>
                </div>
              )}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    ownerId: reduxState.user.id
  }
}

export default connect(mapStateToProps, { updateFlags })(HealthSettings)