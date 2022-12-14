import React from 'react'
import { useState } from 'react'
import axios from 'axios'


import "./admin-style.css"

import NavigationBar from './Components/NavigationBar'
import Search from './Components/Search'
import BloodVolumes from './Components/BloodVolumes'


const AddBloodSamples = () => {

  const [currentVolumes, setCurrentVolumes] = useState({});

  const [a, setA] = useState({});

  var Vid = "631a09bd95344733d700e1ad";

  const [formData, setFormData] = useState({

    firstName: "",
    lastName: "",
    contactNumber: "",
    address: "",
    email: "",
    dateOfBirth: "",
    nic: "",
    weight: "",
    bloodType: "",
    bloodAmount: "",
    gender: ""

  });

  const { firstName, lastName, contactNumber, address, email, dateOfBirth, nic, weight, bloodType, bloodAmount, gender } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(firstName, lastName, contactNumber, address, email, dateOfBirth, nic, weight, bloodType, bloodAmount, gender);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newAddBloodSamples = {
      firstName: firstName,
      lastName: lastName,
      contactNumber: contactNumber,
      address: address,
      email: email,
      dateOfBirth: dateOfBirth,
      nic: nic,
      weight: weight,
      bloodType: bloodType,
      bloodAmount: bloodAmount,
      gender: gender
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const body = JSON.stringify(newAddBloodSamples);
      await axios.post("http://localhost:8070/addbloodsamples/add", body, config);
      setFormData({
        firstName: "",
        lastName: "",
        contactNumber: "",
        address: "",
        email: "",
        dateOfBirth: "",
        nic: "",
        weight: "",
        bloodType: "",
        bloodAmount: "",
        gender: ""
      });
      //  window.location.reload();
      alert("Sample Added Successfully");
      window.location.href = "/bloodsamples";
      getVolumesData(Vid);
    } catch (err) {
      console.error("error", err.response.data);
      alert("Sample Not Added");
    }
  };




    function updateVolumes(CURRENT_VOLUMES, bloodAmount) {
        console.log("SLIIT");
        console.log(bloodAmount);
        console.log(CURRENT_VOLUMES);
        var totalVolume = parseInt(bloodAmount) + parseInt(CURRENT_VOLUMES);
        var TotalVolume = totalVolume.toString();
        console.log(TotalVolume);
        setCurrentVolumes(TotalVolume);
        console.log(currentVolumes);
        
        //updateData(Vid,TotalVolume);
    }


    /*  UPDATE DATA */

    const updateData = async (Vid, TotalVolume) => {

      const config = {
          headers: {
              "Content-Type": "application/json",
          },
      };
      await axios.put(
        `http://localhost:8070/bloodvolumes/update/${Vid}`,
        currentVolumes,
        config
      );
      setCurrentVolumes({
        //ABp: res.data.bloodVolumes.ABp
        // firstName: currentSample.firstName,
        //   lastName: currentSample.lastName,
        //   contactNumber: currentSample.contactNumber,
        //   address: currentSample.address,
        //   email: currentSample.email,
        //   dateOfBirth: currentSample.dateOfBirth,
        //   nic: currentSample.nic,
        //   weight: currentSample.weight,
        //   bloodType: currentSample.bloodType,
        //   bloodAmount: currentSample.bloodAmount,
        //   gender: currentSample.gender
        });
    };


    /* Get Volumes Data */
    const getVolumesData = async (Vid) => {
      const config = {
          headers: {
              "Content-Type": "application/json",
          },
      };
      try {
          const res = await axios.get(`http://localhost:8070/bloodvolumes/get/${Vid}`, config);
          setCurrentVolumes(res.data.bloodVolumes.ABp);

          if(bloodType === "AB+"){
            setCurrentVolumes(res.data.bloodVolumes.ABp)
            updateVolumes(res.data.bloodVolumes.ABp, bloodAmount);
          } else if(bloodType === "AB-"){
            updateVolumes(res.data.bloodVolumes.ABm, bloodAmount);
          } else if(bloodType === "A+"){
            updateVolumes(res.data.bloodVolumes.Ap, bloodAmount);
          } else if(bloodType === "A-"){
            updateVolumes(res.data.bloodVolumes.Am, bloodAmount);
          } else if(bloodType === "B+"){
            updateVolumes(res.data.bloodVolumes.Bp, bloodAmount);
          } else if(bloodType === "B-"){
            updateVolumes(res.data.bloodVolumes.Bm, bloodAmount);
          } else if(bloodType === "O+"){
            updateVolumes(res.data.bloodVolumes.Op, bloodAmount);
          } else {
            updateVolumes(res.data.bloodVolumes.Om, bloodAmount);
          }

      } catch (err) {
          console.error("error", err);
          console.log("Traking ID Wrong");
      }
    };




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
              <span className="text">Add Blood Samples</span>
            </div>

            <div className="row">

              <div className="span6">
                {/* add blood sample form 01 */}
                <div className="ad-form">
                  <div className="form_wrapper">
                    <div className="form_container">

                      <div className="title_container">
                        <h2>Pre-Registered Donors</h2>
                      </div>

                      <div className="row clearfix">
                        <div className="">

                          <form action="#">

                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-id-card-o"></i></span>
                              <input type="text" name="nic" placeholder="NIC Number" required />
                            </div>

                            <label for="cb1">Donor details are auto-filled according to donor NIC number if the donor is already registered in our system.</label>

                            <button className="button" type="submit">Auto Filled</button>

                          </form>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                {/* end add blood sample form 01 */}
              </div>

              <div className="span6">
                {/* add blood sample form 02 */}
                <div className="ad-form">
                  <div className="form_wrapper">
                    <div className="form_container">

                      <div className="title_container">
                        <h2>Add Blood Sample Form</h2>
                      </div>

                      <div className="row clearfix">
                        <div className="">

                          <form onSubmit={(e) => onSubmit(e)}>

                            <div className="row clearfix">

                              <div className="col_half">
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                  <input type="text" name="firstName" value={firstName} placeholder="First Name" pattern="[A-Za-z]{2,20}" title="The first name must contain letters only" 
                                  onChange={(e) => onChange(e)} required />
                                </div>
                              </div>

                              <div className="col_half">
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                  <input type="text" name="lastName" value={lastName} placeholder="Last Name" pattern="[A-Za-z]{2,20}" title="The last name must contain letters only" 
                                  onChange={(e) => onChange(e)} required />
                                </div>
                              </div>

                            </div>

                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone"></i></span>
                              <input type="text" name="contactNumber" value={contactNumber} placeholder="Contact Number" pattern="^\+?94\d{9}$" title="Enter valid contact number (ex - 94757713501)" 
                              onChange={(e) => onChange(e)} required />
                            </div>

                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-home"></i></span>
                              <input type="text" name="address" value={address} placeholder="Address" pattern="[A-Za-z0-9'\.\-\s\,]" title="Enter valid Address"
                               onChange={(e) => onChange(e)} required />
                            </div>

                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                              <input type="email" name="email" value={email} placeholder="Email"
                               onChange={(e) => onChange(e)} required />
                            </div>

                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-calendar"></i></span>
                              <input type="date" name="dateOfBirth" value={dateOfBirth} placeholder="Date Of Birth"
                               onChange={(e) => onChange(e)} required />
                            </div>

                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-id-card-o"></i></span>
                              <input type="text" name="nic" value={nic} placeholder="NIC Number" 
                              pattern="^\d{9}[V|v|X|x]$" title="Enter valid NIC number (ex - 982742978V) , (ex - 98521656X)" 
                              onChange={(e) => onChange(e)} required />
                            </div>
                            

                            <div className="row clearfix">

                              <div className="col_half">
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-male"></i></span>
                                  <input type="number" name="weight" value={weight} placeholder="Weight" 
                                  min="1" max="999"
                                  onChange={(e) => onChange(e)} required />
                                </div>
                              </div>

                              <div className="col_half">
                                <div className="input_field select_option">
                                  <select id="pick" name="bloodType" 
                                  onChange={(e) => onChange(e)} required>
                                    <option disabled selected>Blood Type</option>
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
                              <input type="number" name="bloodAmount" value={bloodAmount} placeholder="Blood Amount" 
                              min="1" max="999"
                              title="Enter valid number" 
                              onChange={(e) => onChange(e)} required />
                            </div>

                            <div className="input_field radio_option">
                              <input type="radio" name="gender" checked="checked" value={"Male"} 
                              onChange={(e) => onChange(e)} id="rd1" required />
                              <label for="rd1">Male</label>
                              <input type="radio" name="gender" value={"Female"} 
                              onChange={(e) => onChange(e)} id="rd2" required />
                              <label for="rd2">Female</label>
                            </div>

                            <div className="input_field checkbox_option">
                              <input type="checkbox" id="cb1" />
                              <label for="cb1">I agree with terms and conditions</label>
                            </div>

                            <button className="button" type="submit">Submit</button>

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

export default AddBloodSamples