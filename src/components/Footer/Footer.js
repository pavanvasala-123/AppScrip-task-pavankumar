import React from 'react'
import '../Footer/Footer.css'
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left-container'>
            < h3>BE THE FIRST TO KNOW</h3>
            <p>Sign ip for the updates muse</p>
            <span><input type='text' placeholder='Enter your mail'/> <button>Subscribe</button></span>
        </div>
        <div className='footer-top-right-container'>
                <h3>CONTACTUS</h3>
                <p>+44 221 133 5360</p>
                <p>CURRENCY</p>
                <span>.USD</span>
        </div>
      </div>

      <div className='footer-bottom'>
            <div className='footer-metta-muse-conatiner'>
                    <p>About Us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact Us</p>
                    
            </div>
            <div className='footer-quicklinks-conatiner'>
                    <p>Orders & Shipping</p>
                    <p>Join?Login as a Seller</p>
                    <p>Payment & Pricing</p>
                    <p>Return and Refunds</p>
                    <p>FAQS</p>
                    <p>Privacy Policy</p>
                    <p>Termas & Conditions</p>
            </div>
            <div className='footer-follow-conatiner'>
                <div>
                    <h2>Follow Us</h2>
                    <span>
                        <CiLinkedin/>
                        <CiInstagram/>
                    </span>
                </div>
            </div>
      </div>
      
    </div>
  )
}

export default Footer
