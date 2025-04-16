import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={logoSection}>
          <h2 style={logoTextStyle}>NLITE Technologies LLP</h2>
        </div>
        <div style={socialIcons}>
          <a href="#" target="_blank" rel="noopener noreferrer" style={socialIconLink}>
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={socialIconLink}>
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={socialIconLink}>
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={socialIconLink}>
            <FaLinkedinIn />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={socialIconLink}>
            <FaYoutube />
          </a>
        </div>
      </div>
      <div style={linksContainer}>
        <div style={linksColumn}>
          <h4 style={headingStyle}>Popular Course</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>JAVA & REACT</li>
            <li style={listItemStyle}>.Net and react</li>
            <li style={listItemStyle}>Java and Angular</li>
            <li style={listItemStyle}>Python</li>
            <li style={listItemStyle}>DEVOPS</li>
          </ul>
        </div>
        <div style={linksColumn}>
          <h4 style={headingStyle}>Quick Links</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>FAQ's</li>
            <li style={listItemStyle}>Terms & Conditions</li>
            <li style={listItemStyle}>Privacy Policy</li>
            <li style={listItemStyle}>Refunds Policy</li>
          </ul>
        </div>
        <div style={locationColumn}>
          <h4 style={headingStyle}>Our Location</h4>
          <p style={locationTextStyle}>
            <FaMapMarkerAlt style={iconStyle} /> 1st Floor, Plot no 434, Nandankanan Rd, Raghunathpur, Bhubaneswar, Odisha 751024
          </p>
        </div>
        <div style={contactColumn}>
          <h4 style={headingStyle}>Contact Us</h4>
          <p style={contactTextStyle}>
            <FaEnvelope style={iconStyle} /> contact@nlite.in
          </p>
          <p style={contactTextStyle}>
            <FaPhoneAlt style={iconStyle} /> +91 8428448903
          </p>
          <p style={contactTextStyle}>
            <FaPhoneAlt style={iconStyle} /> +91 9475484959
          </p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#191F45',
  color: '#fff',
  padding: '30px 20px',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
  paddingBottom: '10px',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
};

const logoSection = {
  flexGrow: 1,
};

const logoTextStyle = {
  margin: 0,
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const socialIcons = {
  display: 'flex',
};

const socialIconLink = {
  color: '#fff',
  fontSize: '1.2rem',
  marginLeft: '15px',
  textDecoration: 'none',
};

const linksContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '20px 0',
};

const linksColumn = {
  flex: 1,
  maxWidth: '200px',
};

const locationColumn = {
  flex: 1,
  maxWidth: '300px',
};

const contactColumn = {
  flex: 1,
  maxWidth: '250px',
};

const headingStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const listItemStyle = {
  marginBottom: '8px',
  fontSize: '0.9rem',
};

const locationTextStyle = {
  fontSize: '0.9rem',
  lineHeight: '1.5',
  display: 'flex',
  alignItems: 'flex-start',
};

const contactTextStyle = {
  fontSize: '0.9rem',
  lineHeight: '1.5',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '5px',
};

const iconStyle = {
  marginRight: '8px',
};

export default Footer;