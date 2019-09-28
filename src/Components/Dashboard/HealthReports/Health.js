import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateFlags } from "../../../redux/healthFlags";
import HerdHealthMetrics from "./HerdHealthMetrics";
import CowsSleepAlert from "./CowsSleepAlert";
import CowsStepAlert from "./CowsStepAlert/CowsStepAlert";
import CowsStressAlert from "./CowsStressAlert/CowsStressAlert";
import CowsTempAlert from "./CowsTempAlert/CowsTempAlert";
import CowsMilkAlert from "./CowsMilkAlert/CowsMilkAlert";
import * as Icon from 'react-feather'

class Health extends Component {
  componentDidMount() {
    this.handleGetFlags();
  }

  handleGetFlags = () => {
    axios
      .post("/api/getHealthFlags", { ownerId: this.props.ownerId })
      .then(res => {
        this.props.updateFlags(res.data[0]);
      })
      .catch(err => console.log(err));
  };

  render() {
    let date = "2019-05-31";
    return (
      <div className='health-alerts'>
        <div className="page-header">
          <h1>Health</h1>
          <hr />
        </div>
        <div className='row-a'>
          <Icon.Activity size={100} stroke='#f88379' className='heart-icon' />
        </div>
        {/* <img src='https://moolapics.s3-us-west-1.amazonaws.com/nosepicker.jpg' alt='' /> */}
        <HerdHealthMetrics />
        <CowsSleepAlert ydaDate={date} />
        <CowsStepAlert ydaDate={date} />
        <CowsStressAlert ydaDate={date} />
        <CowsTempAlert ydaDate={date} />
        <CowsMilkAlert ydaDate={date} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    ownerId: reduxState.user.id,
    milk: reduxState.healthFlags.milk,
    sleep: reduxState.healthFlags.sleep,
    steps: reduxState.healthFlags.steps,
    stress: reduxState.healthFlags.stress,
    temp: reduxState.healthFlags.temp
  };
}

export default connect(
  mapStateToProps,
  { updateFlags }
)(Health);
