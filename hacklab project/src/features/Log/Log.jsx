import React, { Component } from "react";
import AdminImage from "../../assets/admin.jpg";
import UserImage from "../../assets/student.png";
import "./styles/Log.css";

export default class Log extends Component {
  render() {
    return (
      <div>
        <p className="headingStyle">Grade Checker</p>
        <p className="secondHeading">
          Hi there! Please enter an autheniction type
        </p>
        <div className="innerDiv">
          <div className="picDiv">
            {" "}
            <img src={AdminImage} alt="log-img" />
            <button className="button">
              {" "}
              <p className="buttonText">Log in as an Admin </p>
            </button>
          </div>
          <div>
            <img src={UserImage} alt="log-img" />
            <button className="button">
              {" "}
              <p className="buttonText">Log in as an Student </p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
