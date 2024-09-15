import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='container1'>
    <div className="footer-top">
      <div className="container">
        <div className="footer-brand">
        <div className="nav-logo">
             <Link to="/">
            <p>SHOP.CO</p>
            </Link>
            
          </div>
          <div className='footer-text'>
          <p>
          We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          </div>

          <ul className="social-list">
            <li>
              <a className="social-link">
                <ion-icon name="logo-tiktok"></ion-icon>
              </a>
            </li>
            <li>
              <a className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-lists">
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>
            <li>
              <a className="footer-link">
              About          
              </a>
            </li>
            <li>
              <a className="footer-link">
              Features          
              </a>
            </li>
            <li>
              <a className="footer-link">
              Works
              </a>
            </li>
            <li>
              <a className="footer-link">
              Career  
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">HELP</p>
            </li>
            <li>
              <a className="footer-link">
              Customer Support
              </a>
            </li>
            <li>
              <a className="footer-link">
              Delivery Details
              </a>
            </li>
            <li>
              <a className="footer-link">
              Terms & Conditions
              </a>
            </li>
            <li>
              <a className="footer-link">
              Privacy Policy
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">FAQ</p>
            </li>
            <li>
              <a className="footer-link">
              Account
              </a>
            </li>
            <li>
              <a className="footer-link">
              Manage Deliveries
              </a>
            </li>
            <li>
              <a className="footer-link">
              Orders
              </a>
            </li>
            <li>
              <a className="footer-link">
              Payment
              </a>
            </li>
          </ul>
        </div>
      </div>

     
    </div>
    </div>
  );
};

export default Footer;
