import React from 'react'
import "./insRegForm.css"

const InsRegForm = () => {
  return (
    <div>
    <form >
        <div class="wrapper1">
         <div class="title2">
           Register Form
           </div>
           <div class="form3">
             <div class="inputfield">
                 <label>Institution Name</label>
                 <input type="text" name="editempname" class="input"/>
              </div>
         
 
              <div class="inputfield">
                 <label>Address</label>
                 <input type="text" name="editnic" class="input"  />
              </div>
           
 
              <div class="inputfield">
                 <label>Email</label>
                 <input type="email" name="editdob" class="input" />
              </div>
 
              <div class="inputfield">
                 <label>Contact No</label>
                 <input type="number" name="editcontactno" class="input"/>
              </div>
          
             
              <fieldset>
                <div class="some-class">
                  <input type="radio" class="radio" name="x" value="y" id="y" />
                  <label for="y">Goverment</label>
                  <input type="radio" class="radio" name="x" value="z" id="z" />
                  <label for="z">Private</label>
                </div>
              </fieldset>
              <br/>
 
              <div class="inputfield">
                 <label>Institution Type</label>
                 <div class="custom_select">
                   <select>
                       <option value="">Select</option>
                       <option value="Warehouse Manager">Warehouse Manager</option>
                       <option value="Store Manager">Store Manager</option>
                       <option value="Return Item Manager">Return Item Manager</option>
                       <option value="Delivery Manager">Delivery Manager</option>
                   </select>
                 </div>
              </div> 

 
              <div class="inputfield">
                 <label>Date Of Registration</label>
                 <input type="text" name="editusername" class="input"/>
              </div>
             
              <div class="inputfield">
                <label>Residential  Details</label>
                <u/>
             </div>
 
             <div class="inputfield">
                <label>Province</label>
                <div class="custom_select">
                  <select>
                      <option value="">Select</option>
                      <option value="Warehouse Manager">Warehouse Manager</option>
                      <option value="Store Manager">Store Manager</option>
                      <option value="Return Item Manager">Return Item Manager</option>
                      <option value="Delivery Manager">Delivery Manager</option>
                  </select>
                </div>
             </div>
            
              <div class="inputfield">
                <label>Distric</label>
                <input type="password" name="editpassword" class="input" />
             </div>
 
               <div class="modal-footer">
                 <a href="/" class="btn4">Submit</a>
                 <a href="/" class="btn4">Cancel</a>
             </div>
           </div>
        </div>
 
    </form> 
    </div>
  )
}

export default InsRegForm