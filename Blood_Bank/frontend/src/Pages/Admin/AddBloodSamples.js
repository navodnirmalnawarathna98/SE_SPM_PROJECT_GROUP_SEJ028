import React from 'react'

import "./admin-style.css"

import NavigationBar from './Components/NavigationBar'
import Search from './Components/Search'
import BloodVolumes from './Components/BloodVolumes'


const AddBloodSamples = () => {
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
              <span class="text">Add Blood Samples</span>
            </div>

            {/* add blood sample form */}

          </div>

          {/* close blood request table */}

        </div>

      </section> 

    </div>
  )
}

export default AddBloodSamples