import React, { useState } from "react";
import axios from "axios";

const SeekerRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");

  function sendData(e) {
    e.preventDefault();

    alert("testing purpose senData function is  called");

    const newSeeker = {
      firstName,
      lastName,
      nicNumber,
      gender,
      dateOfBirth,
      bloodType,
      contactNumber,
      email,
      province,
      district,
    };
    axios
      .post("http://localhost:8070/seeker/add", newSeeker)
      .then(() => {
        alert("Seeker registerd");

        setFirstName("");
        setLastName("");
        setNicNumber("");
        setGender("");
        setDateOfBirth("");
        setBloodType("");
        setContactNumber("");
        setEmail("");
        setProvince("");
        setDistrict("");
      })
      .catch((err) => {
        alert(err);
      });

    console.log({ newSeeker });
  }

  return (
    <div>
      <div>
        <h1 class="text-center fw-bolder">REGISTER</h1>
      </div>
      <div class="d-flex justify-content-center">
        <form onSubmit={sendData}>
          <div class="wrapper1">
            <div class="form3">
              <div class="inputfield">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  class="input"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>

              <div class="inputfield">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  class="input"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>

              <div class="inputfield">
                <label>NIC Number</label>
                <input
                  type="text"
                  name="nicNumber"
                  class="input"
                  onChange={(e) => {
                    setNicNumber(e.target.value);
                  }}
                />
              </div>

              <div class="inputfield">
                <label>Gender</label>
                <div class="custom_select">
                  <select
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>

              <div class="inputfield">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  class="input"
                  onChange={(e) => {
                    setDateOfBirth(e.target.value);
                  }}
                />
              </div>

              <div class="inputfield">
                <label>Blood Type</label>
                <div class="custom_select">
                  <select
                    onChange={(e) => {
                      setBloodType(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A</option>
                    <option value="B+">B+</option>
                    <option value="B-">B</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>

              <hr />

              <h4>Contact Information</h4>

              <div class="inputfield">
                <label>Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  class="input"
                  onChange={(e) => {
                    setContactNumber(e.target.value);
                  }}
                />
              </div>

              <div class="inputfield">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  class="input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <hr />

              <h4>Residential Details</h4>

              <div class="inputfield">
                <label>Province</label>
                <div class="custom_select">
                  <select
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="Central Sri Lanka">Central Sri Lanka</option>
                    <option value="East Sri Lanka">East Sri Lanka</option>
                    <option value="Northcentral Sri Lanka">
                      Northcentral Sri Lanka
                    </option>
                    <option value="North Sri Lanka">North Sri Lanka</option>
                    <option value="Northwest Sri Lanka">
                      Northwest Sri Lanka
                    </option>
                    <option value="Sabaragamuwa Sri Lanka">
                      {" "}
                      Sabaragamuwa Sri Lanaka
                    </option>
                    <option value="South Sri Lanka">South Sri Lanka</option>
                    <option value="Uva Sri Lanka">Uva Sri Lanka</option>
                    <option value="West Sri Lanka">West Sri Lanka</option>
                  </select>
                </div>
              </div>

              <div class="inputfield">
                <label>District</label>
                <div class="custom_select">
                  <select
                    onChange={(e) => {
                      setDistrict(e.target.value);
                    }}
                  >
                    <option value="">Select</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Gampaha">Gampaha</option>
                    <option value="Kalutara">Kalutara</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Matale">Matale</option>
                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                    <option value="Galle">Galle</option>
                    <option value="Hambantota">Hambantota</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Kilinochchi">Kilinochchi</option>
                    <option value="Vavuniya">Vavuniya</option>
                    <option value="Mullaitivu">Mullaitivu</option>
                    <option value="Batticaloa">Batticaloa</option>
                    <option value="Ampara">Ampara</option>
                    <option value="Trincomalee">Trincomalee</option>
                    <option value="Kurunegala">Kurunegala</option>
                    <option value="Puttalam">Puttalam</option>
                    <option value="Anuradhapura">Anuradhapura</option>
                    <option value="Polonnaruwa">Polonnaruwa</option>
                    <option value="Badulla">Matara</option>
                    <option value="Moneragala">Moneragala</option>
                    <option value="Ratnapura">Ratnapura</option>
                    <option value="Kegalle">Kegalle</option>
                  </select>
                </div>
              </div>

              <div class="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <a href="/" class="btn4">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SeekerRegister;
