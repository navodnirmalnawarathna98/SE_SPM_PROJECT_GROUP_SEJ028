import React from 'react'
import img22 from "../../images/sidenavbar-img/search.png"

import "./bloodreqtable.css"

const bloodreqtable = () => {
  return (
    <div>
      <div class="side-menu">
        <div class="brand-name">
            <h1>Blood Bank</h1>
        </div>
        <ul>
            <li> <span>Dashboard</span> </li>
            <li><span>My Blood Request</span> </li>
            <li><span>Reject Blood Request</span> </li>
            
        </ul>
    </div>
    <div class="container">
        <div class="header">
            <div class="nav">
                <div class="search">
                    <input type="text" placeholder="Search.."/>
                    <button type="submit"><img src={img22} alt=""/></button>
                </div>
            </div>
        </div>

        {/* <!-- table_charts_forms_others_include_to_this_area start--> */}
       
        <div class="content">
            <div class="content-2">
                <div class="recent-payments">
                    <div class="title">
                        <a href="/bloodreq" class="btn11">Create Blood Request</a>
                    </div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>School</th>
                            <th>Amount</th>
                            <th>Option</th>
                            <th>EDIT</th>
                            <th>PRINT</th>
                            <th>DELETE</th>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td>eee</td>
                            <td><a href="#" class="btn22">Edit</a></td>
                            <td><a href="#" class="btn66">Report</a></td>
                            <td><a href="#" class="btn44">Delete</a></td>
                        </tr>


                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td>eee</td>
                            <td><a href="#" class="btn22">Edit</a></td>
                            <td><a href="#" class="btn66">Report</a></td>
                            <td><a href="#" class="btn44">Delete</a></td>
                        </tr>


                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td>eee</td>
                            <td><a href="#" class="btn22">Edit</a></td>
                            <td><a href="#" class="btn66">Report</a></td>
                            <td><a href="#" class="btn44">Delete</a></td>
                        </tr>


                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td>eee</td>
                            <td><a href="#" class="btn22">Edit</a></td>
                            <td><a href="#" class="btn66">Report</a></td>
                            <td><a href="#" class="btn44">Delete</a></td>
                        </tr>



                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td>eee</td>
                            <td><a href="#" class="btn22">Edit</a></td>
                            <td><a href="#" class="btn66">Report</a></td>
                            <td><a href="#" class="btn44">Delete</a></td>
                        </tr>


                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td>eee</td>
                            <td><a href="#" class="btn22">Edit</a></td>
                            <td><a href="#" class="btn66">Report</a></td>
                            <td><a href="#" class="btn44">Delete</a></td>
                        </tr>


                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td>eee</td>
                            <td><a href="#" class="btn22">Edit</a></td>
                            <td><a href="#" class="btn66">Report</a></td>
                            <td><a href="#" class="btn44">Delete</a></td>
                        </tr>


                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td>eee</td>
                            <td><a href="#" class="btn22">Edit</a></td>
                            <td><a href="#" class="btn66">Report</a></td>
                            <td><a href="#" class="btn44">Delete</a></td>
                        </tr>


                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td>eee</td>
                            <td><a href="#" class="btn22">Edit</a></td>
                            <td><a href="#" class="btn66">Report</a></td>
                            <td><a href="#" class="btn44">Delete</a></td>
                        </tr>
                        
                    </table>
                </div>
                
            </div>
        </div>

         {/* <!-- table_charts_forms_others_include_to_this_area end --> */}

    </div>
    </div>
     )
    }
    
export default bloodreqtable