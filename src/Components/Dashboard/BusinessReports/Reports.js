import React, { Component } from "react";
import ReportByBreed from "./ReportByBreed";
import HealthVsMilkCharts from "./HealthVsMilkCharts";
import { connect } from "react-redux";

class Reports extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Reports</h1>
          <hr />
        </div>

        {/* <div className="business-reports">
          <ReportByBreed id={this.props.id} />
        </div> */}
        <HealthVsMilkCharts id={this.props.id} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    id: reduxState.user.id
  };
}

export default connect(mapStateToProps)(Reports);
