import React from 'react'
import logo from "../../../images/logo.png"

const NavigationBar = () => {
  return (
    <div>
        <nav>
            <div class="ad-logo-name">
                <div class="ad-logo-image">
                    <a href="/"><img src={logo} alt="logo"/></a>
                </div>

                <span class="ad-logo_name">Admin Panel</span>
            </div>

            <div class="ad-menu-items">
                <ul class="ad-nav-links">
                    <li><a href="/admindashboard">
                        <i class="uil uil-estate"></i>
                        <span class="ad-link-name">Dahsboard</span>
                    </a></li>
                    <li><a href="/addbloodsamples">
                        <i class="uil uil-medical-drip"></i>
                        <span class="ad-link-name">Add Blood Samples</span>
                    </a></li>
                    <li><a href="/bloodsamples">
                        <i class="uil uil-medical-drip"></i>
                        <span class="ad-link-name">Blood Samples</span>
                    </a></li>
                    <li><a href="/donorappointments">
                        <i class="uil uil-chart"></i>
                        <span class="ad-link-name">Donor Appointments</span>
                    </a></li>
                    <li><a href="/seekerrequests">
                        <i class="uil uil-thumbs-up"></i>
                        <span class="ad-link-name">Seeker Requests</span>
                    </a></li>
                    <li><a href="/registeredinstitutions">
                        <i class="uil uil-building"></i>
                        <span class="ad-link-name">Registered Institution</span>
                    </a></li>
                    <li><a href="/donorlist">
                        <i class="uil uil-user-plus"></i>
                        <span class="ad-link-name">Donor List</span>
                    </a></li>
                    <li><a href="/seekerlist">
                        <i class="uil uil-user-minus"></i>
                        <span class="ad-link-name">Seeker List</span>
                    </a></li>
                </ul>

                <ul class="ad-logout-mode">
                    <li><a href="/">
                        <i class="uil uil-signout"></i>
                        <span class="ad-link-name">Logout</span>
                    </a></li>

                    <li class="ad-mode">
                        <a href="#">
                            <i class="uil uil-moon"></i>
                        <span class="ad-link-name">Dark Mode</span>
                    </a>

                    <div class="ad-mode-toggle">
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