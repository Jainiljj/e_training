import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Code Faster, Build Better',
    description: 'Experience a development environment tailored for modern web engineering.',
    color: '#0F62FE',
    icon: '🚀'
  },
  {
    title: 'Advanced State Management',
    description: 'Master React hooks and build complex interactive applications with ease.',
    color: '#8B5CF6',
    icon: '⚛️'
  },
  {
    title: 'Pixel Perfect Design',
    description: 'Implement stunning responsive interfaces that wow your users.',
    color: '#10B981',
    icon: '✨'
  }
];

function DevCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      <div 
        className="carousel-track" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="carousel-slide"
            style={{ backgroundColor: slide.color }}
          >
            <div className="carousel-icon">{slide.icon}</div>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default DevCarousel;
