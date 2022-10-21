import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from "react-toastify"

import "./admin-style.css"
import admin_profile from "../../images/admin_profile.jpg"

import NavigationBar from './Components/NavigationBar'
import Search from './Components/Search'
import BloodVolumes from './Components/BloodVolumes'


const BloodSamples = () => {

  // get all samples  
  const [bloodSamples, setBloodSamples] = useState({});

  const [query, setQuery] = useState("");


  // const getAllBloodSamples = async () => {
	// 	const config = {
	// 		headers: { "Content-Type": "application/json", },
	// 	};
	// 	try {
	// 		const res = await axios.get(`http://localhost:8070/addbloodsamples/?q=${query}`, config);
  //           setBloodSamples(res.data);
  //           console.log(res.data);       
	// 	} catch (err) {
	// 		console.error("error", err);
  //           console.log("Traking ID Wrong");
	// 	}
	// };

    useEffect(() => {
		
        // try {
        //     getAllBloodSamples();
        // }catch (err) {
        //   console.error("error", err);
        // }

        function getAllBloodSamples() {
          axios.get(`http://localhost:8070/addbloodsamples/search/?q=${query}`).then((res) => {
            setBloodSamples(res.data)
          }).catch((err) => {
              alert(err.message);
          })
        }

        if (query.length === 0 || query.length > 1) getAllBloodSamples();

	}, [query]);



// delete sample

const deleteSample =(id)=>{
  axios.delete(`http://localhost:8070/addbloodsamples/delete/${id}`).then((res)=>{
      axios.get("http://localhost:8070/addbloodsamples/").then((res) =>{
          alert("Delete Successfully");
          console.log(res.data);
          setBloodSamples(res.data);
      }).catch((err) => {
          alert(err.message);
      })
  })
}




  return (
    <div className='admindashboard'>
        
      <NavigationBar/>

      <section class="ad-dashboard">

          <div>
              <div class="ad-top">
                  <i class="uil uil-bars sidebar-toggle"></i>

                  <div class="ad-search-box">
                      <i class="uil uil-search"></i>
                      <input type="text" name='search' placeholder="Search here..." onChange={(e) => setQuery(e.target.value)} />
                  </div>

                  <button type="submit" class="ad-search-box-button">Search</button>

                  <img src={admin_profile} alt="admin profile"/>
              </div>
          </div>

        <div class="ad-dash-content">

          <BloodVolumes/>

          {/* blood request table */}

          <div className="activity">

            <div className="ad-title">
              <i class="uil uil-clock-three"></i>
              <span class="text">Blood Samples</span>
              <span class="data-list">
                <button className='ad-print-box-button'>
                  <a className='button-print-a' title='' href={`/bloodsamplesreport`}>Print</a>
                </button>
              </span>
            </div>

            <div className="activity-data">
              <table class="table table-hover">

                <thead>
                  <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date Of Birth</th>
                    <th scope="col">NIC No</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Blood Type</th>
                    <th scope="col">Blood Amount</th>
                    <th scope="col">Gender</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>

                <tbody>

                    {bloodSamples.length >0?(bloodSamples.map((bloodSamples)=>(
                        <tr>
                            <td>{bloodSamples.firstName}</td>
                            <td>{bloodSamples.lastName}</td>
                            <td>{bloodSamples.contactNumber}</td>
                            <td>{bloodSamples.address}</td>
                            <td className='simple'>{bloodSamples.email}</td>
                            <td>{bloodSamples.dateOfBirth}</td>
                            <td>{bloodSamples.nic}</td>
                            <td>{bloodSamples.weight}</td>
                            <td>{bloodSamples.bloodType}</td>
                            <td>{bloodSamples.bloodAmount}</td>
                            <td>{bloodSamples.gender}</td>
                            <td><span class="data-list"><button className='button-accept'><a className='button-accept-a' title='' href={`/bloodsamplesedit/${bloodSamples._id}`}>Edit</a></button></span></td>
                            <td><span class="data-list"><button className='button-reject' onClick={()=>{deleteSample(bloodSamples._id)}}>Delete</button></span></td>
                        </tr>
                    ))
                    ):(
                     <h3>No details found</h3>
                    )}

                </tbody>

              </table>
            </div>

          </div>

          {/* close blood request table */}

        </div>

      </section> 

    </div>
  )
}

export default BloodSamples