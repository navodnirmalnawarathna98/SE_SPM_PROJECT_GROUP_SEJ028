import React, { useState } from "react";
import img1 from "../../images/seeker/seekerProfile.png";
import img2 from "../../images/seeker/profileBackground.jpg";
//importing use location to catch the ID
import { useLocation } from "react-router-dom";
import axios from "axios";
//importing useNavigate to link and navigate with ID
import { Link, useNavigate } from "react-router-dom";

const SeekerProfile = () => {
  //getting ID from login interface
  const location = useLocation();
  let id = location.state._id;

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

  //function that get user profile data

  const getSeekerData = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:8070/seeker/get/${id}`)
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

        setFirstName(firstName);
        setLastName(lastName);
        setNicNumber(nicNumber);
        setGender(gender);
        setDateOfBirth(dateOfBirth.substring(0, 10));
        setBloodType(bloodType);
        setContactNumber(contactNumber);
        setEmail(email);
        setProvince(province);
        setDistrict(district);
      })
      .catch((error) => console.log(error));
  };

  //function that delete user profile

  const userDelete = () => {
    console.log(id);
    axios
      .delete(`http://localhost:8070/seeker/delete/${id}`)
      .then((res) => console.log("Deleted!!!!", res))
      .catch((err) => console.log(err));

    navigate("/templogin");
  };

  //sending ID to Profile update form
  const navigate = useNavigate();

  const toComponentC = () => {
    navigate("/seekerprofileupdate", { state: { id } });
  };

  //signout setter

  const signout = () => {
    id = "0a";
    alert("signed out");
    console.log("signed out");
    navigate("/templogin");
  };

  return (
    <>
      <div onLoad={getSeekerData}>
        <div>
          {/* header section starts */}
          <header class="header">
            <a href="#" class="logo">
              <i class="fa-solid fa-droplet"></i> Blood Bank{" "}
            </a>
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
              <input
                type="search"
                id="search-box"
                placeholder="search here..."
              ></input>
              <label for="search-box" class="fas fa-search"></label>
            </form>
          </header>
          {/* header section starts */}
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div>
          <h1 class="text-center fw-bolder">Seeker Profile</h1>
        </div>
        <div class="position-relative">
          <div class="position-absolute top-0 end-0">
            <div className="float-right">
              <img
                src={img1}
                class="rounded-circle w-25 p-3 float-right"
                alt=""
              />
            </div>
            <br />

            <div className="float-right">
              <button
                type="button"
                class="btn btn-danger  "
                onClick={userDelete}
              >
                Delete profile
              </button>
            </div>
            <div>
              <br />
            </div>
            <br />
            <div className="float-right">
              <button type="button" class="btn " onClick={signout}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="wrapper1">
            <br />
            <h2>Name</h2>
            <p class="fs-4">
              {firstName} {lastName}
            </p>
            <br />
            <h2>NIC</h2>
            <p class="fs-4">{nicNumber}</p>
            <br />
            <h2>Date Of Birth</h2>
            <p class="fs-4">{dateOfBirth}</p>
            <br />
            <h2>Blood Type</h2>
            <p class="fs-4">{bloodType}</p>
            <br />
            <h2>Residential Details</h2>
            <p class="fs-4">
              {province} , {district}
            </p>
            <br />
            <h2>Email</h2>
            <p class="fs-4">{email}</p>
            <br />
            <h2>Contact Number</h2>
            <p class="fs-4">{contactNumber}</p>
            <br />
            <h2>Gender</h2>
            <p class="fs-4">{gender}</p>
            <br />
            <br />
            <br />
            <br />
            <button type="button" class="btn btn-danger ">
              Search Donors
            </button>

            <button type="button" class="btn btn-danger float-right">
              Blood Request
            </button>

            <br />
            <br />

            <div class="d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-danger d-flex justify-content-center"
                onClick={() => {
                  toComponentC();
                }}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeekerProfile;
