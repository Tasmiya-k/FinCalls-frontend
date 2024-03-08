import Navbar from "../Components/Navbar";
import React from "react";

export default function Contact() {
  const [formData, setformData] = React.useState("");
  function onChange(event) {
    setformData((prevformData) => {
      return {
        ...prevformData,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <div>
      <Navbar />
      <div className="contact-main">
        <img src="/videos/Girl_Hello.gif" />
        <form className="contact-form">
          <div className="contact-form-row">
            <div className="contact-form-ele">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="name"
                onChange={onChange}
                value=""
              />
            </div>

            <div className="contact-form-ele">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="email"
                onChange={onChange}
                value=""
              />
            </div>
          </div>

          <div className="contact-form-ele">
            <label className="label">Your Message</label>
            <input
              type="text"
              name="desc"
              className="desc"
              onChange={onChange}
              value=""
            />
          </div>

          <div className="contact-submit-div">
            <button className="contact-submit">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
}
