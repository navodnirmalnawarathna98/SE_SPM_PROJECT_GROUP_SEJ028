import React from 'react'

import "./style.css"

import NavigationBar from './Components/NavigationBar'
import Search from './Components/Search'
import BloodVolumes from './Components/BloodVolumes'

const AdminDashboard = () => {
  return (
    <div className='admindashboard'>
        
      <NavigationBar/>

      <section class="dashboard">

        <Search/>

        <div class="dash-content">

          <BloodVolumes/>

          {/* blood request table */}

          <div className="activity">

            <div className="title">
              <i class="uil uil-clock-three"></i>
              <span class="text">Blood Request</span>
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
              {/* <table>
                  <tr>
                      <th>Institution Name</th>
                      <th>Email</th>
                      <th>Contact No</th>
                      <th>Blood Type</th>
                      <th>Blood Amount</th>
                      <th>Due Date</th>
                      <th></th>
                      <th></th>
                  </tr>

                  <tr>
                      <td>Nawaloka</td>
                      <td>nava@gmail.com</td>
                      <td>0751125986</td>
                      <td>A+</td>
                      <td>59</td>
                      <td>2022-06-12</td>
                      <td><span class="data-list"><button className='button-accept'>Accept</button></span></td>
                      <td><span class="data-list"><button className='button-reject'>Reject</button></span></td>
                  </tr>
              </table> */}
            </div>

          </div>

        </div>

      </section> 

    </div>
  )
}

export default AdminDashboard