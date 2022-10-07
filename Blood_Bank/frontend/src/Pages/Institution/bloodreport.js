import React, { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./bloodreport.css"


const Bloodreport = () => {

    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact_no, setContact_no] = useState("");
    const [blood_group, setBloodgroup] = useState("");
    const [blood_amount, setBloodamount] = useState("");
    const [due_date, setDuedate] = useState("");
    const [description, setDescription] = useState("");
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8070/addRequest/getBloodReq/${id}`).then(res => {
            setName(res.data.insbloodreq.name);
            setEmail(res.data.insbloodreq.email);
            setContact_no(res.data.insbloodreq.contact_no);
            setBloodgroup(res.data.insbloodreq.blood_group);
            setBloodamount(res.data.insbloodreq.blood_amount);
            setDuedate(res.data.insbloodreq.due_date);
            setDescription(res.data.insbloodreq.description);
        })
    }, [])

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate('DATE:-' + date + '/' + month + '/' + year + '  ' + 'TIME :-' + hours + ':' + min + ':' + sec);
    }, []);




    //report generate
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
                                    <br />
                                    <h1 class="fw-bold">Blood Request Details</h1>
                                    <span class="fw-normal">
                                        <h4>
                                            {currentDate}
                                        </h4>
                                    </span>
                                </div>
                                <br />
                                <br />
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div> <span class="fw-bolder"><h4>Institution Name</h4></span> <small class="ms-3"><h3>{name}</h3></small></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4"> <br/> <span class="fw-bold"><h4>Blood Amount</h4> :- {blood_amount}</span> </div>    
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