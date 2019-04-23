import React from "react";
import logo from "./../assets/avatar1.jpg";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";

const TopNavigation = () => {
	return (
		<div className="sidebar-fixed position-fixed">
			<a href="#!" className="logo-wrapper waves-effect">
				<img alt="MDB React Logo" className="img-fluid" src={logo} />
			</a>
			<MDBListGroup className="list-group-flush">
				<NavLink exact={true} to="/dashboard" activeClassName="activeClass">
					<MDBListGroupItem>
						<MDBIcon icon="chart-pie" className="mr-3" />
						Dashboard
					</MDBListGroupItem>
				</NavLink>
				<NavLink to="/dashboard/profile" activeClassName="activeClass">
					<MDBListGroupItem>
						<MDBIcon icon="user" className="mr-3" />
						Profile
					</MDBListGroupItem>
				</NavLink>
				<NavLink to="/dashboard/students" activeClassName="activeClass">
					<MDBListGroupItem>
						<MDBIcon icon="user" className="mr-3" />
						Results
					</MDBListGroupItem>
				</NavLink>
				<NavLink to="/dashboard/tables" activeClassName="activeClass">
					<MDBListGroupItem>
						<MDBIcon icon="table" className="mr-3" />
						Testimoninal
					</MDBListGroupItem>
				</NavLink>
				<NavLink to="/dashboard/testimonials" activeClassName="activeClass">
					<MDBListGroupItem>
						{/* <MDBIcon icon="map" className="mr-3" /> */}
					</MDBListGroupItem>
				</NavLink>
				<NavLink to="/dashboard/404" activeClassName="activeClass">
					<MDBListGroupItem>
						{/* <MDBIcon icon="exclamation" className="mr-3" /> */}
					</MDBListGroupItem>
				</NavLink>
			</MDBListGroup>
		</div>
	);
};

export default TopNavigation;
