import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { useNavigate } from "react-router-dom";
import './Footer.css'
function Footer() {
    const navigate = useNavigate();

    return (
        <div id='footer'>
            <div className="parent-list">
                <div className="list">
                    <h2>Our Services</h2>
                    <ul>
                        <li onClick={() => navigate('/copper')}>
                            Copper
                        </li>
                        <li onClick={() => navigate('/aluminum')}>
                            Aluminum
                        </li>
                        <li onClick={() => navigate('/strips')}>
                            Copper Strips
                        </li>
                    </ul>
                </div>
                <div className="list">
                    <h2>Support</h2>
                    <ul>
                        <li onClick={() => navigate('/contact')}>Contact Us</li>
                        <li>Phone :+91 44 4340XXXX</li>
                        <li>Email :info@khedargroup.com</li>
                    </ul>
                </div>
                <div className="list">
                    <h2>Corporate Address</h2>
                    <p>The Lattice 4th Floor,
                        Old No. 7/1, New No. 20,
                        Waddels Road, Kilpauk,
                        Chennai - 600010,
                        Tamil Nadu - India.</p>
                </div>
            </div>
            <div className="social">
                <p>Get in touch with us</p>
                <SocialIcon className='icon' url="https://www.instagram.com/ieeesb_nitdgp?igsh=N3V2ZmkwOGd3Nmhm" bgColor='black' />
                <SocialIcon className='icon' url="https://facebook.com/groups/ieee.nitdgp/" bgColor='black' />
                <SocialIcon className='icon' url="https://www.linkedin.com/company/ieeesbnitdgp/" bgColor='black' />
            </div>
        </div>
    )
}

export default Footer
