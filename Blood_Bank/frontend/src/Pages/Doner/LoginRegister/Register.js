import React from 'react'
import "./loginregister.css"
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigator=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("inside submission");
        let fname=document.getElementById("fname").value;
        let lName=document.getElementById("lName").value;
        let nic=document.getElementById("nic").value;
        let email=document.getElementById("email").value;
        let dob=document.getElementById("dob").value;
        let password=document.getElementById("password").value;
        let cpassword=document.getElementById("cpassword").value;
        if(password===cpassword ){
            axios.post("http://localhost:8070/donorUser/add",{fname,lName,nic,email,dob,password}).then((res)=>{
                console.log(res);
                localStorage.setItem("user",JSON.stringify(res.data));
                Swal.fire(
                    "A new user has been added",
                    
                    "success"
                 ).then((res)=>{
                    if(res.isConfirmed){
                        navigator("/donorprofile");
                    }
                 })
            });

        }
        else{
            Swal.fire(
               "Passwords do not match",
               "Please re-check",
               "warning"
            )
        }
      
    }


    return (
        
    <div>
        
        
        <form onSubmit={handleSubmit}>
        <div className="wrapper22">
            <div className="title22">
                Register
            </div>
            <div className="form22">

                <div className="inputfield">
                    <label>First Name</label>
                    <input id='fname' type="text" name="fNamedonor" placeholder='Enter first name' requried pattern="[a-z]{1,15}" title="Please enter on alphabets only" className="input"
                    />
                </div>

                <div className="inputfield">
                    <label>Last Name</label>
                    <input id='lName' type="text" name="Lnamedonor" placeholder='Enter last name'requried pattern="[a-z]{1,15}"   title="Please enter on alphabets only" className="input" 
                    />
                </div>

                <div className="inputfield">
                    <label>NIC</label>
                    <input id='nic' type="text" name="nicdonor" requried placeholder='Enter NIC number' pattern="[Vv0-9]{10}" className="input"
                    />
                </div>
                
                <div className="inputfield">
                    <label>Email</label>
                    <input id='email' type="email" name="emaildonor" requried placeholder='Enter Email address' title="Please enter on @ to email address"className="input" ></input>
                </div>
            
                <div className="inputfield">
                    <label>Date of birth</label>
                    <input id='dob' type="date" name="dobdonor" requried className="input" 
                    />
                </div>
                <div className="inputfield">
                    <label>Password</label>
                    <input id='password' type="password" name="nicdonor" requried placeholder='Enter Password' className="input"
                    />
                </div>
                <div className="inputfield">
                    <label>Re-Password</label>
                    <input id='cpassword' type="password" name="nicdonor" requried placeholder='Re-Enter password' className="input"
                    />
                </div>

                
                <div className="modal-footer">
                {/* <a onClick={(e)=>{                
                    handleSubmit(e);
                }} className="btn33">Submit</a> */}

                <button className="btn33" type='submit' >submit</button>
                
                 <a href="/" className="btn34">Cancel</a>
                </div>
            </div>
        </div>
        </form> 
        
    </div>
  )
}

export default Register