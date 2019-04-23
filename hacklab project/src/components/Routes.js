import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import Students from "./pages/Students";
import TablesPage from "./pages/TablesPage";
// import MapsPage from "./pages/MapsPage";
import NotFoundPage from "./pages/NotFoundPage";
import TestimonialsPage from "./pages/Testimonials";

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/dashboard" exact component={DashboardPage} />
				{/* <Route path="/dashboard" component={DashboardPage} /> */}
				<Route path="/dashboard/profile" component={ProfilePage} />
				<Route path="/dashboard/students" component={Students} />
				<Route path="/dashboard/tables" component={TablesPage} />
				<Route path="/dashboard/testimonals" component={TestimonialsPage} />
				<Route path="/dashboard/404" component={NotFoundPage} />
			</Switch>
		);
	}
}

export default Routes;
