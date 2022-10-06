import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./bloodreport.css"


const Bloodreport = () => {

    //npm i react-to-print
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <button title="you can get pdf" class="btn233" onClick={handlePrint} type="submit">Get PDF</button>
            <div ref={componentRef}>
                <div class="nova">
                    <div class="container22 ">
                        <div class="row22">
                            <div class="col-md-12">
                                <div class="text-center lh-1 mb-2">
                                    <h6 class="fw-bold">Payslip</h6> <span class="fw-normal">Payment slip for the month of June 2021</span>
                                </div>
                                <div class="d-flex justify-content-end"> <span>Working Branch:ROHINI</span> </div>
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder">EMP Code</span> <small class="ms-3">39124</small> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder">EMP Name</span> <small class="ms-3">Ashok</small> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder">PF No.</span> <small class="ms-3">101523065714</small> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder">NOD</span> <small class="ms-3">28</small> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder">ESI No.</span> <small class="ms-3"></small> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder">Mode of Pay</span> <small class="ms-3">SBI</small> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder">Designation</span> <small class="ms-3">Marketing Staff (MK)</small> </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder">Ac No.</span> <small class="ms-3">*******0701</small> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <table class="mt-4 table table-bordered">
                                        <thead class="bg-dark text-white">
                                            <tr>
                                                <th scope="col">Earnings</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Deductions</th>
                                                <th scope="col">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <th scope="row">WA</th>
                                                <td>120.00 </td>
                                                <td>LOP</td>
                                                <td>0.00</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">CA</th>
                                                <td>0.00 </td>
                                                <td>PT</td>
                                                <td>0.00</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">CCA</th>
                                                <td>0.00 </td>
                                                <td>SPL. Deduction</td>
                                                <td>500.00</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">MA</th>
                                                <td>3000.00</td>
                                                <td>EWF</td>
                                                <td>0.00</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Sales Incentive</th>
                                                <td>0.00</td>
                                                <td>CD</td>
                                                <td>0.00</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Leave Encashment</th>
                                                <td>0.00</td>
                                                <td colspan="2"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="row">
                                    <div class="col-md-4"> <br /> <span class="fw-bold">Net Pay : 24528.00</span> </div>
                                    <div class="border col-md-8">
                                        <div class="d-flex flex-column"> <span>In Words</span> <span>Twenty Five thousand nine hundred seventy only</span> </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <div class="d-flex flex-column mt-2"> <span class="fw-bolder">For Kalyan Jewellers</span> <span class="mt-4">Authorised Signatory</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bloodreport;