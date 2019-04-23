import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
// import Login from "./features/Login/Login";
// import SignUp from "./features/SignUp/SignUp";
// import SignUp from "./../src/features/SignUp";
// import Log from "./features/Log/Log";
// import StudentLog from "./features/StudentLog";
// import StudentSignUp from "./features/StudentSignUp";
import TopNavigation from "./components/topNavigation";
import SideNavigation from "./components/sideNavigation";
import Routes from "./components/Routes";
import Login from "./features/Login";
import Log from "./features/Log";
import SignUp from "./features/StudentSignUp";
import DashboardPage from "./components/pages/DashboardPage";
// import Footer from "./components/Footer";
class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={SignUp} />
					<Route
						path="/dashboard"
						render={() => {
							return (
								<React.Fragment>
									<TopNavigation />
									<SideNavigation />
									<main id="content" className="p-5">
										<Routes />
									</main>
								</React.Fragment>
							);
						}}
					/>
					<Route />
				</Switch>

				{/* <header className="App-header"> */}
				{/* <SignUp /> */}
				{/* <Login /> */}
				{/* </header> */}
				{/* <Footer /> */}
			</div>
		);
	}
}

export default App;
