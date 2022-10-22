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

    let value = blood_amount * 20;

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
        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getFullYear(); //Current Year
        let hours = new Date().getHours(); //Current Hours
        let min = new Date().getMinutes(); //Current Minutes
        let sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate('DATE:-' + date + '/' + month + '/' + year + '  ' + 'TIME :-' + hours + ':' + min + ':' + sec);
    }, []);


    function closeReq() {
        window.location.href = "/reqtable";
    }


    //report generate
    //npm i react-to-print
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });





    return (
        <div>
            <button title="you can get pdf" class="btn233" onClick={handlePrint} type="submit">Get PDF</button>
            <br />
            <button title="you can navigate to the previous page" onClick={closeReq} class="btn233">Back</button>
            <div class="nova-border" ref={componentRef}>
                <div id="invoice-POS">
                    <div id="top">
                        <div class="logo"></div>
                        <div class="info">
                            <h2 class="nn4"><strong>Blood Request Report</strong></h2>
                        </div>
                    </div>
                    <h2 class="nn1">Institution Name :<strong> {name}</strong></h2>
                    <h2 class="nn1">{currentDate}</h2>
                    <div id="mid">
                        <div class="info">
                            <h2 class="nn1">Contact Info</h2>
                            <p class="nn2">
                                Email   : {email} <br></br>
                                Mobile Number : {contact_no}
                            </p>
                        </div>
                    </div>
                    <div id="bot">
                        <div id="table">
                            <table>
                                <tr class="tabletitle">
                                    <td class="item"><h2 class="nn1">Blood Group</h2></td>
                                    <td class="Hours"><h2 class="nn1">Qty</h2></td>
                                    <td class="Rate"><h2 class="nn1">Sub Total</h2></td>
                                </tr>
                                <tr class="service">
                                    <td class="tableitem"><p class="itemtext">{blood_group}</p></td>
                                    <td class="tableitem"><p class="itemtext">{blood_amount}</p></td>
                                    <td class="tableitem"><p class="itemtext">{value}</p></td>
                                </tr>
                                <tr class="service">
                                    <td class="tableitem"><p class="itemtext"></p></td>
                                    <td class="tableitem"><p class="itemtext">Total</p></td>
                                    <td class="tableitem"><p class="itemtext">{value}</p></td>
                                </tr>
                            </table>
                        </div>
                        <div id="legalcopy">
                            <p class="legal"><strong>Terms & Coditions</strong>
                            </p>
                            <p>By using our website, you accept these terms and conditions in full. accordingly,
                                if you disagree with these terms and conditions
                                or any part of these terms and conditions, you must not use our website
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Bloodreport;