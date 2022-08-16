import React from 'react'
import logo from "../../images/logo.png"
import admin_profile from "../../images/admin_profile.jpg"

import "./style.css"


const AdminDashboard = () => {
  return (
    <div className='admindashboard'>

      <nav>
        <div class="logo-name">
            <div class="logo-image">
                <img src={logo} alt="logo"/>
            </div>

            <span class="logo_name">Admin Panel</span>
        </div>

        <div class="menu-items">
            <ul class="nav-links">
                <li><a href="#">
                    <i class="uil uil-estate"></i>
                    <span class="link-name">Dahsboard</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-medical-drip"></i>
                    <span class="link-name">Add Blood Samples</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-chart"></i>
                    <span class="link-name">Donors Appointments</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-thumbs-up"></i>
                    <span class="link-name">Seekers Requests</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-building"></i>
                    <span class="link-name">Registered Institution</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-user-plus"></i>
                    <span class="link-name">Donors List</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-user-minus"></i>
                    <span class="link-name">Seekers List</span>
                </a></li>
            </ul>
            
            <ul class="logout-mode">
                <li><a href="#">
                    <i class="uil uil-signout"></i>
                    <span class="link-name">Logout</span>
                </a></li>

                <li class="mode">
                    <a href="#">
                        <i class="uil uil-moon"></i>
                    <span class="link-name">Dark Mode</span>
                </a>

                <div class="mode-toggle">
                  <span class="switch"></span>
                </div>
            </li>
            </ul>
        </div>
      </nav>

      <section class="dashboard">
        <div class="top">
            <i class="uil uil-bars sidebar-toggle"></i>

            <div class="search-box">
                <i class="uil uil-search"></i>
                <input type="text" placeholder="Search here..."/>
            </div>

            <button>Search</button>
            
            <img src={admin_profile} alt="admin profile"/>
        </div>

        <div class="dash-content">
            <div class="overview">
                <div class="title">
                    <i class="uil uil-tachometer-fast-alt"></i>
                    <span class="text">Dashboard</span>
                </div>

                <div class="boxes">
                    <div class="box box1">
                        <span class="number">A+</span>
                        <i class="fa-solid fa-droplet"></i>
                        <span class="text">5266</span>
                    </div>
                    <div class="box box2">
                        <span class="number">B+</span>
                        <i class="fa-solid fa-droplet"></i>
                        <span class="text">6584</span>
                    </div>
                    <div class="box box3">
                        <span class="number">AB+</span>
                        <i class="fa-solid fa-droplet"></i>
                        <span class="text">1269</span>
                    </div>
                    <div class="box box4">
                        <span class="number">O+</span>
                        <i class="fa-solid fa-droplet"></i>
                        <span class="text">563</span>
                    </div>
                </div>

                <br/>

                <div class="boxes">
                    <div class="box box5">
                        <span class="number">A-</span>
                        <i class="fa-solid fa-droplet"></i>
                        <span class="text">4789</span>
                    </div>
                    <div class="box box6">
                        <span class="number">B-</span>
                        <i class="fa-solid fa-droplet"></i>
                        <span class="text">6523</span>
                    </div>
                    <div class="box box7">
                        <span class="number">AB-</span>
                        <i class="fa-solid fa-droplet"></i>
                        <span class="text">9856</span>
                    </div>
                    <div class="box box8">
                        <span class="number">O-</span>
                        <i class="fa-solid fa-droplet"></i>
                        <span class="text">489</span>
                    </div>
                </div>

            </div>

            <div class="activity">
                <div class="title">
                    <i class="uil uil-clock-three"></i>
                    <span class="text">Recent Activity</span>
                </div>

                <div class="activity-data">
                    <div class="data names">
                        <span class="data-title">Name</span>
                        <span class="data-list">Prem Shahi</span>
                        <span class="data-list">Deepa Chand</span>
                        <span class="data-list">Manisha Chand</span>
                        <span class="data-list">Pratima Shahi</span>
                        <span class="data-list">Man Shahi</span>
                        <span class="data-list">Ganesh Chand</span>
                        <span class="data-list">Bikash Chand</span>
                    </div>
                    <div class="data email">
                        <span class="data-title">Email</span>
                        <span class="data-list">premshahi@gmail.com</span>
                        <span class="data-list">deepachand@gmail.com</span>
                        <span class="data-list">prakashhai@gmail.com</span>
                        <span class="data-list">manishachand@gmail.com</span>
                        <span class="data-list">pratimashhai@gmail.com</span>
                        <span class="data-list">manshahi@gmail.com</span>
                        <span class="data-list">ganeshchand@gmail.com</span>
                    </div>
                    <div class="data joined">
                        <span class="data-title">Joined</span>
                        <span class="data-list">2022-02-12</span>
                        <span class="data-list">2022-02-12</span>
                        <span class="data-list">2022-02-13</span>
                        <span class="data-list">2022-02-13</span>
                        <span class="data-list">2022-02-14</span>
                        <span class="data-list">2022-02-14</span>
                        <span class="data-list">2022-02-15</span>
                    </div>
                    <div class="data type">
                        <span class="data-title">Type</span>
                        <span class="data-list">New</span>
                        <span class="data-list">Member</span>
                        <span class="data-list">Member</span>
                        <span class="data-list">New</span>
                        <span class="data-list">Member</span>
                        <span class="data-list">New</span>
                        <span class="data-list">Member</span>
                    </div>
                    <div class="data status">
                        <span class="data-title">Status</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                        <span class="data-list">Liked</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  )
}

export default AdminDashboard