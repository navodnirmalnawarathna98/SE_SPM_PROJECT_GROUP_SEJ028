import React from 'react'

import "./admin-style.css"

import NavigationBar from './Components/NavigationBar'
import Search from './Components/Search'
import BloodVolumes from './Components/BloodVolumes'


const DonorAppointments = () => {
  return (
    <div className='admindashboard'>
        
      <NavigationBar/>

      <section class="ad-dashboard">

        <Search/>

        <div class="ad-dash-content">

          <BloodVolumes/>

          {/* blood request table */}

          <div className="activity">

            <div className="ad-title">
              <i class="uil uil-clock-three"></i>
              <span class="text">Donor Appointments</span>
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
                    <td><span class="data-list"><button className='button-accept'>Accept</button></span></td>
                    <td><span class="data-list"><button className='button-reject'>Reject</button></span></td>
                  </tr>

                  <tr>
                    <th scope="row">Nawaloka</th>
                    <td>nava@gmail.com</td>
                    <td>0751125986</td>
                    <td>A+</td>
                    <td>59</td>
                    <td>2022-06-12</td>
                    <td><span class="data-list"><button className='button-accept'>Accept</button></span></td>
                    <td><span class="data-list"><button className='button-reject'>Reject</button></span></td>
                  </tr>

                  <tr>
                    <th scope="row">Nawaloka</th>
                    <td>nava@gmail.com</td>
                    <td>0751125986</td>
                    <td>A+</td>
                    <td>59</td>
                    <td>2022-06-12</td>
                    <td><span class="data-list"><button className='button-accept'>Accept</button></span></td>
                    <td><span class="data-list"><button className='button-reject'>Reject</button></span></td>
                  </tr>

                  <tr>
                    <th scope="row">Nawaloka</th>
                    <td>nava@gmail.com</td>
                    <td>0751125986</td>
                    <td>A+</td>
                    <td>59</td>
                    <td>2022-06-12</td>
                    <td><span class="data-list"><button className='button-accept'>Accept</button></span></td>
                    <td><span class="data-list"><button className='button-reject'>Reject</button></span></td>
                  </tr>
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

export default DonorAppointments