import React from "react";
import home_head from '../assets/home_head.svg'
import './home.css';
function Home() {
  return (
    <>
         <div  className="container">
      <div className="leftSection">
        <h2 >
          Empower Your Professional <br />
          Journey With Industry-<br />
          Ready Skills
        </h2>
        <ul>
          <li>
            <span>✓</span> Build Real-world projects with
            in-person collaboration.
          </li>
          <li>
            <span>✓</span> Individual tailored learning
            approach
          </li>
          <li>
            <span>✓</span> Mentored by industry experts
          </li>
          <li>
            <span>✓</span> Get intensive placement
            assistance
          </li>
        </ul>
        <button >Enroll Now</button>
      </div>
      <div  className="rightSection">
      <img src={home_head} className="pic" alt="pic" /> 
      </div>
    </div>

    </>
  );
}

export default Home;