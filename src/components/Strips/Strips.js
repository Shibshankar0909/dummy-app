import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import strips from './strips.jpg'
import './Strips.css'

function Strips() {
    return (
        <>
            <NavBar />
                <div className="img-container" style={{
                    backgroundImage: `linear-gradient(
                        rgba(0, 0, 0, 0.5), 
                        rgba(0, 0, 0, 0.5)
                    ), url(${strips})`,
                    }}>
                    <h1>A Khedar Global</h1>
                    <h2>Copper Strips</h2>
                </div>
                <div className="text">
                <h1>Why Khedar Global?</h1>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ad aliquid sint aliquam asperiores ducimus eum numquam magnam exercitationem. Eum neque, vero sed sequi hic quam sint, similique id animi voluptas provident sunt sit libero cumque, explicabo iure expedita quis?</p>
                <h1>Services We Provide</h1>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ad aliquid sint aliquam asperiores ducimus eum numquam magnam exercitationem. Eum neque, vero sed sequi hic quam sint, similique id animi voluptas provident sunt sit libero cumque, explicabo iure expedita quis?</p>
                <button className="button">Get Started!</button>
                </div>            
            <Footer />
        </>
    )
}

export default Strips
