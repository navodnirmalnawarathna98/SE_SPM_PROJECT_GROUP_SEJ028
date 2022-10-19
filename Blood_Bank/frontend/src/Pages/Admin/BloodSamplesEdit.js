import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import "./admin-style.css"

import NavigationBar from './Components/NavigationBar'
import Search from './Components/Search'
import BloodVolumes from './Components/BloodVolumes'

const BloodSamplesEdit = () => {

   const { id } = useParams();
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [contactNumber, setContactNumber] = useState("");
  // const [address, setAddress] = useState("");
  // const [email, setEmail] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");
  // const [nic, setNIC] = useState("");
  // const [weight, setWeight] = useState("");
  // const [bloodType, setBloodType] = useState("");
  // const [bloodAmount, setBloodAmount] = useState("");
  // const [gender, setGender] = useState("");



    const [currentSample, setCurrentSample] = useState({});


    const getSampleData = async (id) => {
      const config = {
          headers: {
              "Content-Type": "application/json",
          },
      };
      try {
          const res = await axios.get(`http://localhost:8070/addbloodsamples/get/${id}`, config);
          setCurrentSample(res.data.bloodSample);
          console.log(res.data.bloodSample);
      } catch (err) {
          console.error("error", err);
          console.log("Traking ID Wrong");
      }
    };


  useEffect(() => {
          
    try {
        getSampleData(id);
        console.log(id);
      }catch (err) {
        console.error("error", err);
      }
  
  
  }, [id]);




  /*  Get Input value & Store in setCurrentPackage */
  
  const handleInputChange = (event) => {
    setCurrentSample({
        ...currentSample,
        [event.target.name]: event.target.value,
    });
  };




    /*  UPDATE DATA */

    const updateData = async (id) => {

      const config = {
          headers: {
              "Content-Type": "application/json",
          },
      };
      
      alert("your sample details successfully updated");    
      // toast.success(`your package details successfully updated`);
      await axios.put(
        `http://localhost:8070/addbloodsamples/update/${id}`,
        currentSample,
        config
      );
      setCurrentSample({
        firstName: currentSample.firstName,
          lastName: currentSample.lastName,
          contactNumber: currentSample.contactNumber,
          address: currentSample.address,
          email: currentSample.email,
          dateOfBirth: currentSample.dateOfBirth,
          nic: currentSample.nic,
          weight: currentSample.weight,
          bloodType: currentSample.bloodType,
          bloodAmount: currentSample.bloodAmount,
          gender: currentSample.gender
        });
        // toast.success(`your package details successfully updated`);
        window.location.href = "/bloodsamples";

    };


    /* CLOSE BUTTON */

    function closeReq() {
      window.location.href = "/bloodsamples";
    }


    return (
        <div className='admindashboard'>
    
          <NavigationBar />
    
          <section className="ad-dashboard">
    
            <Search />
    
            <div className="ad-dash-content">
    
              <BloodVolumes />
    
              {/* blood request table */}
    
              <div className="activity">
    
                <div className="ad-title">
                  <i className="uil uil-clock-three"></i>
                  <span className="text">Edit Blood Samples</span>
                </div>
    
                <div className="row">
    
                  <div className="span6">
                    {/* add blood sample form 02 */}
                    <div className="ad-form">
                      <div className="form_wrapper">
                        <div className="form_container">
    
                          <div className="title_container">
                            <h2>Edit Blood Sample</h2>
                          </div>
    
                          <div className="row clearfix">
                            <div className="">
    
                              <form>
    
                                <div className="row clearfix">
    
                                  <div className="col_half">
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                      <input type="text" 
                                      name="firstName" 
                                      value={currentSample.firstName} 
                                      placeholder="First Name" 
                                      pattern="[A-Za-z]{2,20}" 
                                      title="The first name must contain letters only" 
                                      onChange={handleInputChange} 
                                      required />
                                    </div>
                                  </div>
    
                                  <div className="col_half">
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                      <input type="text" 
                                      name="lastName" 
                                      value={currentSample.lastName} 
                                      placeholder="Last Name" 
                                      pattern="[A-Za-z]{2,20}" 
                                      title="The last name must contain letters only" 
                                      onChange={handleInputChange}
                                      required />
                                    </div>
                                  </div>
    
                                </div>
    
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                                  <input type="text" 
                                  name="contactNumber" 
                                  value={currentSample.contactNumber} 
                                  placeholder="Contact Number" 
                                  pattern="[0-9]{10}" 
                                  title="Enter valid contact number (ex - 94757713501)" 
                                  onChange={handleInputChange}
                                  required />
                                </div>
    
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-home"></i></span>
                                  <input type="text" 
                                  name="address" 
                                  value={currentSample.address}
                                  placeholder="Address" 
                                  pattern="[A-Za-z0-9'\.\-\s\,]" 
                                  title="Enter valid Address" 
                                  onChange={handleInputChange}
                                  required />
                                </div>
    
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                  <input type="email" 
                                  name="email" 
                                  value={currentSample.email} 
                                  placeholder="Email" 
                                  onChange={handleInputChange}
                                  required />
                                </div>
    
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-calendar"></i></span>
                                  <input type="date" 
                                  name="dateOfBirth" 
                                  value={currentSample.dateOfBirth} 
                                  placeholder="Date Of Birth" 
                                  onChange={handleInputChange} 
                                  required />
                                </div>
    
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-id-card-o"></i></span>
                                  <input type="text" 
                                  name="nic" 
                                  value={currentSample.nic}
                                  placeholder="NIC Number" 
                                  pattern="[Vv0-9]{10}" 
                                  title="Enter valid NIC number (ex - 982742978V)" 
                                  onChange={handleInputChange}
                                  required />
                                </div>
    
                                <div className="row clearfix">
    
                                  <div className="col_half">
                                    <div className="input_field"> <span><i aria-hidden="true" className="fa fa-male"></i></span>
                                      <input type="number" 
                                      name="weight" 
                                      value={currentSample.weight} 
                                      placeholder="Weight" 
                                      onChange={handleInputChange} 
                                      required />
                                    </div>
                                  </div>
    
                                  <div className="col_half">
                                    <div className="input_field select_option">
                                      <select id="pick" 
                                      name="bloodType" 
                                      onChange={handleInputChange}
                                      required>
                                        <option disabled selected>{currentSample.bloodType}</option>
                                        <option value="A+" >A+</option>
                                        <option value="A-" >A-</option>
                                        <option value="B+" >B+</option>
                                        <option value="B-" >B-</option>
                                        <option value="AB+" >AB+</option>
                                        <option value="AB-" >AB-</option>
                                        <option value="O+" >O+</option>
                                        <option value="O-" >O-</option>
                                      </select>
                                      <div className="select_arrow"></div>
                                    </div>
                                  </div>
    
    
    
                                </div>
    
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-medkit"></i></span>
                                  <input type="number" 
                                  name="bloodAmount" 
                                  value={currentSample.bloodAmount}
                                  placeholder="Blood Amount" 
                                  onChange={handleInputChange}
                                  required />
                                </div>
    
                                <div className="input_field radio_option">

                                  <input type="radio" 
                                  name="gender"
                                  
                                  checked="checked" 
                                  value={"Male"} 
                                  onChange={handleInputChange}
                                  id="rd1" 
                                  required />
                                  <label for="rd1">Male</label>

                                  <input type="radio" 
                                  name="gender" 
                                  value={"Female"} 
                                  onChange={handleInputChange} 
                                  id="rd2" 
                                  required />
                                  <label for="rd2">Female</label>

                                </div>
    
                                <div className="input_field checkbox_option">
                                  <input type="checkbox" id="cb1" />
                                  <label for="cb1">I agree with terms and conditions</label>
                                </div>
    
                                <button className="button" type="submit" onClick={() => updateData(id)}>Update</button>
                                <button className="button" type="submit" onClick={closeReq}>Cancel</button>
    
                              </form>
    
                            </div>
                          </div>
    
                        </div>
                      </div>
                      <p className="credit">Developed by <a href="/" target="_blank">Admin Panel Add Blood</a></p>
                    </div>
                    {/* end add blood sample form 02 */}
                  </div>
    
                </div>
              </div>
    
              {/* close blood request table */}
    
            </div>
    
          </section>
    
        </div>
      )
}

export default BloodSamplesEdit