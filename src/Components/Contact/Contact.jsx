import React from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "02566b0d-c45c-4252-ac59-f9b792c46684");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Get in Touch!</h3>
        <p>
          "We'd love to hear from you! Feel free to send us a message anytime,
          and we'll get back to you as soon as possible."
        </p>
        <ul>
          <li>info@zante-adventures.com</li>
          <li>+30 6976754972</li>
          <li> Loucha 7 , Zakynthos , Greece</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn-contact">
            Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
