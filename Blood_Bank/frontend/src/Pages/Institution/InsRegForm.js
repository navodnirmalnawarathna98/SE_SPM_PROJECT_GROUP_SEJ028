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
              <input type="text" name="name" class="input" />
            </div>


            <div class="inputfield">
              <label>Address</label>
              <input type="text" name="address" class="input" />
            </div>


            <div class="inputfield">
              <label>Email</label>
              <input type="email" name="email" class="input" />
            </div>

            <div class="inputfield">
              <label>Contact No</label>
              <input type="number" name="contact_no" class="input" />
            </div>

            {/* <fieldset>
              <div class="some-class">
                <input type="radio" class="radio" name="x" value="y" id="y" />
                <label for="y"><h3>Goverment</h3></label>
                <input type="radio" class="radio" name="x" value="z" id="z" />
                <label for="z"><h3>Private</h3></label>
              </div>
            </fieldset> */}

            <div class="inputfield">
              <label>Institution Type</label>
              <div class="custom_select">
                <select>
                  <option value="">Select</option>
                  <option value="Warehouse Manager">Goverment</option>
                  <option value="Store Manager">Private</option>
                </select>
              </div>
            </div>


            <div class="inputfield">
              <label>Date Of Registration</label>
              <input type="date" name="editusername" class="input" />
            </div>

            <div class="inputfield">
              <label>Residential  Details</label>
              <u />
            </div>

            <div class="inputfield">
              <label>Province</label>
              <div class="custom_select">
                <select>
                  <option value="">Select</option>
                  <option value="central_province">Central Province</option>
                  <option value="eastern_province">Eastern Province</option>
                  <option value="northern_province">Northern Province</option>
                  <option value="southern_province">Southern Province</option>
                  <option value="western_province">Western Province</option>
                  <option value="north_western_province">North Western Province</option>
                  <option value="north_central_province">North Central Province</option>
                  <option value="uva_province">Uva Province</option>
                  <option value="sabaragamuwa_province">Sabaragamuwa Province</option>
                </select>
              </div>
            </div>

            <div class="inputfield">
              <label>Distric</label>
              <div class="custom_select">
                <select>
                  <option value="">Select</option>
                  <option value="Colombo">Colombo</option>
                  <option value="Gampaha">Gampaha</option>
                  <option value="Kalutara">Kalutara</option>
                  <option value="Kandy">Kandy</option>
                  <option value="Matale">Matale</option>
                  <option value="Galle"> Galle</option>
                  <option value="Matara">Matara</option>
                  <option value="Hambantota">Hambantota</option>
                  <option value="Jaffna">Jaffna</option>
                  <option value="Kilinochchi">Kilinochchi</option>
                  <option value="Mannar">Mannar</option>
                  <option value="Vavuniya">Vavuniya</option>
                  <option value="Mullaitivu">Mullaitivu</option>
                  <option value="Batticaloa">Batticaloa</option>
                  <option value="Trincomalee">Trincomalee</option>
                  <option value="Anuradhapura">Anuradhapura</option>
                  <option value="Polonnaruwa">Polonnaruwa</option>
                  <option value="Moneragala">Moneragala</option>
                </select>
              </div>
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