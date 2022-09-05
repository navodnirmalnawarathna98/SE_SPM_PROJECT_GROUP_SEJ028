import React from 'react'

import img22 from "../../images/sidenavbar-img/search.png"

import "./sidenavbar.css"

const sidenavbar = () => {
  return (
    <div>
      <div class="side-menu1">
        <div class="brand-name1">
            <h1>Blood Bank</h1>
        </div>
        <ul>
            <li> <span>Dashboard</span> </li>
            <li><span>My Blood Request</span> </li>
            <li><span>Reject Blood Request</span> </li>
        </ul>
    </div>
    <div class="container1">
        <div class="header1">
            <div class="nav1">
                <div class="search">
                    <input type="text" placeholder="Search.."/>
                    <button type="submit"><img src={img22} alt=""/></button>
                </div>
            </div>
        </div>
        {/* <!-- table_charts_forms_others_include_to_this_area start--> */}

        {/* <!-- table_charts_forms_others_include_to_this_area start--> */}
    </div>
    </div>
  )
}

export default sidenavbar