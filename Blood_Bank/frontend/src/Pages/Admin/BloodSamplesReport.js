import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { useReactToPrint } from "react-to-print";
import axios from 'axios'

import logo from "../../images/logo.png"
import signature from "../../images/signature.png"
import "./admin-report-style.css"


const BloodSamplesReport = () => {

	// get all samples  
	const [bloodSamples, setBloodSamples] = useState({});

	const getAllBloodSamples = async () => {
		const config = {
			headers: { "Content-Type": "application/json", },
		};
		try {
			const res = await axios.get(`http://localhost:8070/addbloodsamples/`, config);
			setBloodSamples(res.data);
			console.log(res.data);
		} catch (err) {
			console.error("error", err);
			console.log("Traking ID Wrong");
		}
	};

	useEffect(() => {
		try {
			getAllBloodSamples();
		} catch (err) {
			console.error("error", err);
		}
	}, []);


	//report generate
	//npm i react-to-print
	const componentRef = useRef();
	const Print = useReactToPrint({
		content: () => componentRef.current,
	});


	/* CLOSE BUTTON */

	function closeReq() {
		window.location.href = "/bloodsamples";
	}



	return (
		<div className='zme'>
			<button className='print-button' onClick={Print} type="submit">Print</button>
			<button className='print-cancel' onClick={closeReq}>Cancel</button>
			<div class="R-Report_Invoice" ref={componentRef}>
				<div class="R-wrapper">
					<div class="R-invoice_wrapper">
						<div class="R-header">
							<div class="R-logo_invoice_wrap">
								<div class="R-logo_sec">
									<img className='report-logo' src={logo} alt="code logo" />
									<div class="R-title_wrap">
										<p class="R-title bold">Blood Bank</p>
										<p class="R-sub_title">Privite Limited</p>
									</div>
								</div>
								<div class="R-invoice_sec">
									<p class="R-invoice bold">REPORT</p>
									<p class="R-invoice_no">
										<span class="R-bold">Report</span>
										<span>#3488</span>
									</p>
									<p class="R-date">
										<span class="R-bold">Date</span>
										<span>08/Jan/2022</span>
									</p>
								</div>
							</div>
							<div class="R-bill_total_wrap">
								<div class="R-bill_sec">
									<p>Issued By</p>
									<p class="R-bold R-name">Administration Staff</p>
									<span>
										397, Thalangama North, Battaramulla<br />
										+94 75 771 3501
									</span>
								</div>
								<div class="R-total_wrap">
									<p>Title</p>
									<p class="R-bold R-price">Monthly Blood Samples Report</p>
								</div>
							</div>
						</div>
						<div class="R-body">
							<div class="R-activity-data">

								<table class="R-table R-table-hover">

									<thead>
										<tr>

											<th scope="col">First Name</th>
											<th scope="col">Contact No</th>
											<th scope="col">Address</th>
											<th scope="col">Email</th>
											<th scope="col">NIC No</th>
											<th scope="col">Blood Type</th>
											<th scope="col">Blood Amount</th>
											<th scope="col">Gender</th>

										</tr>
									</thead>

									<tbody>

										{bloodSamples.length > 0 ? (bloodSamples.map((bloodSamples) => (
											<tr>
												<td>{bloodSamples.firstName}</td>
												<td>{bloodSamples.contactNumber}</td>
												<td>{bloodSamples.address}</td>
												<td className='simple'>{bloodSamples.email}</td>
												<td>{bloodSamples.nic}</td>
												<td>{bloodSamples.bloodType}</td>
												<td>{bloodSamples.bloodAmount}</td>
												<td>{bloodSamples.gender}</td>
											</tr>
										))
										) : (
											<h3>No details found</h3>
										)}

									</tbody>

								</table>

							</div>
							<div class="R-paymethod_grandtotal_wrap">
								<div class="R-paymethod_sec">
									<p class="R-bold">signature</p>
									<img className='signature' src={signature} alt="code logo" />
								</div>
							</div>
						</div>
						<div class="R-footer">
							<p>Thank you and Best Wishes</p>
							<div class="R-terms">
								<p class="R-tc R-bold">Terms & Coditions</p>
								<p>By using our website, you accept these terms and conditions in full. accordingly, if you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BloodSamplesReport