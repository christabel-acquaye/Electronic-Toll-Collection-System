import React, { Component } from "react";
import UserImage from "./avatar1.jpg";
import "./styles/SignUp.css";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="boxed">
          <h1 className="heading">Grade Testimonial</h1>
          <h3 className="heading_Next">
            Hi there! Please Login to your account
          </h3>
          <img src={UserImage} alt="Logo" className="image" />
          <br />
          <h3> Student First Name</h3>
          <input
            className="textField"
            type="text"
            id="fname"
            name="First Name"
            placeholder=""
          />
          <br />

          <h3> =Student Last Name</h3>
          <input
            className="textField"
            type="text"
            id="lname"
            name="Last Name"
            placeholder=""
          />
          <br />

          <h3>Student Email</h3>
          <input
            className="textField"
            type="email"
            id="email"
            name="Email"
            placeholder=""
          />

          <h3>Student Index Number</h3>
          <input
            className="textField"
            type="text"
            id="schoolCode"
            name="code"
            placeholder=""
          />
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
