import React from 'react';
import './profile.css';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Profile() {
  const navigator=useNavigate();
  return (
    
    <div>
        <div className='DonorProfileArea'>

                    {/* header section starts */}
      <header class="header">
        <a href="#" class="logo"><i class="fa-solid fa-droplet"></i> Blood Bank  </a>
        <nav1 class="navbar">
          <a href="#home">home</a>
          <a href="#aboutus">About Us</a>
          <a href="#services">Services</a>
          <a href="#contactus">Contact Us</a>
          <a href="#main">Main Information</a>
        </nav1>
        <div class="icons">
          <div class="fas fa-bars" id="menu-btn"></div>
          <div class="fas fa-search" id="search-btn"></div>
        </div>

        <form action="" class="search-form">
          <input type="search" id="search-box" placeholder="search here..."></input>
          <label for="search-box" class="fas fa-search"></label>
        </form>
      </header>
            <div class="row toprow">
              <div class="col-sm-2 item">
                <button className='donatebldbtn' type='button'>Donate Blood</button>

              </div>

              
              <div class="col-sm-7 item">
                
              <form class="form-inline my-2 my-lg-0 sercharea">
                <input class="form-control mr-sm-2 srch" type="search" placeholder="Search" aria-label="Search"/>
                <button class="srchbtn" type="submit">Search</button>
              </form>
              

              </div>
              
              <div class="col-sm-2 item rightdiv">
              
                <div className='proimg'>
               

                </div>
                mohan weerasinghe
                <a href="/donorEditProfile" className="btn34">Edit Profile</a>
                <a href="/" className="btn34">Sign out</a>
                

              </div>
            </div>
            <div class="row">
              
            </div>
            <div class="row bottomrow">
               {/* blood request table */}

          <div className="activity">

<div className="ad-title">
  <i class="uil uil-clock-three"></i>
  <span class="text">Seeker List</span>
</div>

<div className="activity-data">
  <table class="table table-hover">

    <thead>
      <tr>
        <th scope="col">Institution Name</th>
        <th scope="col">Email</th>
        <th scope="col">Contact No</th>
        <th scope="col">Blood Type</th>
        <th scope="col">Blood Amount</th>
        <th scope="col">Due Date</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">Nawaloka</th>
        <td>nava@gmail.com</td>
        <td>0751125986</td>
        <td>A+</td>
        <td>59</td>
        <td>2022-06-12</td>
       
      </tr>

      <tr>
        <th scope="row">Nawaloka</th>
        <td>nava@gmail.com</td>
        <td>0751125986</td>
        <td>A+</td>
        <td>59</td>
        <td>2022-06-12</td>
        
      </tr>

      <tr>
        <th scope="row">Nawaloka</th>
        <td>nava@gmail.com</td>
        <td>0751125986</td>
        <td>A+</td>
        <td>59</td>
        <td>2022-06-12</td>
        
      </tr>

      <tr>
        <th scope="row">Nawaloka</th>
        <td>nava@gmail.com</td>
        <td>0751125986</td>
        <td>A+</td>
        <td>59</td>
        <td>2022-06-12</td>
        
      </tr>
    </tbody>

  </table>
</div>

</div>

{/* close blood request table */}
            </div>


        </div>
    </div>
  )
}

