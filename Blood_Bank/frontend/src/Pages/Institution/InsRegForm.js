import React, { useState } from 'react';
import axios from "axios"; 
import "./insRegForm.css"

const InsRegForm = () => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [contact_no, setContact_no] = useState("");
    const [institution_type, setInsType] = useState("");
    const [reg_date, setRegDate] = useState("");
    const [province, setProvince] = useState("");
    const [distric, setDistric] = useState("");

    function sendData(e) {

      //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
      e.preventDefault();
      const newInstitution = {
          name,
          address,
          email,
          contact_no,
          institution_type,
          reg_date,
          province,
          distric
      }
      axios.post("http://localhost:8070/instreg/insreg", newInstitution).then(() => {
          alert("New Institution Created");
      }).catch((err) => {
          alert(err.message);
      })
      window.location.href = "";
  }






  return (
    <div>
      <form onSubmit={sendData}>
        <div class="wrapper1">
          <div class="title2">
            Register Form
          </div>
          <div class="form3">
            <div class="inputfield">
              <label>Institution Name</label>
              <input type="text" name="name" class="input"
              onChange={(e) => {setName(e.target.value); }}
              required />
            </div>


            <div class="inputfield">
              <label>Address</label>
              <input type="text" name="address" class="input" 
               onChange={(e) => {setAddress(e.target.value); }}
              required
              />
            </div>


            <div class="inputfield">
              <label>Email</label>
              <input type="email" name="email" class="input" onChange={(e) => { setEmail(e.target.value); }}
              required />
            </div>

            <div class="inputfield">
              <label>Contact No</label>
              <input type="number" name="contact_no" class="input" onChange={(e) => { setContact_no(e.target.value); }}
              required/>
            </div>

            <div class="inputfield">
              <label>Institution Type</label>
              <div class="custom_select">
                <select onChange={(e) => {setInsType(e.target.value); }}>
                  <option value="">Select</option>
                  <option value="Warehouse Manager">Goverment</option>
                  <option value="Store Manager">Private</option>
                </select>
              </div>
            </div>


            <div class="inputfield">
              <label>Date Of Registration</label>
              <input type="date" name="editusername" class="input" 
              onChange={(e) => {setRegDate(e.target.value); }} />
            </div>

            <div class="inputfield">
              <label>Residential  Details</label>
              <u />
            </div>

            <div class="inputfield">
              <label>Province</label>
              <div class="custom_select">
                <select  onChange={(e) => {setProvince(e.target.value); }}>
                  <option value="">Select</option>
                  <option value="central_province">Central Province</option>
                  <option value="eastern_province">Eastern Province</option>
                  <option value="northern_province">Northern Province</option>
                  <option value="southern_province">Southern Province</option>
                  <option value="western_province">Western Province</option>
                  <option value="north_western_province">North Western Province</option>
                  <option value="north_central_province">North Central Province</option>
                  <option value="uva_province">Uva Province</option>
                  <option value="sabaragamuwa_province">Sabaragamuwa Province</option>
                </select>
              </div>
            </div>

            <div class="inputfield">
              <label>Distric</label>
              <div class="custom_select">
                <select  onChange={(e) => {setDistric(e.target.value); }}>
                  <option value="">Select</option>
                  <option value="Colombo">Colombo</option>
                  <option value="Gampaha">Gampaha</option>
                  <option value="Kalutara">Kalutara</option>
                  <option value="Kandy">Kandy</option>
                  <option value="Matale">Matale</option>
                  <option value="Galle"> Galle</option>
                  <option value="Matara">Matara</option>
                  <option value="Hambantota">Hambantota</option>
                  <option value="Jaffna">Jaffna</option>
                  <option value="Kilinochchi">Kilinochchi</option>
                  <option value="Mannar">Mannar</option>
                  <option value="Vavuniya">Vavuniya</option>
                  <option value="Mullaitivu">Mullaitivu</option>
                  <option value="Batticaloa">Batticaloa</option>
                  <option value="Trincomalee">Trincomalee</option>
                  <option value="Anuradhapura">Anuradhapura</option>
                  <option value="Polonnaruwa">Polonnaruwa</option>
                  <option value="Moneragala">Moneragala</option>
                </select>
              </div>
            </div>

            <div class="modal-footer">
              <button type='submit' class="btn4">Submiit</button>
              <button  class="btn4">Cancel</button>
              
            </div>
          </div>
        </div>

      </form>
    </div>
  )
}

export default InsRegForm