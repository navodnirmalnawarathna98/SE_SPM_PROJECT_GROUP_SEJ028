import React, { useState } from 'react';
import axios from "axios";
import "./bloodrequest.css";


const Bloodrequest = () => {

 

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact_no, setContact_no] = useState("");
    const [blood_group, setBloodgroup] = useState("");
    const [blood_amount, setBloodamount] = useState("");
    const [due_date, setDuedate] = useState("");
    const [description, setDescription] = useState("");


    function sendData(e) {

        //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        e.preventDefault();
        const newBloodRequest = {
            name,
            email,
            contact_no,
            blood_group,
            blood_amount,
            due_date,
            description
        }
        axios.post("http://localhost:8070/addRequest/addbloodreq", newBloodRequest).then(() => {
            alert("New Blood Request Created");
        }).catch((err) => {
            alert(err.message);
        })
        window.location.href = "/reqtable";
    }

    function closeReq() {
        window.location.href = "/reqtable";
    }

    return (
        <div>
            <form onSubmit={sendData}>
                <div class="wrapper22">
                    <div class="title22">
                        Add Blood Request Form
                    </div>
                    <div class="form22">
                        <div class="inputfield">
                            <label>Institution Name</label>
                            <input type="text" name="name" class="input"
                                pattern="[A-Za-z\s]{2,30}" title="The  name must contain letters only"
                                placeholder='enter institution name' onChange={(e) => { setName(e.target.value); }}
                                required
                            />
                        </div>
                        <div class="inputfield">
                            <label>Email</label>
                            <input type="email"
                                title="characters@characters.domain eg:- bloodbank@gmail.com"
                                name="email" class="input" placeholder='enter institution email' onChange={(e) => { setEmail(e.target.value); }}
                                required
                            />
                        </div>
                        <div class="inputfield">
                            <label>Contact No</label>
                            <input type="text" name="contact_no" 
                                pattern="[0-9]{11}" title="Enter valid contact number (ex - 94757713501)"
                                class="input" placeholder='enter institution contact number' onChange={(e) => { setContact_no(e.target.value); }}
                                required
                            />
                        </div>
                        <div class="inputfield">
                            <label>Blood Group</label>
                            <div class="custom_select">
                                <select onChange={(e) => {setBloodgroup(e.target.value); }} >
                                    <option value="">Select</option>
                                    <option value="A+">Blood Group A+</option>
                                    <option value="B+">Blood Group B+</option>
                                    <option value="AB+">Blood Group AB+</option>
                                    <option value="O+">Blood Group O+</option>
                                    <option value="A-">Blood Group A-</option>
                                    <option value="B-">Blood Group B-</option>
                                    <option value="AB-">Blood Group AB-</option>
                                    <option value="O-">Blood Group O-</option>
                                </select>
                            </div>
                        </div>
                        <div class="inputfield">
                            <label>Blood Amount</label>
                            <input type="number" name="blood_amount"
                                title="You can only request between 1000 - 3000ml blood amounts"
                                min={1000} max={3000} class="input" placeholder='enter blood amount (ml)'
                                onChange={(e) => { setBloodamount(e.target.value); }}
                                required
                            />
                        </div>
                        <div class="inputfield">
                            <label>Due Date</label>
                            <input type="date" name="due_date" class="input"
                                onChange={(e) => { setDuedate(e.target.value); }}
                                required
                            />
                        </div>

                        <div class="inputfield">
                            <label>Description</label>
                            <textarea type="text" name="description" class="input"
                                onChange={(e) => { setDescription(e.target.value); }}
                                required
                            ></textarea>
                        </div>

                        <div class="modal-footer">
                            <button type='submit' class="btn33" >submit</button>
                            <a onClick={closeReq} class="btn33">Cancel</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Bloodrequest