import React from 'react'
import logo from "../../../images/logo.png"

const NavigationBar = () => {
  return (
    <div>
        <nav>
            <div class="logo-name">
                <div class="logo-image">
                    <img src={logo} alt="logo"/>
                </div>

                <span class="logo_name">Admin Panel</span>
            </div>

            <div class="menu-items">
                <ul class="nav-links">
                    <li><a href="/admindashboard">
                        <i class="uil uil-estate"></i>
                        <span class="link-name">Dahsboard</span>
                    </a></li>
                    <li><a href="/addbloodsamples">
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
                    <li><a href="/">
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
    </div>
  )
}

export default NavigationBar