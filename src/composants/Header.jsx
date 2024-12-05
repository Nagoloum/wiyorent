import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black shadow-lg text-white px-4 py-6 lg:px-8 lg:py-6">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center">
        <a href="/" className="flex items-center whitespace-nowrap text-2xl font-black">
          <span className="top-0 my-0 py-0 mr-2 w-12">
            <img src="/ddc1.png" alt="" />
          </span>
          WiyoRent
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label className="absolute top-6 right-5 cursor-pointer lg:hidden" htmlFor="navbar-open">
          <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>

        {/* NAVIGATION MENU */}
        <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-80 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
          <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center whitespace-nowrap text-lg font-bold lg:space-y-0">
            <li className="lg:mr-8">
              <a
                className="relative rounded text-white transition hover:text-yellow-500 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:bg-yellow-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="lg:mr-8">
              <a
                className="relative rounded text-white transition hover:text-yellow-500 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:bg-yellow-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
                href="/#about"
              >
                About
              </a>
            </li>
            <li className="lg:mr-8">
              <a
                className="relative rounded text-white transition hover:text-yellow-500 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:bg-yellow-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
                href="/#services"
              >
                Services
              </a>
            </li>
            <li className="lg:mr-auto">
              <a
                className="relative rounded text-white transition hover:text-yellow-500 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:bg-yellow-500 after:transition-transform after:duration-300 hover:after:scale-x-100"
                href="/#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* BUTTON SECTION */}
        <div className="mt-4 flex items-center justify-center lg:mt-0">
          <a
            href="/list"
            className="px-4 py-2 font-semibold border border-yellow-500 bg-yellow-500 text-black rounded-lg hover:bg-black hover:text-yellow-500 transition sm:min-w-[200px] min-w-[150px] text-center justify-center"
            >
            Book Now
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
