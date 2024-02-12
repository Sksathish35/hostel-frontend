import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="home-page">
        <div className="about">
          <h2 className="home-page-titles">About</h2>
          <div className="about-content">
          Velammal College of Engineering and Technology is a private institution located in the temple city of Madurai, Tamil Nadu. It was established by the Velammal Educational Trust. The college was started in 2007 in Madurai to provide professional education to the students of south Tamil Nadu.
          </div>
          <div className="about-content">
          The college has a well established infrastructure with 162 experienced faculty members of which 40 are Doctorates and 51 are pursuing their Ph.D. Research and Development is given much importance in the college
          </div>
        </div>

        
        <div className="mission">
          <h2 className="home-page-titles">Vision</h2>
          To produce quality Electrical Engineers for industry and good citizens for society through excellence in technical education and research.
          {/* <ul className="mission-list">
            <li>
            Imparted with comprehensive, innovative and value – based education
            </li>
            <li>
            Exposed to technical, managerial and soft skill resources with emphasis on research and professionalism.
            </li>
            <li>
            Inculcated with the need for a disciplined, happy, married and peaceful life.           
            </li>
          </ul> */}
        </div>
        <div className="mission">
          <h2 className="home-page-titles">Mission</h2>
          To produce quality Electrical Engineers for industry and good citizens for society through excellence in technical education and research.
          <ul className="mission-list">
            <li>
            Imparted with comprehensive, innovative and value – based education
            </li>
            <li>
            Exposed to technical, managerial and soft skill resources with emphasis on research and professionalism.
            </li>
            <li>
            Inculcated with the need for a disciplined, happy, married and peaceful life.           
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
