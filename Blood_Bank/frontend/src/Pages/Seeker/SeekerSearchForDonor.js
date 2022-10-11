import React from "react";
import "./SeekerSearchForDonor.css";

const SeekerSearchForDonor = () => {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
          integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
          crossorigin="anonymous"
        />
        <script
          crossorigin
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"
        ></script>
        <script
          crossorigin
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js"
        ></script>
        <script
          crossorigin
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
        ></script>
        <script
          crossorigin
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
                  <div class="col-md-2">
                    <div class="SSFDcard-inner p-3 d-flex flex-column align-items-center">
                      <img
                        src="https://www.blood.ca/sites/default/files/icon/blood-types_a-positive_blood-drop.jpg"
                        width="50"
                      />
                      <div class="text-center SSFDmg-text">
                        <span class="SSFDmg-text SSFDspan">A+</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="SSFDcard-inner p-3 d-flex flex-column align-items-center">
                      <img
                        src="https://www.blood.ca/sites/default/files/icon/blood-types_a-negative_blood-drop.jpg"
                        width="50"
                      />
                      <div class="text-center SSFDmg-text">
                        <span class="SSFDmg-text SSFDspan">A-</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="SSFDcard-inner p-3 d-flex flex-column align-items-center">
                      <img
                        src="https://www.blood.ca/sites/default/files/icon/blood-types_b-positive_blood-drop.jpg"
                        width="50"
                      />
                      <div class="text-center SSFDmg-text">
                        <span class="SSFDmg-text SSFDspan">B+</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="SSFDcard-inner p-3 d-flex flex-column align-items-center">
                      <img
                        src="https://www.blood.ca/sites/default/files/icon/blood-types_b-negative_blood-drop.jpg"
                        width="50"
                      />
                      <div class="text-center SSFDmg-text">
                        <span class="SSFDmg-text SSFDspan">B-</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="SSFDcard-inner p-3 d-flex flex-column align-items-center">
                      <img
                        src="https://www.blood.ca/sites/default/files/icon/blood-types_ab-positive_blood-drop.jpg"
                        width="50"
                      />
                      <div class="text-center SSFDmg-text">
                        <span class="SSFDmg-text SSFDspan">AB+</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="SSFDcard-inner p-3 d-flex flex-column align-items-center">
                      <img
                        src="https://www.blood.ca/sites/default/files/icon/blood-types_ab-negative_blood-drop.jpg"
                        width="50"
                      />
                      <div class="text-center SSFDmg-text">
                        <span class="SSFDmg-text SSFDspan">AB-</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="SSFDcard-inner p-3 d-flex flex-column align-items-center">
                      <img
                        src="https://www.blood.ca/sites/default/files/icon/blood-types_o-positive_blood-drop.jpg"
                        width="50"
                      />
                      <div class="text-center SSFDmg-text">
                        <span class="SSFDmg-text SSFDspan">O+</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="SSFDcard-inner p-3 d-flex flex-column align-items-center">
                      <img
                        src="https://www.blood.ca/sites/default/files/icon/blood-types_o-negative_blood-drop.jpg"
                        width="50"
                      />
                      <div class="text-center SSFDmg-text">
                        <span class="SSFDmg-text SSFDspan">O-</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default SeekerSearchForDonor;
