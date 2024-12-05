import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

function Caroussel() {
    const slides = [
        { 
            url: '/hero_img/hair.jpg',
             title: 'Welcome To WiyoRent',
              description: 'Your Home Away From Home.',
               buttonText: 'Learn More',
               buttonLink: '#about'
        },
        { 
            url: '/hero_img/hair3.jpg',
             title: 'A multitude of apartments in one place according to your preferences',
              description: '',
              buttonText: 'Book now',
              buttonLink: '/List'
       },
        { 
            url: '/hero_img/hair1.jpg',
             title: 'Feel at home and safe',
              description: '',
               buttonText: 'Book now',
               buttonLink: '/List'
        },
        { 
            url: '/hero_img/hair2.jpg',
             title: 'Personalized service for each customer',
              description: '',
              buttonText: 'Book now',
              buttonLink: '/List'
       },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);

    useEffect(() => {
        let autoScrollInterval;

        const startAutoScroll = () => {
            autoScrollInterval = setInterval(() => {
                nextSlide();
            }, 7000); // Défilement toutes les 5 secondes
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
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
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
            className="max-w-[1700px] h-[800px] mb-5 w-full m-auto py-16 px-4 relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
            >
                {/* Overlay for text readability */}
                <div className="absolute inset-0 rounded-2xl bg-black/35 flex items-center justify-center text-center p-4">
                    <div className="text-white">
                        <h2 className="text-4xl font-bold">{slides[currentIndex].title}</h2>
                        <p className="mt-2 text-lg">{slides[currentIndex].description}</p>
                        <a
                            href={slides[currentIndex].buttonLink}
                            className="mt-10 inline-block px-6 py-3 bg-yellow-500 border border-yellow-500 text-black font-semibold rounded-lg hover:bg-black hover:text-yellow-500 transition"
                        >
                            {slides[currentIndex].buttonText}
                        </a>
                    </div>
                </div>
            </div>

            {/* Left arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <ChevronLeftIcon onClick={prevSlide} className="h-10" />
            </div>

            {/* Right arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <ChevronRightIcon onClick={nextSlide} className="h-10" />
            </div>
        </div>
    );
}

export default Caroussel;
