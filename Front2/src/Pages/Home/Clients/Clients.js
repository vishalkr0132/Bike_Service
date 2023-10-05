import React from "react";
import "./Clients.css";

const Clients = () => {
  return (
    <div>
      <section class="client-logo-area client-logo-one">
        <div class="section-title-two">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="content">
                  <h2 class="head fw-bold">Our Appreciated Clients</h2>
                  <p>
                  Using shorter terms like "our customers" or just "customers" can also certainly improve efficiency. These words are short and direct, expressing the idea without unnecessary embellishment. Employee voice is maintained through greater brevity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-3 col-6">
              <div class="single-client text-center">
                <img
                  src="https://cdn.ayroui.com/1.0/images/client-logo/graygrids.svg"
                  alt="Logo"
                />
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="single-client text-center">
                <img
                  src="https://cdn.ayroui.com/1.0/images/client-logo/uideck.svg"
                  alt="Logo"
                />
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="single-client text-center">
                <img
                  src="https://cdn.ayroui.com/1.0/images/client-logo/ayroui.svg"
                  alt="Logo"
                />
              </div>
            </div>
            <div class="col-md-3 col-6">
              <div class="single-client text-center">
                <img
                  src="https://cdn.ayroui.com/1.0/images/client-logo/lineicons.svg"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
