import React, { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Message sent successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact">
      <div className="contact_container">

        {/* LEFT CONTENT */}
        <div className="contact_text">
          <h1 className="heading">CONTACT US</h1>
          <p>
            Have a question, feedback, or special request?  
            We’d love to hear from you.
          </p>
          <p className="sub_text">
            Fill out the form and our team will get back to you shortly.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="contact_form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">
              Send Message <span><HiOutlineArrowRight /></span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
