import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div>
      <section class="testimonial-one">
        <div class="section-title-seven">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="section-title align-center">
                  <span> Testimonial </span>
                  <h2 class="fw-bold">What Our Clients Say</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="testimonial-one-wrapper">
            <div class="row justify-content-center">
              <div class="col-md-9 col-lg-12">
                <div class="row testimonial-one-active">
                  <div class="col-lg-4">
                    <div class="single-testimonial text-center">
                      <div class="testimonial-image">
                        <img
                          src="https://cdn.ayroui.com/1.0/images/testimonial/author-1.jpg"
                          alt="Author"
                        />
                        <div class="quote-icon">
                          <i class="lni lni-quotation"></i>
                        </div>
                      </div>
                      <div class="testimonial-content">
                        <p class="text">
                          I had my bike serviced at{" "}
                          <b>Your Bike Service Shop's Name</b>, and it was a
                          fantastic experience. Their team's professionalism and
                          expertise really stood out.
                        </p>
                        <h6 class="author-name">Moriya Khan</h6>
                        <span class="sub-title">Erode, Tamilnadu</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="single-testimonial text-center">
                      <div class="testimonial-image">
                        <img
                          src="https://cdn.ayroui.com/1.0/images/testimonial/author-2.jpg"
                          alt="Author"
                        />
                        <div class="quote-icon">
                          <i class="lni lni-quotation"></i>
                        </div>
                      </div>
                      <div class="testimonial-content">
                        <p class="text">
                          I recently took my bike to{" "}
                          <b>Your Bike Service Shop's Name</b> for maintenance,
                          and I'm extremely satisfied with the results. Their
                          team's knowledge and attention to detail are
                          top-notch.
                        </p>
                        <h6 class="author-name">Razal Siddiq</h6>
                        <span class="sub-title">Coimbatore, Tamilnadu</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="single-testimonial text-center">
                      <div class="testimonial-image">
                        <img
                          src="https://cdn.ayroui.com/1.0/images/testimonial/author-3.jpg"
                          alt="Author"
                        />
                        <div class="quote-icon">
                          <i class="lni lni-quotation"></i>
                        </div>
                      </div>
                      <div class="testimonial-content">
                        <p class="text">
                          My experience with Your Bike Service Shop's has firmly
                          tied me to their exceptional bike service. From the
                          moment I walked in, it was clear is dedicated to
                          professionalism and expertise.
                        </p>
                        <h6 class="author-name">Krish raj</h6>
                        <span class="sub-title">Tirppur, UIdeck</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
