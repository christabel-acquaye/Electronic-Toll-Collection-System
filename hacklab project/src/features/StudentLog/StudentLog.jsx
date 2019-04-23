import React, { Component } from "react";
import BackImage from "../../assets/back.jpg";
// import Paper from "@material-ui/core/Paper/Paper";

export default class StudentLog extends Component {
  render() {
    return (
      <div className="divStyle">
        <div className="image">{/* <img src={BackImage} /> */}</div>
        <div className="card">
          <p className="headingStyle">Grade Checker</p>
          <p className="secondHeading">Hi there! Please enter login details</p>
          {/* <form> */}
          <h3>Email</h3>
          <input
            className="textField"
            type="text"
            id="Email"
            name="Email"
            placeholder=""
          />
          <h3>Password</h3>
          <input
            className="textField"
            type="password"
            id="pass"
            name="pasword"
            placeholder=""
          />
          {/* </form> */}
          <br />
          <br />
          <br />
          <br />
          <button className="button">
            {" "}
            <p className="buttonText">Log in as an Student </p>
          </button>
          <p className="orStyle">OR</p>

          <button className="button">
            {" "}
            <p className="buttonText">Sign Up as an Student </p>
          </button>
        </div>
      </div>
    );
  }
}
