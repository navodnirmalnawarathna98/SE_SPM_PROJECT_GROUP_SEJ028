import React from 'react';
import "./editbloodrequest.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";


const EditBloodRequest= ()=>{

    console.log("-----------------------",useParams());
    
    const {id} = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact_no, setContact_no] = useState("");
    const [blood_group, setBloodgroup] = useState("");
    const [blood_amount, setBloodamount] = useState("");
    const [due_date, setDuedate] = useState("");
    const [description, setDescription] = useState("");
    
   
    
    function sendUpData(e){
       e.preventDefault();
       alert("Update Successfully");
       
       const newBloodreq={
        name,
        email,
        contact_no,
        blood_group,
        blood_amount,
        due_date,
        description
       }
    
    axios.put(`http://localhost:8070/addRequest/updateBloodReq/${id}`, newBloodreq)
    .then(()=>{
    
       
     }).catch((err)=>{
       alert(err)
       console.log(err);
    })
       window.location.href = "";
    }
    
    useEffect(() => {
       axios.get(`http://localhost:8070/addRequest/getBloodReq/${id}`).then(res => {
         
           console.log("navodddddddddddddd",res.data);
        
           setName(res.data.insbloodreq.name);
           setEmail(res.data.insbloodreq.email);
           setContact_no(res.data.insbloodreq.contact_no);
           setBloodgroup(res.data.insbloodreq.blood_group);
           setBloodamount(res.data.insbloodreq.blood_amount);
           setDuedate(res.data.insbloodreq.due_date);
           setDescription(res.data.insbloodreq.description);
           
          
           })		
       }, [])
    
       function closeReq(){
        window.location.href = "/reqtable";     
     }
    
    
       return(
            <div>
            <form>
            <div class="wrapper22">
                <div class="title22">
                    Add Blood Request Form
                </div>
                <div class="form22">
                    <div class="inputfield">
                        <label>Institution Name</label>
                        <input type="text" name="name" class="input" 
                        title="Please enter on alphabets only"
                        value={name} onChange={(e)=>{setName(e.target.value);}} 
                        required
                        />
                    
                        
                    </div>
                    <div class="inputfield">
                        <label>Email</label>
                        <input type="email"
                        title="characters@characters.domain eg:- bloodbank@gmail.com"
                        name="email" class="input"
                        value={email} onChange={(e)=>{setEmail(e.target.value);}} 
                        required
                        />
                    </div>
                    <div class="inputfield">
                        <label>Contact No</label>
                        <input type="number" name="contact_no" pattern="[0-9]{11}" 
                        title="the contact number must be 10 numbers"
                        class="input" 
                        value={contact_no} onChange={(e)=>{setContact_no(e.target.value);}} 
                        required
                        />
                    </div>
                    <div class="inputfield">
                    <label>Blood Group</label>
                    <div class="custom_select">
                        <select value={blood_group} onChange={(e)=>{setBloodgroup(e.target.value);}} >
                            <option value="">Select</option>
                            <option value="A+">Blood Group A</option>
                            <option value="B+">Blood Group B</option>
                            <option value="B+">Blood Group O</option>
                            <option value="B+">Blood Group AB</option>
                        </select>
                    </div>
                    </div> 
                    <div class="inputfield">
                        <label>Blood Amount</label>
                        <input type="number" name="blood_amount"
                        title="You can only request between 1000 - 3000ml blood amounts"
                        min={1000} max={3000} class="input" 
                        value={blood_amount}
                        onChange={(e)=>{setBloodamount(e.target.value);}} 
                        required
                        />
                    </div>
                    <div class="inputfield">
                        <label>Due Date</label>
                        <input type="text" name="due_date" class="input" readonly="readonly"
                        title="You can only read this page"
                        value={due_date}
                        onChange={(e)=>{setBloodamount(e.target.value);}}
                        required
                        />
                    </div>

                    <div class="inputfield">
                    <label>Description</label>
                    <textarea type="text" name="description" class="input"
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value);}} 
                    ></textarea>
                    </div>

                    <div class="modal-footer">
                    <button  type='submit' class="btn34"   onClick= {sendUpData}>Update</button>
                    <button class="btn35"  onClick = {closeReq}>Cancel</button>
                   
                    </div>
                </div>
            </div>
            </form> 
            </div>
        )
    }
    
    export default EditBloodRequest;