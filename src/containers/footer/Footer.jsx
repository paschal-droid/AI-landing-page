import React from 'react'

import './footer.css'
import logo from "../../assets/logo.svg"

const Footer = () => {
    return (
        <div className='gpt3_footer section_padding'>
           <div className='gpt3_footer-heading'>
               <h1 className='gradient_text'>Do you want to Step into the future before others</h1>
           </div>
           <div className='gpt3_footer-btn'>
               <p>Request Early Access</p>
           </div>
           <div className='gpt3_footer-links'>
               <div className='gpt3_footer-links-logo'>
                    <img src={logo} alt='gpt3' />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur!, All Right reserved</p>
               </div>
               <div className='gpt3_footer-links_div'>
                    <h4>Links</h4>
                    <p>Overuns</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
               </div>
               <div className='gpt3_footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
               </div>
               <div className='gpt3_footer-links_div'>
                    <h4>Let's get in touch</h4>
                    <p>Cretchwoord K12 164 Johnson Avenue, UK</p>
                    <p>454-56443-343</p>
                    <p>gpt3@contact.me</p>
               </div>
           </div>
           <div className='gpt3_footer-copyright'>
               <p>@2021-2022 GPT-3 All rights reserved</p>
           </div>
        </div>
    )
}

export default Footer
