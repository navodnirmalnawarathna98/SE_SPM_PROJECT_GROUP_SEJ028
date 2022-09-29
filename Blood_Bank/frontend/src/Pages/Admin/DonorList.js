import React from 'react'

import "./admin-style.css"

import NavigationBar from './Components/NavigationBar'
import Search from './Components/Search'
import BloodVolumes from './Components/BloodVolumes'


const DonorList = () => {
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
              <span class="text">Donor List</span>
            </div>

            <div className="activity-data">
              <table class="table table-hover">

                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">NIC</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date Of Birth</th>
                    <th scope="col">Blood Type</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">Address</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Dilshan</td>
                    <td>982742978V</td>
                    <td>dil@gmail.com</td>
                    <td>1998/09/30</td>
                    <td>A+</td>
                    <td>0757713501</td>
                    <td>397, Koswatta</td>
                    <td><span class="data-list"><button className='button-accept'>Edit</button></span></td>
                    <td><span class="data-list"><button className='button-reject'>Delete</button></span></td>
                  </tr>

                  <tr>
                    <td>Saman</td>
                    <td>982742978V</td>
                    <td>saman@gmail.com</td>
                    <td>1998/09/30</td>
                    <td>AB+</td>
                    <td>0757713501</td>
                    <td>457, Malabe</td>
                    <td><span class="data-list"><button className='button-accept'>Edit</button></span></td>
                    <td><span class="data-list"><button className='button-reject'>Delete</button></span></td>
                  </tr>

                  <tr>
                    <td>Kalum</td>
                    <td>982742978V</td>
                    <td>kalum@gmail.com</td>
                    <td>1998/09/30</td>
                    <td>O+</td>
                    <td>0757713501</td>
                    <td>856, Hokandara</td>
                    <td><span class="data-list"><button className='button-accept'>Edit</button></span></td>
                    <td><span class="data-list"><button className='button-reject'>Delete</button></span></td>
                  </tr>

                  <tr>
                    <td>Nimal</td>
                    <td>982742978V</td>
                    <td>nimal@gmail.com</td>
                    <td>1998/09/30</td>
                    <td>AB-</td>
                    <td>0757713501</td>
                    <td>236, Rajigiriya</td>
                    <td><span class="data-list"><button className='button-accept'>Edit</button></span></td>
                    <td><span class="data-list"><button className='button-reject'>Delete</button></span></td>
                  </tr>

                  <tr>
                    <td>Kasun</td>
                    <td>982742978V</td>
                    <td>kasun@gmail.com</td>
                    <td>1998/09/30</td>
                    <td>B+</td>
                    <td>0757713501</td>
                    <td>027, Malabe</td>
                    <td><span class="data-list"><button className='button-accept'>Edit</button></span></td>
                    <td><span class="data-list"><button className='button-reject'>Delete</button></span></td>
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

export default DonorList