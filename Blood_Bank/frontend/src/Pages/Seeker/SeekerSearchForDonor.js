import React, { useState } from "react";
import "./SeekerSearchForDonor.css";
import axios from "axios";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const SeekerSearchForDonor = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  //first try to fetch filtered data from database

  /*const fetchDonors = (query) => {
    fetch(`http://localhost:8070/donorUser/searchdonor`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        console.log(results);
      });
  };*/

  const downloadData = () => {
    const pdf = new jsPDF();
    pdf.autoTable({ html: "#table" });
    pdf.save("Blood Donors list");
  };

  function getdonors() {
    axios
      .get(`http://localhost:8070/donorUser/searchFordonor/?q=${query}`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        console.log(users);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
          integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
          crossOrigin="anonymous"
        />
        <script
          crossOrigin
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"
        ></script>
        <script
          crossorigin
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js"
        ></script>
        <script
          crossOrigin
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
        ></script>
        <script
          crossOrigin
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></script>
      </head>

      <body class="SSFDbody">
        <div>
          <div class="row d-flex justify-content-center">
            <div class="col-md-9">
              <div class="SSFDcard p-4 mt-3">
                <h3 class="heading mt-5 text-center">Search For Blood Donor</h3>

                <div class="row mt-4 g-1 px-4 mb-5">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Input your transaction ID here"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                    />

                    <div></div>
                    <button
                      class="btn btn-outline-secondary"
                      type="submit"
                      id="button-addon2"
                      onClick={getdonors}
                    >
                      Search
                    </button>
                  </div>

                  <div class="col-md-2">
                    <div
                      class="SSFDcard-inner p-3 d-flex flex-column align-items-center"
                      onClick={() => {
                        setQuery("A");
                        getdonors();
                      }}
                    >
                      <img
                        src="https://media.istockphoto.com/vectors/blood-type-a-vector-medical-icon-for-health-blood-donation-a-antigens-vector-id1288975859?s=612x612"
                        width="50"
                      />
                      <div class="text-center SSFDmg-text">
                        <span class="SSFDmg-text SSFDspan">A</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-2">
                    <div
                      class="SSFDcard-inner p-3 d-flex flex-column align-items-center"
                      onClick={() => {
                        setQuery("B");
                        getdonors();
                      }}
                    >
                      <img
                        src="https://media.istockphoto.com/vectors/blood-type-b-vector-medical-icon-for-health-blood-donation-b-antigens-vector-id1289069992?s=612x612"
                        width="50"
                      />
                      <div class="text-center SSFDmg-text">
                        <span class="SSFDmg-text SSFDspan">B</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-2">
                    <div
                      class="SSFDcard-inner p-3 d-flex flex-column align-items-center"
                      onClick={() => {
                        setQuery("AB");
                        getdonors();
                      }}
                    >
                      <img
                        src="https://media.istockphoto.com/vectors/blood-type-ab-vector-medical-icon-for-health-blood-donation-a-and-b-vector-id1289140124?s=612x612"
                        width="50"
                      />
                      <div class="text-center SSFDmg-text">
                        <span class="SSFDmg-text SSFDspan">AB</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-2">
                    <div
                      class="SSFDcard-inner p-3 d-flex flex-column align-items-center"
                      onClick={() => {
                        setQuery("O");
                        getdonors();
                      }}
                    >
                      <img
                        src="https://media.istockphoto.com/vectors/blood-type-0-vector-medical-icon-for-health-blood-donation-no-red-vector-id1289271228?s=612x612"
                        width="50"
                      />
                      <div class="text-center SSFDmg-text">
                        <span class="SSFDmg-text SSFDspan">O</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-content-center">
          <br />
          <br />
          <figure className="text-center">
            <blockquote className=" blockquote bg-secondary text-white">
              <p className="text-white display-4">Donor List</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              <cite title="Source Title"></cite>
            </figcaption>
          </figure>

          <table
            className="table table-success table-striped table-hover"
            id="table"
          >
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact number</th>
                <th scope="col">Blood Type</th>
              </tr>
            </thead>
            <tbody>
              {users.map((us) => (
                <tr key={us._id}>
                  <td>{us.firstName}</td>
                  <td>{us.email}</td>
                  <td>{us.contactnumber}</td>
                  <td>{us.bloodtype}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="download-data-div">
            <button
              className="btn btn-secondary"
              onClick={() => {
                downloadData();
              }}
            >
              Download Payment Data as PDF
            </button>
          </div>
        </div>
      </body>
    </>
  );
};

export default SeekerSearchForDonor;
