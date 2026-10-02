import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:yname4360@gmail.com" data-cursor="disable">
                yname4360@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p style={{ fontSize: "16px", color: "var(--accentColor)", marginTop: "4px" }}>
              Roorkee, Dehradun, Uttarakhand, India
            </p>
            <h4 style={{ marginTop: "16px" }}>Social Profiles</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
              <a
                href="https://github.com/yname4360-png"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
                style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
              >
                GitHub <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com/in/sachin-kumar-8b13bb3a1/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
                style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
              >
                LinkedIn <MdArrowOutward />
              </a>
            </div>
          </div>
          <div className="contact-box">
            <h4>Academic Reference</h4>
            <p style={{ fontWeight: 600, fontSize: "18px", marginBottom: "4px" }}>
              Prof. (Dr.) Parag Jain
            </p>
            <p style={{ fontSize: "14px", opacity: 0.8, marginBottom: "8px" }}>
              Director, Roorkee Institute of Technology
            </p>
            <a
              href="mailto:director@ritroorkee.com"
              data-cursor="disable"
              className="contact-social"
              style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
            >
              director@ritroorkee.com <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> for <span>Sachin Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
