import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import foodys from '../../components/Footer/logo1.jpg';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
          <img src={foodys} alt='' />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque natus distinctio, tempora saepe necessitatibus, reprehenderit aspernatur quasi suscipit officia perspiciatis maiores nesciunt error pariatur ipsa cum quidem repellendus velit impedit?</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
          </div>
        </div>
        <div className="footer-content-center">
         <h2>COMPANY</h2>
         <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
         </ul>
        </div>
        <div className="footer-content-right">
         <h2>GET IN TOUCH</h2>
         <ul>
            <li>+1-212-432-9860</li>
            <li>contact@tomato.com</li>
         </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
