import React from 'react'
import admin_profile from "../../../images/admin_profile.jpg"

const Search = () => {
  return (
    <div>
        <div class="top">
            <i class="uil uil-bars sidebar-toggle"></i>

            <div class="search-box">
                <i class="uil uil-search"></i>
                <input type="text" placeholder="Search here..."/>
            </div>

            <button type="button" class="btn btn-info">Search</button>
            
            <img src={admin_profile} alt="admin profile"/>
        </div>
    </div>
  )
}

export default Search