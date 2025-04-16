import React from "react";
import about_I from '../assets/about_I.svg'
import about_II from '../assets/about_II.svg'
import about_III from '../assets/about_III.svg'
import './about.css';
function About() {
  return (
    <>
      <div className="container">
      <div className="leftSection">
        <h2 className="aboutUs">ABOUT US</h2>
        <h1 className="learningMadeSimple">
          Learning Made <br />
          Simple for <br />
          Everyone
        </h1>
        <p className="transformingText">
          Transforming tech education for the next generation of students &
          employees
        </p>
      </div>
      <div className="rightSection">
        <div className="topRightImages">
          <img
            src={about_I}
            alt="People working at computers"
            className="topRightImage1"
          />
        </div>
        <div className="middleRightImages">
          <img
            src={about_II}  
            alt="Businessmen having a discussion"
            className="middleRightImage3"
          />
        </div>
        
        
        </div>
         
        <div className="bottomRightImage">
          <img
            src={about_III}  
            alt="Person wearing VR headset"
            className="bottomRightImage2"
          />
      </div>
    </div>
    </>
  );
}

export default About;