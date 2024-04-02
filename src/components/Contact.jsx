import React from "react";
import "../Contact.css";

const Contact = () => {
  return (
    <>
      <div className="p-lg-5 bg-dark">
        <section
          class="contact p-5 align-content-center justify-content-center d-sm-grid "
          id="contact"
        >
          <div class="contact-content section-content">
            <p class="section-subtitle text-danger">--- Contact</p>

            <h2 class="h3 section-title fw-bold display-6">
              Have You Any Project? Please Drop a Message
            </h2>

            <p class="section-text">
              Get in touch and let me know how i can help. Fill out the form and
              i'll be in touch as soon as possible.
            </p>

            <ul class="contact-list">
              <li class="contact-list-item">
                <div class="contact-item-icon">
                  <i class="fa fa-map-marker"></i>
                </div>

                <div class="wrapper m-0">
                  <h3 class="h4 contact-item-title">Address:</h3>
                  <address class="contact-info">
                    Ogbomosho, Oyo state, Nig.
                  </address>
                </div>
              </li>

              <li class="contact-list-item">
                <div class="contact-item-icon">
                  <i class="fa fa-phone"></i>
                </div>

                <div class="wrapper m-0">
                  <h3 class="h4 contact-item-title my-0">Phone:</h3>
                  <a href="tel:08103739480" class="contact-info">
                    (234) 810 373 9480
                  </a>

                  <a href="tel:08159725758" class="contact-info">
                    (234) 815 972 5758
                  </a>
                </div>
              </li>

              <li class="contact-list-item">
                <div class="contact-item-icon">
                  <i class="fa fa-envelope"></i>
                </div>

                <div class="wrapper m-0">
                  <h3 class="h4 contact-item-title">Email:</h3>

                  <a href="simeonkenny66@gmail.com" class="contact-info">
                    simeonkenny66@gmail.com
                  </a>
                </div>
              </li>

              <li>
                <ul className="social-links py-5 m-0">
                  <li>
                    <a href="https://github.com/deeminentcoder">
                      <span class="fa-brands fa-github github"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/kehinde-olaleye-307229123/">
                      <span class="fa-brands fa-linkedin linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/DeEminentCoder">
                      <span class="fa-brands fa-twitter twitter"></span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <form action="" class="contact-form rounded-5 p-5">
            <div class="form-wrapper">
              <label for="name" class="form-label">
                <i class="fa fa-user"></i> Name
              </label>

              <div class="input-wrapper">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="ex. James Akin"
                  class="input-field form-control"
                ></input>
              </div>
            </div>

            <div class="form-wrapper">
              <label for="email" class="form-label">
                <i class="fa fa-envelope"></i> Email
              </label>

              <div class="input-wrapper">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="ex. Jamesakin10@mail.com"
                  class="input-field form-control"
                ></input>
              </div>
            </div>

            <div class="form-wrapper">
              <label for="phone" class="form-label">
                <i class="fa fa-phone"></i> Phone
              </label>

              <div class="input-wrapper">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  placeholder="Phone Number"
                  class="input-field form-control"
                ></input>
              </div>
            </div>

            <div class="form-wrapper">
              <label for="message" class="form-label">
                <i class="fa fa-edit"></i> Message
              </label>

              <div class="input-wrapper">
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Write message..."
                  class="input-field form-control"
                ></textarea>
              </div>
            </div>
            <button
              class="btn btn-success bg-gradient w-100 send-button text-center"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div class="alt-send-button text-center ">
                <i class="fa fa-paper-plane"></i>
                <span class="send-text">SEND</span>
              </div>
            </button>
          </form>
        </section>
      </div>

      {/* FOOTER */}

      <footer class="footer bg-dark-subtle py-3 m-0">
        <div class="container d-flex align-content-center justify-content-between ">
          <a className="navbar-brand" href="#">
            <div className="" id="logo">
              <span className="h4">D</span>
              <span className="h4">e</span>
              <span className="h4">E</span>
              <span className="h4">m</span>
              <span className="h4">i</span>
              <span className="h4">n</span>
              <span className="h4">e</span>
              <span className="h4">n</span>
              <span className="h4">t</span>
              <span className="h4">C</span>
              <span className="h4">o</span>
              <span className="h4">d</span>
              <span className="h4">e</span>
              <span className="h4">r</span>
            </div>
          </a>
          <p class="copyright my-0">
            &copy; 2024{" "}
            <a href="#" className="link-dark text-decoration-none ">
              Kehinde
            </a>
            . I'm the CSS to your ⟨/HTML⟩
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
