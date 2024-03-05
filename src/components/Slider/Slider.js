import React, { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slider.css';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';

const buttonStyle = {
    width: "30px",
    margin:"50px",
    background: 'none',
    border: '2px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}

const hStyle = {
  padding: '20px',
  color: 'white',
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
};

const slideImages = [
  {
    url: pic1,
    caption: 'Dedicated Workers',
  },
  {
    url: pic2,
    caption: 'Efficient Infrastructure',
  },
  {
    url: pic3,
    caption: 'State of the art manufacture unit',
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  const handleChange = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
  };

  return (
    <div className="slide-container">
      <Fade
      canSwipe='true'
       {...properties}
        onChange={handleChange}
      >
        {slideImages.map((slideImage, i) => (
          <div className="container" key={i}>
            <div
              className="img"
              style={{
                ...divStyle,
                backgroundImage: `linear-gradient(
                  rgba(0, 0, 0, 0.5), 
                  rgba(0, 0, 0, 0.5)
                ), url(${slideImage.url})`,
              }}
            >
              <h1 className={`${i === index ? 'text-animation' : 'off'}`} style={hStyle}>
                {slideImage.caption}
              </h1>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Slider;
