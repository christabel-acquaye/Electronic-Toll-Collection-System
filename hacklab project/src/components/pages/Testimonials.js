import React, { useState, useEffect } from "react";
import {
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBTable,
	MDBTableHead,
	MDBTableBody,
	MDBListGroup,
	MDBListGroupItem,
	MDBBadge,
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBModalFooter,
	MDBBtn,
	MDBIcon
} from "mdbreact";

export default () => {
	const [students, setStudents] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setStudents([
			{
				id: "klsjdf-3jksndkf-8rhnwof-293dfs",
				image: "https://mdbootstrap.com/img/Others/documentation/img%20(145)-mini.jpg",
				firstName: "Eunice",
				lastName: "Aboagye",
				dateOfBirth: "20/07/2004",
				currentLevel: 100,
				admissionYear: 2014
			}
		]);
	}, []);

	return (
		<div>
			<h1>Students</h1>
			<MDBRow className="mt-5">
				<MDBCol md="8">
					<MDBCard>
						<MDBCardBody>
							<MDBTable hover>
								<MDBTableHead>
									<tr>
										<th>Image</th>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Date of Birth</th>
										<th>Current Level</th>
										<th>Admission Year</th>
									</tr>
								</MDBTableHead>
								<MDBTableBody>
									{students.map(student => (
										<tr key={student.id} onClick={() => setIsOpen(true)}>
											<td>
												<img
													src={student.image}
													alt=""
													className="rounded-circle"
													style={{ width: 40, height: 40 }}
												/>
											</td>
											<td>{student.firstName}</td>
											<td>{student.lastName}</td>
											<td>{student.dateOfBirth}</td>
											<td>{student.currentLevel}</td>
											<td>{student.admissionYear}</td>
										</tr>
									))}
								</MDBTableBody>
							</MDBTable>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
				<MDBCol md="4">
					<MDBCard>
						<MDBCardBody>
							<p className="h5">Quick Details</p>
							<MDBListGroup>
								<MDBListGroupItem className="d-flex justify-content-between align-items-center border border-top-0 border-left-0 border-right-0 flex-d">
									Number of Students
									<MDBBadge color="primary" pill>
										{students.length}
									</MDBBadge>
								</MDBListGroupItem>
							</MDBListGroup>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
			<MDBModal
				cascading
				className="modal-avatar"
				isOpen={isOpen}
				toggle={() => setIsOpen(!isOpen)}
			>
				<MDBModalHeader className="mx-auto">
					<img
						src="https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg"
						alt="avatar"
						className="rounded-circle img-responsive"
					/>
				</MDBModalHeader>
				<MDBModalBody className="mb-1">
					<div className="text-center mb-3">
						<h5 className="mt-1 mb-2">Maria Doe</h5>
						<h5 className="h6">mariadoe@gmail.com</h5>
					</div>
					<div className="mb-5">
						<MDBRow>
							<p className="">JUNIOR HIGH</p>
							<MDBCol>
								<p>Creator Prep and JHS</p>
							</MDBCol>
						</MDBRow>
						<MDBRow>
							<MDBCol>
								<div>
									<select className="browser-default custom-select">
										<option>Year</option>
										<option value="1">2014</option>
										<option value="2">2015</option>
										<option value="3">2016</option>
									</select>
								</div>
							</MDBCol>
							<MDBCol>
								<div>
									<select className="browser-default custom-select">
										<option>Term</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
									</select>
								</div>
							</MDBCol>
						</MDBRow>
					</div>

					<div className="mb-5">
						<MDBRow>
							<p className="">SENIOR HIGH</p>
							<MDBCol>
								<p>Holy CHild School</p>
							</MDBCol>
						</MDBRow>
						<MDBRow>
							<MDBCol>
								<div>
									<select className="browser-default custom-select">
										<option>Year</option>
										<option value="1">2014</option>
										<option value="2">2015</option>
										<option value="3">2016</option>
									</select>
								</div>
							</MDBCol>
							<MDBCol>
								<div>
									<select className="browser-default custom-select">
										<option>Term</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
									</select>
								</div>
							</MDBCol>
						</MDBRow>
					</div>

					<div className="mb-5">
						<MDBRow className="">
							<p className="">TERTIARY</p>
							<MDBCol>
								<p>KNUST</p>
							</MDBCol>
						</MDBRow>
						<MDBRow>
							<MDBCol>
								<div>
									<select className="browser-default custom-select">
										<option>Year</option>
										<option value="1">2014</option>
										<option value="2">2015</option>
										<option value="3">2016</option>
									</select>
								</div>
							</MDBCol>
							<MDBCol>
								<div>
									<select className="browser-default custom-select">
										<option>Semester</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
									</select>
								</div>
							</MDBCol>
						</MDBRow>
					</div>
				</MDBModalBody>
				<MDBModalFooter className="justify-content-center">
					<MDBBtn color="cyan" onClick={() => setIsOpen(!isOpen)}>
						Close
						<MDBIcon icon="sign-in-alt" className="ml-2" />
					</MDBBtn>
				</MDBModalFooter>
			</MDBModal>
		</div>
	);
};
