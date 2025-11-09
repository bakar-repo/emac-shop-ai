
import React, { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    image: 'https://picsum.photos/id/1018/1200/500',
    headline: 'Discover Our New Collection',
    subheadline: 'Stylish and modern designs for your home.',
    cta: 'Shop Now',
  },
  {
    image: 'https://picsum.photos/id/1025/1200/500',
    headline: 'Spring Sale Event',
    subheadline: 'Up to 40% off on selected items.',
    cta: 'Explore Deals',
  },
  {
    image: 'https://picsum.photos/id/1043/1200/500',
    headline: 'Free Shipping On Orders Over $100',
    subheadline: 'Get your favorites delivered to your door.',
    cta: 'Learn More',
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.headline} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h1 className="text-3xl md:text-5xl font-bold drop-shadow-md">{slide.headline}</h1>
              <p className="mt-2 md:mt-4 text-lg md:text-xl drop-shadow">{slide.subheadline}</p>
              <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
