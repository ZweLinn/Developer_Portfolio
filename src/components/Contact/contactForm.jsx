import React from "react";

const ContactForm = () => {
  return (
    <section className="container-fluid bg-dark  pb-5" id="contact">
      <div className="row text-center pt-5">
        <h2 className="words text-light fs-3">Contact</h2>
      </div>

      <div className="row">
        {/* Contact Left */}
        <div className="col-md-5 ps-5 mt-3 align-content-center">
          <div className="phone words d-flex justify-content-center mb-2">
            <div>
              <div className="words text-light">  <i className="fa-solid fa-phone text-primary me-3"></i>Phone</div>
              <div>+66 99486 2943</div>
            </div>
          </div>

          <div className="email words d-flex justify-content-center mb-2">
            <div className="me-3">
              <div className="words text-light"> <i className="fa-solid fa-envelope text-primary me-3"></i>Email</div>
              <div>zewlinnmg@gmail.com</div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="row mt-3">
            <ul className="social_media d-flex gap-3 fs-5 justify-content-center list-unstyled">
              <li>
                <a className="nav-link text-light" href="https://www.facebook.com/zwe.l.maung.562" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="nav-link text-light" href="https://github.com/ZweLinn" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a className="nav-link text-light" href="https://x.com/Yuno59515218" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="nav-link text-light" href="https://www.linkedin.com/in/zwe-linn-maung-7638a2301" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Right (Form) */}
        <div className="col-md-6 mt-4 ps-5 d-flex row justify-content-center">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="a001cb5b-3eba-4590-b6bf-2cf07e697b8e" />

            <div className="ps-3">
              <input className="form-control mb-4 w-100" type="text" id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="ps-3">
              <input className="form-control mb-4 w-100" type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="ps-3" style={{ height: "140px" }}>
              <textarea name="Message" className="form-control w-100 h-100" placeholder="Message.." required></textarea>
            </div>

            <button className="btn btn-primary mt-2 ms-3" id="btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
