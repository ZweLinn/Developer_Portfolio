import { motion } from "motion/react";

const contactInfo = [
  { id: 1, icon: "fa-solid fa-phone", label: "Phone", value: "+66 99486 2943" },
  { id: 2, icon: "fa-solid fa-envelope", label: "Email", value: "zewlinnmg@gmail.com" },
]

const socialLinks = [
  { id: 1, icon: "fa-brands fa-facebook", url: "https://www.facebook.com/zwe.l.maung.562" },
  { id: 2, icon: "fa-brands fa-github", url: "https://github.com/ZweLinn" },
  { id: 3, icon: "fa-brands fa-twitter", url: "https://x.com/Yuno59515218" },
  { id: 4, icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/zwe-linn-maung-7638a2301" },
]

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const ContactForm = () => {
  return (
    <section className="container-fluid pb-5" id="contact">
      <div className="row">
        {/* Contact Left */}
        <div className="col-md-5 mt-4 d-flex flex-column align-items-center justify-content-center">
          <div className="contact-info-wrapper">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.id}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="contact-info-item"
              >
                <div className="contact-info-icon">
                  <i className={info.icon}></i>
                </div>
                <div>
                  <div className="words text-light fw-bold">{info.label}</div>
                  <div className="words">{info.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Media Links */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="social-links-wrapper mt-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.id}
                className="social-link"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Contact Right (Form) */}
        <div className="col-md-7 mt-4 px-4">
          <motion.form
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-form"
          >
            <input type="hidden" name="access_key" value="a001cb5b-3eba-4590-b6bf-2cf07e697b8e" />

            <div className="mb-4">
              <input
                className="form-control contact-input"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <input
                className="form-control contact-input"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <textarea
                name="Message"
                className="form-control contact-input"
                placeholder="Your Message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button className="btn btn-primary" type="submit">
              <i className="fa-solid fa-paper-plane me-2"></i>
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
