import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

function Caroussel_Details({ images, title, description }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    let autoScrollInterval;

    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        nextSlide();
      }, 7000); // Défilement automatique toutes les 7 secondes
    };

    const stopAutoScroll = () => {
      clearInterval(autoScrollInterval);
    };

    if (isAutoScrolling) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [currentIndex, isAutoScrolling]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <div
      className="max-w-[1700px] h-[820px] w-full m-auto pt-10 px-4 relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
      >
        <div className="absolute inset-0 rounded-2xl bg-black/35 flex items-center justify-center text-center p-4">
          <div className="text-white">
            <h2 className="text-5xl font-bold">{title}</h2>
            <p className="mt-2 text-lg">{description}</p>
          </div>
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeftIcon onClick={prevSlide} className="h-10" />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRightIcon onClick={nextSlide} className="h-10" />
      </div>
    </div>
  );
}

export default Caroussel_Details;
