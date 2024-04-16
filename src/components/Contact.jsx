import React from "react";
import "../Contact.css";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="p-lg-5 bg-dark">
        <section
          className="hidden contact p-5 align-content-center justify-content-center d-sm-grid "
          id="contact"
        >
          <div className="contact-content section-content">
            <p className="section-subtitle text-danger">--- Contact</p>

            <h2 className="h3 section-title fw-bold display-6">
              Have You Any Project? Please Drop a Message
            </h2>

            <p className="section-text">
              Get in touch and let me know how i can help. Fill out the form and
              i'll be in touch as soon as possible.
            </p>

            <ul className="contact-list">
              <li className="contact-list-item">
                <div className="contact-item-icon">
                  <i className="fa fa-map-marker"></i>
                </div>

                <div className="wrapper m-0">
                  <h3 className="h4 contact-item-title">Address:</h3>
                  <address className="contact-info">
                    Ogbomosho, Oyo state, Nig.
                  </address>
                </div>
              </li>

              <li className="contact-list-item">
                <div className="contact-item-icon">
                  <i className="fa fa-phone"></i>
                </div>

                <div className="wrapper m-0">
                  <h3 className="h4 contact-item-title my-0">Phone:</h3>
                  <a href="tel:08103739480" className="contact-info">
                    (234) 810 373 9480
                  </a>

                  <a href="tel:08159725758" className="contact-info">
                    (234) 815 972 5758
                  </a>
                </div>
              </li>

              <li className="contact-list-item">
                <div className="contact-item-icon">
                  <i className="fa fa-envelope"></i>
                </div>

                <div className="wrapper m-0">
                  <h3 className="h4 contact-item-title">Email:</h3>

                  <a href="simeonkenny66@gmail.com" className="contact-info">
                    simeonkenny66@gmail.com
                  </a>
                </div>
              </li>

              <li>
                <ul className="social-links py-5 m-0 px-0  d-flex justify-content-center align-items-center">
                  <li className="hidden">
                    <a href="https://github.com/deeminentcoder">
                      <span className="fa-brands fa-github github"></span>
                    </a>
                  </li>
                  <li className="hidden">
                    <a href="https://www.linkedin.com/in/kehinde-olaleye-307229123/">
                      <span className="fa-brands fa-linkedin linkedin"></span>
                    </a>
                  </li>
                  <li className="hidden">
                    <a href="https://twitter.com/DeEminentCoder">
                      <span className="fa-brands fa-twitter twitter"></span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <form action="" className="hidden contact-form rounded-5 p-5">
            <div className="form-wrapper">
              <label for="name" className="form-label">
                <i className="fa fa-user"></i> Name
              </label>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="ex. James Akin"
                  className="input-field form-control"
                ></input>
              </div>
            </div>

            <div className="form-wrapper">
              <label for="email" className="form-label">
                <i className="fa fa-envelope"></i> Email
              </label>

              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="ex. Jamesakin10@mail.com"
                  className="input-field form-control"
                ></input>
              </div>
            </div>

            <div className="form-wrapper">
              <label for="phone" className="form-label">
                <i className="fa fa-phone"></i> Phone
              </label>

              <div className="input-wrapper">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  placeholder="Phone Number"
                  className="input-field form-control"
                ></input>
              </div>
            </div>

            <div className="form-wrapper">
              <label for="message" className="form-label">
                <i className="fa fa-edit"></i> Message
              </label>

              <div className="input-wrapper">
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Write message..."
                  className="input-field form-control"
                ></textarea>
              </div>
            </div>
            <button
              className="btn btn-success bg-gradient w-100 send-button text-center"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button text-center ">
                <i className="fa fa-paper-plane"></i>
                <span className="send-text">SEND</span>
              </div>
            </button>
          </form>
        </section>
      </div>

      {/* FOOTER */}

      <footer className="footer bg-dark-subtle py-3 m-0">
        <div className="container d-flex align-content-center justify-content-between ">
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
          <p className="copyright my-0">
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
