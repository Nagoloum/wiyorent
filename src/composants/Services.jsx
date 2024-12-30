import React from 'react';
import Scroll from '../composants/Scroll';

import { CheckIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <section id="services" className="pb-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-full">
            <Scroll />
          </div>
        </div>


        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-full lg:grid-cols-3 relative">
          {/* First Card */}
          <div className="bg-white/60 rounded-3xl p-8 ring-1 ring-black sm:p-10 z-10 lg:transform lg:translate-x-8">
            <h3 className="text-yellow-600 text-base font-semibold">Student's Package</h3>
              <span className="text-gray-500 text-base">From</span>
            <p className="flex items-baseline gap-x-2">
              <span className="text-gray-900 text-5xl font-semibold tracking-tight">XAF25.000</span>
              <span className="text-gray-400 text-base">/month</span>
            </p>
            <p className="text-gray-600 mt-6 text-base">
              A great choice for student.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-gray-600 sm:mt-10">
              <li className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 text-yellow-600" />
                Cheaper apartments
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 text-yellow-600" />
                Secure Environment
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 text-yellow-600" />
                up to 1 months housing deposit
              </li>
            </ul>
            <a
              href="/Appartement_pour_Etudiants"
              className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-yellow-600 ring-1 hover:text-black ring-yellow-500 transition border-b-2 border-yellow-500 hover:border-black hover:ring-black"
            >
              Explore
            </a>
          </div>

          {/* Second Card (Middle - Wider and grows) */}
          <div className="bg-black shadow-2xl rounded-3xl min-h-[500px] p-8 ring-1 ring-black sm:p-10 z-20">
            <h3 className="text-yellow-400 text-base font-semibold">Business Package</h3>
              <span className="text-gray-400 text-base">From</span>
            <p className="flex items-baseline gap-x-2">
              <span className="text-white text-5xl font-semibold tracking-tight">XAF70.000</span>
              <span className="text-gray-400 text-base">/month</span>
            </p>
            <p className="text-gray-300 mt-6 text-base">
              Enjoy great features with our business plan.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-gray-300 sm:mt-10">
            <li className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 text-yellow-400" />
                Cheaper apartments
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 text-yellow-400" />
                Secure Environment
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 text-yellow-400" />
                up to 1 months housing deposit
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 text-yellow-400" />
                furnished apartment
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 text-yellow-400" />
                Comfortable apartment
              </li>
            </ul>
            <a
              href="/Autres_appartements"
              className="mt-8 block rounded-md relative top-0 px-3.5 py-2.5 text-center text-sm font-semibold bg-yellow-500 ring-yellow-500 ring-1 text-black hover:bg-black hover:text-yellow-500 transition border-b-2 border-yellow-500"
            >
              Explore
            </a>
          </div>

          {/* Third Card */}
          <div className="bg-white/60 rounded-3xl p-10 ring-1 ring-black sm:p-10 z-10 lg:transform lg:-translate-x-8 text-center">
            <h3 className="text-yellow-600 text-base font-semibold">Wiyo +</h3>
            <p className="mt-4 flex items-baseline gap-x-3 justify-center">
              <span className="text-gray-900 text-5xl font-semibold tracking-tight ">See More +</span>
            </p>
            <p className="text-gray-600 mt-6 text-base">
              Explore several other packages.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-gray-600 sm:mt-10 lg:mx-24">
              <li className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 text-yellow-600" />
                Houses Rental
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 text-yellow-600" />
                Ceremony rooms rental
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 text-yellow-600" />
                Car rental and more...
              </li>
            </ul>
            <a
              href="/Autres_services"
              className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-yellow-600 ring-1 ring-yellow-500 hover:ring-black hover:border-black hover:text-black transition border-b-2 border-yellow-500"
            >
              More +
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

