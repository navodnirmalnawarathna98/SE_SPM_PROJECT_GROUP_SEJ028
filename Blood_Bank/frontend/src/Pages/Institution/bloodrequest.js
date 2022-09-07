import React from 'react'
import "./bloodrequest.css"


const bloodrequest = () => {
    return (
    <div>
        <form>
        <div class="wrapper22">
            <div class="title22">
                Add Blood Request Form
            </div>
            <div class="form22">
                <div class="inputfield">
                    <label>Full Name</label>
                    <input type="text" name="editempname" class="input"
                    />
                </div>
                <div class="inputfield">
                    <label>Email</label>
                    <input type="email" name="editnic" class="input" 
                
                    />
                </div>
                <div class="inputfield">
                    <label>Contact No</label>
                    <input type="number" name="editdob" class="input" 
                
                    />
                </div>
                <div class="inputfield">
                <label>Blood Group</label>
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
                    <label>Blood Amount</label>
                    <input type="number" name="editaddress" class="input" 
                    
                    />
                </div>
                <div class="inputfield">
                    <label>Due Date</label>
                    <input type="date" name="editcontactno" class="input" 
                
                    />
                </div>
                <div class="inputfield">
                <label>Description</label>
                <textarea type="text" name="editcontactno" class="input"></textarea>
                </div>
                <div class="modal-footer">
                <a href="/" class="btn33">Submit</a>
                 <a href="/" class="btn33">Cancel</a>
                </div>
            </div>
        </div>
        </form> 
    </div>
  )
}

export default bloodrequest