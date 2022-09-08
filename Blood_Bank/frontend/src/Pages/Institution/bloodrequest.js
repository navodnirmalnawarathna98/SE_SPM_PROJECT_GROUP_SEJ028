import React,{ useState } from 'react';
import axios from "axios";
import "./bloodrequest.css";


const bloodrequest = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact_no, setContact_no] = useState("");
    const [blood_group, setBloodGroup] = useState("");
    const [blood_amount, setBloodAmount] = useState("");
    const [due_date, setDuedate] = useState("");
    const [description, setDescription] = useState("");


    function sendData(e){
        //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        e.preventDefault(); 
        const newBloodRequest={
                 
            name,
            email,
            contact_no,
            blood_group,
            blood_amount,
            description



              }
              axios.post("http://localhost:8070/addbloodreq",newBloodRequest).then(()=>{
                 alert("New Blood Request Created");
              }).catch((err)=>{
                 alert(err.message);
              })
              window.location.href = "";
     }
     
     function closeReq(){
        window.location.href = "";     
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
                    <label>Full Name</label>
                    <input type="text" name="name" class="input" onChange={(e)=>{setName(e.target.value);}} required
                    />
                </div>
                <div class="inputfield">
                    <label>Email</label>
                    <input type="email" name="email" class="input" onChange={(e)=>{setEmail(e.target.value);}} required
                
                    />
                </div>
                <div class="inputfield">
                    <label>Contact No</label>
                    <input type="number" name="contact_no" class="input" onChange={(e)=>{setContact_no(e.target.value);}} required
                
                    />
                </div>
                <div class="inputfield">
                <label>Blood Group</label>
                <div class="custom_select">
                    <select onChange={(e)=>{setBloodGroup(e.target.value);}} >
                        <option value="">Select</option>
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                    </select>
                </div>
                </div> 
                <div class="inputfield">
                    <label>Blood Amount</label>
                    <input type="number" name="blood_amount" class="input" 
                    onChange={(e)=>{setBloodAmount(e.target.value);}} required
                    />
                </div>
                <div class="inputfield">
                    <label>Due Date</label>
                    <input type="date" name="due_date" class="input" 
                   onChange={(e)=>{setDuedate(e.target.value);}} required
                    />
                </div>

                <div class="inputfield">
                <label>Description</label>
                <textarea type="text" name="description" class="input"
                 onChange={(e)=>{setDescription(e.target.value);}} required
                ></textarea>
                </div>

                <div class="modal-footer">
                <a href="/" type='submit' class="btn33">Submit</a>
                 <a  onClick={closeReq} class="btn33">Cancel</a>
                </div>
            </div>
        </div>
        </form> 
    </div>
  )
}

export default bloodrequest