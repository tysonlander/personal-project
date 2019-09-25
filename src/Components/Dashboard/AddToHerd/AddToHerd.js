import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateNewCow } from "../../../redux/cowReducer";

class AddToHerd extends Component {
  constructor() {
    super();
    this.state = {
      rfid: "",
      breed: "",
      gender: "",
      purchasePrice: "",
      location: ""
    };
  }

  handleAddCow = e => {
    e.preventDefault();
    const { rfid, breed, gender, purchasePrice, location } = this.state;
    const { ownerId } = this.props;
    axios
      .post("/api/addCow", {
        ownerId,
        rfid,
        breed,
        gender,
        purchasePrice,
        location
      })
      .then(res => {
        this.props.updateNewCow(res.data[0]);
        this.props.history.push("/dashboard/AddToHerdConfirm");
      })
      .catch(err => {
        console.log(err);
      });
    e.target.rfid.value = "";
    e.target.breed.value = "";
    e.target.gender.value = "";
    e.target.purchasePrice.value = "";
    e.target.location.value = "";
  };

  handleCowDetailUpdate = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCancel = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    console.log(this.state.rfid);
    return (
      <section className='add-herd-start'>
        <div className="page-header">
          <h1>Add To Herd</h1>
          <hr />
        </div>

        <div className='add-to-herd-block1'>
          <img
            className="cow-circle-picture"
            src="https://moolapics.s3-us-west-1.amazonaws.com/sunnycow.jpg"
            alt=""
          />
          <h1>Put 'em in the pasture.</h1>
          <form onSubmit={this.handleAddCow}>
            <input
              type="number"
              name="rfid"
              placeholder="rfid"
              onChange={this.handleCowDetailUpdate}
            />
            <br />
            <select
              name="breed"
              placeholder="select breed"
              onChange={this.handleCowDetailUpdate}
            >
              <option>Select Breed</option>
              <option value="Chocolate">Chocolate</option>
              <option value="Strawberry">Strawberry</option>
            </select>
            <br />
            <select name="gender" onChange={this.handleCowDetailUpdate}>
              <option>Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
            <br />
            <input
              type="number"
              name="purchasePrice"
              placeholder="purchase price"
              onChange={this.handleCowDetailUpdate}
            />
            <br />
            <input
              type="text"
              name="location"
              placeholder="location"
              onChange={this.handleCowDetailUpdate}
            />

            <hr />
            <button
              className='butn-two-secondary'
              type="reset"
              value="Reset"
              onClick={this.handleCancel}>
              Cancel
          </button>
            <button className='butn-two-primary'>Shut the Gate</button>
          </form>
        </div>
      </section >
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    ownerId: reduxState.user.id
  };
}

export default connect(mapStateToProps, { updateNewCow })(AddToHerd);
