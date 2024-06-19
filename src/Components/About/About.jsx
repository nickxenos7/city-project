import React from "react";
import "./About.css";
import about_us from "../../assets/about_us.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_us} alt=" " className="about_us" />
      </div>
      <div className="about-right">
        <h3>MEET OUR TEAM</h3>

        <p>
          At Zakynthos Nature Adventures, we pride ourselves on having a team of
          dedicated and experienced professionals who are passionate about the
          great outdoors. Our team members are experts in their respective
          fields, ensuring that you have a safe, enjoyable, and unforgettable
          experience.
        </p>

        <h3>Kostas Christopoulos - Diving Instructor</h3>
        <p>
          With a deep passion for the underwater world, Kostas is a certified
          diving instructor who loves sharing her expertise with others. His
          commitment to marine conservation and his skills in diving ensure a
          thrilling and safe diving experience.
        </p>

        <h3>Spiros Navajopoulos - Kayak Instructor</h3>
        <p>
          Spiros is a seasoned kayak instructor with a love for water sports.
          His expertise in kayaking and canoeing, along with his dedication to
          teaching and safety, guarantees an exciting and enjoyable time on the
          water.
        </p>

        <h3>Anastasios Sominas - Hiking Guide</h3>
        <p>
          Anastasios has over a decade of experience leading hiking tours
          through the beautiful trails of Zakynthos. His extensive knowledge of
          the local flora and fauna, combined with his enthusiasm for outdoor
          adventures, makes him the perfect guide for your hiking escapades.
        </p>
      </div>
    </div>
  );
};

export default About;
