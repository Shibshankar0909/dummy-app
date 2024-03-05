import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import pic2 from './pic2.jpg';
import './Contact.css'

function Contact() {
    const [companyName, setCompanyName] = useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [role, setRole] = useState('seller');
    const [message, setMessage] = useState('');
    const [productsOfInterest, setProductsOfInterest] = useState([]);

    const handleProductChange = (product) => {
        const updatedProducts = [...productsOfInterest];
        if (updatedProducts.includes(product)) {
            updatedProducts.splice(updatedProducts.indexOf(product), 1);
        } else {
            updatedProducts.push(product);
        }
        setProductsOfInterest(updatedProducts);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', {
            companyName,
            email,
            phone,
            role,
            message,
            productsOfInterest,
        });
    };
    return (
        <>
            <NavBar />
            <div className="hero" style={{
                backgroundImage: `linear-gradient(
                  rgba(0, 0, 0, 0.5), 
                  rgba(0, 0, 0, 0.5)
                ), url(${pic2})`,
              }}>
                <div className="address">
                    <h3>Corporate Address</h3>
                    <h2>Khedar Global</h2>
                    <p>The Lattice 4th Floor,<br />
                        Old No. 7/1, New No. 20,
                        Waddels Road,<br /> Kilpauk,
                        Chennai - 600010,<br />
                        Tamil Nadu - India.
                    </p>
                    <p>Phone :+91 44 4340XXXX</p>
                    <p>Email :info@khedargroup.com</p>
                </div>
            </div>
            <div className="form">
                <form className="metal-export-form" onSubmit={handleSubmit}>
                <h2>Please drop in your details and we will get in touch with you shortly.</h2>
                    <div className="inpt">
                    <label>
                        Your Name:
                        <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                            placeholder='Name'
                        />
                    </label>
                    <label>
                        Email Address:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='Email'
                        />
                    </label>
                    <label>
                        Phone Number:
                        <input
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            placeholder='Number'
                        />
                    </label>
                    </div>

                    <div className='radio'>
                        <span>Are you a seller or a buyer?</span>
                        <div className="options">
                        <label>
                            <input
                                type="radio"
                                value="seller"
                                checked={role === 'seller'}
                                onChange={() => setRole('seller')}
                            />
                            Seller
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="buyer"
                                checked={role === 'buyer'}
                                onChange={() => setRole('buyer')}
                            />
                            Buyer
                        </label>
                        </div>
                    </div>

                    <div className='radio'>
                        <span>What products are you interested in?</span>
                        <div className="options">
                        <label>
                            <input
                                type="checkbox"
                                value="aluminum"
                                checked={productsOfInterest.includes('aluminum')}
                                onChange={() => handleProductChange('aluminum')}
                            />
                            Aluminum
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="copper"
                                checked={productsOfInterest.includes('copper')}
                                onChange={() => handleProductChange('copper')}
                            />
                            Copper
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="copper-strips"
                                checked={productsOfInterest.includes('copper-strips')}
                                onChange={() => handleProductChange('copper-strips')}
                            />
                            Copper Strips
                        </label>
                        </div>
                    </div>
                    <div className="message">
                    <label>
                        Message:
                        <textarea
                            placeholder='Message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="1"
                        />
                    </label>
                    </div>

                    <button type="submit">SUBMIT</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contact
