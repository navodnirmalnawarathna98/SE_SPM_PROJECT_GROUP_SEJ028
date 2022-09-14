import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const TemporyLogin = () => {
  const navigate = useNavigate();

  const [_id, set_id] = useState("");

  const toComponentB = () => {
    navigate("/SeekerProfile", { state: { _id } });
  };
  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div class="text-cente wrapper1">
        <form>
          <div class="form-outline mb-4 ">
            <input
              type="email"
              id="form2Example1"
              class="form-control"
              onChange={(e) => {
                set_id(e.target.value);
              }}
            />
            <label class="form-label" for="form2Example1">
              Enter temporary ID For Login
            </label>
          </div>

          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label class="form-check-label fs-5" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div class="col">
              <a href="#!" class="fs-5">
                <div> </div>
                Forgot password?
              </a>
            </div>
          </div>

          <div class="w-100">
            <button
              type="button"
              class="btn btn-primary btn-block mb-4"
              onClick={() => {
                toComponentB();
              }}
            >
              <div class="fs-4">Sign in</div>
            </button>
          </div>

          <div class="text-center">
            <p>
              Not a member?
              <a href="/seekerRegister" class="fs-4">
                <div></div>
                Register
              </a>
            </p>
            <p class="fs-4">or sign up with:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TemporyLogin;
