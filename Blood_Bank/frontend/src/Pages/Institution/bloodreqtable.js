import React,{ useEffect, useState } from 'react'
import img22 from "../../images/sidenavbar-img/search.png"
import axios from 'axios';

import "./bloodreqtable.css"

const Bloodreqtable = () => {

 //Data retriving function
 const[BloodReqs, setBloodReqs] = useState([]);

//  //GET  Details FROM DB
//  const [query,setQuery] = useState("");   

useEffect(()=>{
    function getBloodReq(){
        axios.get(`http://localhost:8070/addRequest/`).then((res) =>{
            console.log(res.data);
            setBloodReqs(res.data)
        }).catch((err)=>{
            alert(err.message);
        })
    }
   getBloodReq();
}, [])


// DELETE FUNCTION
const onDelete =(id)=>{
    axios.delete(`http://localhost:8070/addRequest/deleteReq/${id}`).then((res)=>{
        //getWManagers();
        axios.get("http://localhost:8070/addRequest/").then((res) =>{
        alert("Delete Successfully");
            console.log(res.data);
            setBloodReqs(res.data);
        }).catch((err) => {
            alert(err.message);
        })
        window.location.href = "/reqtable";
    })
}



  return (
    <div>
      <div class="side-menu">
        <div class="brand-name">
            <h1>Blood Bank</h1>
        </div>
        <ul>
            <li> <span>Dashboard</span> </li>
            <li><span>My Blood Request</span> </li>
            <li><span>Reject Blood Request</span> </li>
            
        </ul>
    </div>
    <div class="container">
        <div class="header">
            <div class="nav">
                <div class="search">
                    <input type="text" placeholder="Search.."/>
                    <button type="submit"><img src={img22} alt=""/></button>
                </div>
            </div>
        </div>

        {/* <!-- table_charts_forms_others_include_to_this_area start--> */}
       
        <div class="content">
            <div class="content-2">
                <div class="recent-payments">
                    <div class="title">
                        <a href="/bloodreq" class="btn11">Create Blood Request</a>
                    </div>
                    <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Blood Group</th>
                            <th>Blood Amount</th>
                            <th>Due Date</th>
                            <th>Description</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                            <th>REPORT</th>
                        </tr>
                    </thead>  
                    <tbody>
                        {BloodReqs.length >0?(BloodReqs.map((BloodReqs)=>(
                        <tr>
                            <td>{BloodReqs.name}</td>
                            <td>{BloodReqs.email}</td>
                            <td>{BloodReqs.contact_no}</td>
                            <td>{BloodReqs.blood_group}</td>
                            <td>{BloodReqs.blood_amount}</td>
                            <td>{BloodReqs.due_date}</td>
                            <td>{BloodReqs.description}</td>
                            <td><a href="#" class="btn22">Edit</a></td>
                            <td><a href="#" onClick={()=>{onDelete(BloodReqs._id)}} class="btn44">Delete</a></td>
                            <td><a href="#" class="btn66">Report</a></td>
                        </tr>
                        ))
                           ):(
                            <h3>No details found</h3>
                           )}
                     </tbody>  
                    </table>
                </div>
                
            </div>
        </div>

         {/* <!-- table_charts_forms_others_include_to_this_area end --> */}

    </div>
    </div>
     )
    }
    
export default Bloodreqtable