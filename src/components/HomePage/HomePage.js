import React from 'react';
import NavBar from '../NavBar/NavBar';
import Slider from '../Slider/Slider';
import './HomePage.css';
import Card from '../Cards/Cards';
import sample from '../Cards/sample.jpg'
import Footer from '../Footer/Footer';

function HomePage() {
  return (
    <div className='home'>
      <NavBar/>
      <Slider/>
      <div className="parent">
      <div className="card-container">
      <Card
        title="Card Title 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl={sample}
      />
      <Card
        title="Card Title 2"
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageUrl={sample}
      />
      <Card
        title="Card Title 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl={sample}
      />
      <Card
        title="Card Title 2"
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageUrl={sample}
      />
      <Card
        title="Card Title 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl={sample}
      />
      <Card
        title="Card Title 2"
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageUrl={sample}
      />
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
