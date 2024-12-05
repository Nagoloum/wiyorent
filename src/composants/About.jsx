import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full pb-16 px-4">
      {/* Section Header */}
      <div className="px-11 mx-auto text-left grid max-w-6xl grid-cols-12 gap-4 pt-20 sm:pt-40">
        <div className="col-span-12 rounded-lg">
          <h2 className="text-5xl font-bold text-center">About Us</h2>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="relative flex flex-col lg:flex-row w-full max-w-[72rem] rounded-xl bg-black text-gray-300 shadow-xl">
          {/* Image Section */}
          <div className="relative w-full lg:w-2/5 shrink-0 overflow-hidden rounded-t-xl lg:rounded-l-xl lg:rounded-r-none">
            <img
              src="/Divine 1.jpg"
              alt="image"
              className="h-full w-full object-cover rounded-t-xl lg:rounded-l-xl"
            />
          </div>
          
          {/* Text Section */}
          <div className="p-8 flex flex-col justify-center gap-6">
            <h6 className="font-sans text-lg font-bold leading-relaxed tracking-wide text-white">
              WiyoRent
            </h6>
            <h4 className="font-sans text-3xl font-extrabold leading-snug tracking-wide text-yellow-500">
              Your New Student Apartment, Just a Few Clicks Away
            </h4>
            <p className="font-sans text-lg font-medium leading-relaxed text-gray-300">
              WiyoRent is your go-to solution for affordable student accommodation in Cameroon. Specializing in serving international students, our dedicated team ensures a seamless experience in finding the perfect home that fits your budget and lifestyle. Discover stress-free, affordable housing options with WiyoRent today!
            </p>
            <a className="inline-block" href="/list">
              <button
                className="flex select-none items-center gap-2 rounded-lg py-4 px-8 text-center font-sans text-sm font-bold uppercase text-yellow-400 transition-all hover:bg-yellow-400/10 active:bg-yellow-400/30 disabled:pointer-events-none disabled:opacity-50"
                type="button"
              >
                Book Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
