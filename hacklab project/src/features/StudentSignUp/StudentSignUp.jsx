import React, { Component } from "react";
import BackImage from "../../assets/back.jpg";
// import Paper from "@material-ui/core/Paper/Paper";

export default class StudentSignUp extends Component {
	render() {
		return (
			<div className="divStyle">
				<div className="image">{/* <img src={BackImage} /> */}</div>
				<div className="card">
					<p className="headingStyle">Grade Checker</p>
					<p className="secondHeading">Hi there! Please enter signup details</p>
					{/* <form> */}

					<h3>First Name</h3>
					<input
						className="textField"
						type="text"
						id="fname"
						name="first name"
						placeholder=""
					/>

					<h3>Last Name</h3>
					<input
						className="textField"
						type="text"
						id="lname"
						name="last name"
						placeholder=""
					/>

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

					<h3>School Code</h3>
					<input
						className="textField"
						type="password"
						id="code"
						name="school_code"
						placeholder=""
					/>
					{/* </form> */}
					<br />
					<br />
					<br />
					<br />
					<button
						className="button"
						onClick={() => this.props.history.push("/dashboard")}
					>
						{" "}
						<p className="buttonText">Sign Up </p>
					</button>
				</div>
			</div>
		);
	}
}
