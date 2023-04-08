import React from 'react'
import './FooterStyles.css'
import {FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size = {20} style= {{color: '#ffffff', marginRight: '2rem'}} />
                        <div>
                            <p>Home Town</p>
                            <h4>London, England</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size = {20} style= {{color: '#ffffff', marginRight: '2rem'}}/>(704) 254-9092</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size = {20} style= {{color: '#ffffff', marginRight: '2rem'}}/>aryanc1027@gmail.com</h4>
                        <h4 style={{marginLeft:'3.2rem'}}>aryanc@unc.edu</h4>
                    </div>
                </div>
            <div clasName='right'>

                <p> Current Year: Freshman</p>
                <p> TechX Cohort 1 </p>
                <div className='social'>
                 <FaInstagram size = {30} style= {{color: '#ffffff', marginRight: '1rem'}} />
                 <FaGithub size = {30} style= {{color: '#ffffff', marginRight: '1rem'}} />
                 <FaLinkedin size = {30} style= {{color: '#ffffff', marginRight: '1rem'}} />
                 </div>
            </div>

            </div>
        </div>
    )
}


export default Footer