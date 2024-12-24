import React, { useEffect, useRef } from 'react';
import './InfiniteScrollAnimation.css'; // Import du CSS personnalisé

const InfiniteScrollAnimation = () => {
  const scrollerRefs = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!prefersReducedMotion) {
      addAnimation();
    }

    function addAnimation() {
      scrollerRefs.current.forEach((scroller) => {
        if (scroller) {
          scroller.setAttribute('data-animated', true);

          const scrollerInner = scroller.querySelector('.scroller__inner');
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-primary-800">
      <div
        className="scroller max-w-full md:max-w-xl overflow-x-auto"
        data-speed="fast"
        ref={(el) => (scrollerRefs.current[0] = el)}
      >
        <ul className="tag-list scroller__inner flex flex-nowrap md:flex-wrap gap-4 p-4">
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Bonandjo
          </li>
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Akwa
          </li>
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Bali
          </li>
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Bonapriso
          </li>
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Deido
          </li>
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Bessenge
          </li>
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Ndokoti
          </li>
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            New Bell
          </li>
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Nylon
          </li>
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Madagascar
          </li>
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Nkololoun
          </li>
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Mboppi
          </li>
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Village
          </li>
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Makepe Missoke
          </li>
          <li className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow-lg">
            Logbaba
          </li>
        </ul>
      </div>
      
      <div
        className="scroller w-full mt-8 mb-10"
        data-direction="right"
        data-speed="slow"
        ref={(el) => (scrollerRefs.current[1] = el)}
      >
        <div className="scroller__inner flex flex-wrap gap-4 p-4">
        <img
            src="/Gallery/1.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover "
          />
          <img
            src="/Gallery/2.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Gallery/3.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Gallery/4.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Gallery/5.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Gallery/6.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Gallery/7.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Gallery/8.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Gallery/9.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Gallery/10.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Gallery/11.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Gallery/12.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Gallery/13.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />
          <img
            src="/Gallery/14.jpg"
            alt=""
            className="w-40 h-40 rounded-lg shadow-lg object-cover"
          />

        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollAnimation;
