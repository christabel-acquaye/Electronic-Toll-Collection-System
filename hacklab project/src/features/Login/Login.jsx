import React, { Component } from "react";
// import UserImage from "./../../assets/back.png";
import "./styles/Login.css";

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="boxed">
          <h1 className="heading">Grade Testimonial</h1>
          <h3 className="heading_Next">
            Hi there! Please Login to your account
          </h3>
          {/* <img src={} alt="Logo" className="image" /> */}
          <br />
          <h3>First Name</h3>
          <input
            className="textField"
            type="text"
            id="user_name"
            name="user_name"
            placeholder=""
          />
          <br />
          <h3>Password</h3>
          <input
            className="textField"
            type="password"
            id="user_password"
            name="password"
            placeholder=""
          />

          <button
            // onPress={onPressLearnMore}
            title="Submit"
            color="#841584"
            className="button"
            // accessibilityLabel="This submits the info needed for authentication"
          />
        </div>
      </div>
    );
  }
}
