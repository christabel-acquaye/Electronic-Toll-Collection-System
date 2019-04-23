import React, { useState, useEffect } from "react";
import {
	MDBRow,
	MDBCol,
	MDBView,
	MDBCard,
	MDBCardBody,
	MDBTable,
	MDBTableHead,
	MDBTableBody
} from "mdbreact";

const TablesPage = () => {
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
		<>
			<MDBRow>
				<MDBCol md="12">
					<MDBCard className="mt-5">
						<MDBView className="gradient-card-header blue darken-2">
							<h4 className="h4-responsive text-white">
								Select a student to view his testimonial
							</h4>
						</MDBView>
						<MDBCardBody>
							<h3 className="mt-5 text-left">
								<strong />
							</h3>

							<MDBTable>
								<MDBTableHead>
									<tr>
										<th>Image</th>
										<th>First</th>
										<th>Last</th>
										<th>Date of birth</th>
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
										</tr>
									))}
								</MDBTableBody>
							</MDBTable>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</>
	);
};

export default TablesPage;
