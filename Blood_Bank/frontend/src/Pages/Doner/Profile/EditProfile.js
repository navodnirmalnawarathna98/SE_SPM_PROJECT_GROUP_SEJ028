import React from 'react'
import "./editProfile.css"
import { useNavigate } from 'react-router-dom';




const register = () => {
    return (
        
    <div>
                     {/* header section starts */}
      <header className="header position-relative">
        <a href="#" class="logo"><i class="fa-solid fa-droplet"></i> Blood Bank  </a>
        <nav1 class="navbar">
          <a href="#home">home</a>
          <a href="#aboutus">About Us</a>
          <a href="#services">Services</a>
          <a href="#contactus">Contact Us</a>
          <a href="#main">Main Information</a>
        </nav1>
        <div class="icons">
          <div class="fas fa-bars" id="menu-btn"></div>
          <div class="fas fa-search" id="search-btn"></div>
        </div>

        <form action="" class="search-form">
          <input type="search" id="search-box" placeholder="search here..."></input>
          <label for="search-box" class="fas fa-search"></label>
        </form>
      </header>

    <div class="row toprow">
    

              
              <div class="col-sm-7 item">
              <form>
        <div class="wrapper22">
            <div class="title22">
                Edit Profile
            </div>
            <div class="form22">

                <div class="inputfield">
                    <label>First Name</label>
                    <input type="text" name="fNamedonor" value='mohan' class="input"
                    />
                </div>

                <div class="inputfield">
                    <label>Last Name</label>
                    <input type="text" name="Lnamedonor" value='Weerasinghe' class="input"
                    />
                </div>

                <div class="inputfield">
                    <label>NIC</label>
                    <input type="text" name="nicdonor" value='983451438V' class="input"
                    />
                </div>
                
                <div class="inputfield">
                    <label>Email</label>
                    <input type="email" name="emaildonor" value ='wmohankavinda@gmail.com' class="input" 
                
                    />
                </div>
            
                More details
                <hr></hr>

                <div class="inputfield">
                    <label>Date of birth</label>
                    <input type="text" name="dobdonor" value='12-10-1998' class="input" 
                    />
                </div>
                <div class="inputfield">
                <label>Blood Type</label>
                <div class="custom_select">
                    <select>
                        <option value="">Select</option>
                        <option value="Warehouse Manager">A+</option>
                        <option value="Store Manager">B+</option>
                        <option value="Return Item Manager">O+</option>
                        <option value="Delivery Manager">B-</option>
                    </select>
                </div>
                </div> 

                <div class="inputfield">
                    <label>Contact Number</label>
                    <input type="email" name="emaildonor" class="input" 
                
                    />
                </div>

                <div class="textfield">
                    <label for='address'>Address</label>
    
                    <textarea id='address'></textarea>
                    
                </div>


                
                <div class="modal-footer">
                <a href="/donorprofile" class="btn33">Save</a>
                 <a href="/donorprofile" class="btn34">Cancel</a>
                </div>
            </div>
        </div>
             </form>
        
              

              </div>
              
              <div class="col-sm-1 item rightdiv">
              
                <div className='proimg'>
               

                </div>
                mohan weerasinghe
                <a href="/donorEditProfile" className="btn36">Delete Profile</a>
                

              </div>
            </div>
        {/* <form>
        <div class="wrapper22">
            <div class="title22">
                Edit Profile
            </div>
            <div class="form22">

                <div class="inputfield">
                    <label>First Name</label>
                    <input type="text" name="fNamedonor" value='mohan' class="input"
                    />
                </div>

                <div class="inputfield">
                    <label>Last Name</label>
                    <input type="text" name="Lnamedonor" value='Weerasinghe' class="input"
                    />
                </div>

                <div class="inputfield">
                    <label>NIC</label>
                    <input type="text" name="nicdonor" value='983451438V' class="input"
                    />
                </div>
                
                <div class="inputfield">
                    <label>Email</label>
                    <input type="email" name="emaildonor" value ='wmohankavinda@gmail.com' class="input" 
                
                    />
                </div>
            
                More details
                <hr></hr>

                <div class="inputfield">
                    <label>Date of birth</label>
                    <input type="text" name="dobdonor" value='12-10-1998' class="input" 
                    />
                </div>
                <div class="inputfield">
                <label>Blood Type</label>
                <div class="custom_select">
                    <select>
                        <option value="">Select</option>
                        <option value="Warehouse Manager">A+</option>
                        <option value="Store Manager">B+</option>
                        <option value="Return Item Manager">O+</option>
                        <option value="Delivery Manager">B-</option>
                    </select>
                </div>
                </div> 

                <div class="inputfield">
                    <label>Contact Number</label>
                    <input type="email" name="emaildonor" class="input" 
                
                    />
                </div>

                <div class="textfield">
                    <label for='address'>Address</label>
    
                    <textarea id='address'></textarea>
                    
                </div>


                
                <div class="modal-footer">
                <a href="/donorprofile" class="btn33">Save</a>
                 <a href="/donorprofile" class="btn34">Cancel</a>
                </div>
            </div>
        </div>
        </form> */}
       

     </div>
    
  )
}

export default register