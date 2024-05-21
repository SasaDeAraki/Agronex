import React, { useState } from 'react';
import './Carrossel.css';

const Carrossel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '/img/holder5.png',
        '/img/holder5.png',
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className='carousel'>
            <div className='carousel-inner' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                        <img src={src} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <button className='carousel-button prev' onClick={prevSlide}>
                <img src='img/Arrow 2.png'></img>
            </button>
            <button className='carousel-button next' onClick={nextSlide}>
                <img src='img/Arrow 1.png'></img>
            </button>
        </div>
    );
};

export default Carrossel;
