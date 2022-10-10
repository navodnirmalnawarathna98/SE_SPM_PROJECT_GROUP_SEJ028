import React, { useState, useEffect } from "react";

//importing use location to catch the ID
import { useLocation } from "react-router-dom";
import axios from "axios";

const SeekerProfileUpdate = () => {
  //catching ID comming with the Link
  const location = useLocation();
  let userId = location.state.id;
  console.log(userId);

  let a = 3;
  let tester = 0;

  //veriables for store data from database
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
  const [seeker, setSeeker] = useState([]);

  //veriables for store data from The form

  const [firstNameForm, setFirstNameForm] = useState("");
  const [lastNameForm, setLastNameForm] = useState("");
  const [nicNumberForm, setNicNumberForm] = useState("");
  const [genderForm, setGenderForm] = useState("");
  const [dateOfBirthForm, setDateOfBirthForm] = useState("");
  const [bloodTypeForm, setBloodTypeForm] = useState("");
  const [contactNumberForm, setContactNumberForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [districtForm, setDistrictForm] = useState("");
  const [provinceForm, setProvinceForm] = useState("");

  //Calling get API and get seeker data to load in the form

  const getSeekerData = () => {
    axios
      .get(`http://localhost:8070/seeker/get/${userId}`)
      .then((res) => {
        setSeeker(res.data.seekerRecord);
        console.log(res.data.seekerRecord);
        const {
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
        } = res.data.seekerRecord;

        console.log(firstName);

        setFirstNameForm(firstName);
        setLastNameForm(lastName);
        setNicNumberForm(nicNumber);
        setGenderForm(gender);
        setDateOfBirthForm(dateOfBirth.substring(0, 10));
        setBloodTypeForm(bloodType);
        setContactNumberForm(contactNumber);
        setEmailForm(email);
        setProvinceForm(province);
        setDistrictForm(district);

        //setting values to update varibles

        setFirstName(firstName);
        setLastName(lastName);
        setNicNumber(nicNumber);
        setGender(gender);
        setDateOfBirth(dateOfBirth);
        setBloodType(bloodType);
        setContactNumber(contactNumber);
        setEmail(email);
        setProvince(province);
        setDistrict(district);
      })
      .catch((error) => console.log(error));
  };

  //calling API for update entry

  function updateData(e) {
    e.preventDefault();

    alert("testing purpose senData function is  called");

    const updatedSeeker = {
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
      .put(`http://localhost:8070/seeker/update/${userId}`, updatedSeeker)
      .then(() => {
        alert("Seeker profile updated registerd");

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

    console.log({ updatedSeeker });
  }

  //using effects to load get function only once

  useEffect(() => {
    getSeekerData(); // this will fire only on first render
  }, []);

  return (
    <>
      <body>
        <div>
          <div>
            <h1 class="text-center fw-bolder">
              Enter Details to Update Your Profile
            </h1>
          </div>
          <div class="d-flex justify-content-center">
            <form onSubmit={updateData}>
              <div class="wrapper1">
                <div class="form3">
                  <div class="inputfield">
                    <label>First Name</label>
                    <input
                      defaultValue={firstNameForm}
                      type="text"
                      name="firstName"
                      class="input"
                      pattern="[A-Za-z]{2,10}"
                      title="first name should only contain letters and number of letters should be between 2 to 10  . e.g. john"
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
                      defaultValue={lastNameForm}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>

                  <div class="inputfield">
                    <label>NIC Number</label>
                    <input
                      type="text"
                      defaultValue={nicNumberForm}
                      name="nicNumber"
                      class="input"
                      pattern="[Vv0-9]{10}"
                      title="NIC number should contain numbers and V-v letters and number of characters should be 10 only . e.g. 123456789V"
                      onChange={(e) => {
                        setNicNumber(e.target.value);
                      }}
                    />
                  </div>

                  <div class="inputfield">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      defaultValue={dateOfBirthForm}
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
                        <option value={bloodTypeForm}>{bloodTypeForm}</option>
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

                  <h4>Residential Details</h4>

                  <div class="inputfield">
                    <label>Province</label>
                    <div class="custom_select">
                      <select
                        onChange={(e) => {
                          setProvince(e.target.value);
                        }}
                      >
                        <option value={provinceForm}>{provinceForm}</option>
                        <option value="Central Sri Lanka">
                          Central Sri Lanka
                        </option>
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
                        <option value={districtForm}>{districtForm}</option>
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

                  <hr />

                  <h4>Contact Information</h4>

                  <div class="inputfield">
                    <label>Email</label>
                    <input
                      type="email"
                      defaultValue={emailForm}
                      name="email"
                      class="input"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      title="email should contain special charachters like @ and any other required characters. e.g. 1234567890"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  <div class="inputfield">
                    <label>Contact Number</label>
                    <input
                      type="text"
                      defaultValue={contactNumberForm}
                      name="contactNumber"
                      class="input"
                      pattern="[0-9]{11}"
                      title="contact number should only contain numbers only . e.g. 1234567890"
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                      }}
                    />
                  </div>

                  <hr />

                  <div class="inputfield">
                    <label>Gender</label>
                    <div class="custom_select">
                      <select
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      >
                        <option value={genderForm}>{genderForm}</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Custom">Custom</option>
                      </select>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button type="submit" className="btn-danger float-right">
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
      </body>
    </>
  );
};

export default SeekerProfileUpdate;
