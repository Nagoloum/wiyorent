import React from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Social from './SocialMediaButtons';

const Contact = () => {
  return (
    <div className="mt-10 relative isolate " id='contact'>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-50 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-400 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="pattern"
                    width="200"
                    height="200"
                    x="100%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth="0" fill="white"></rect>
                <svg x="100%" y="-1" className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth="0"></path>
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                  fill="url(#pattern)"
                ></rect>
              </svg>
            </div>
            <h2 className="text-5xl font-bold tracking-tight text-gray-900">
              Contact Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Feel free to reach out to us for any inquiries or assistance. We're here to help!
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:irenebraiding17@gmail.com"
                  >
                    ###########@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Phone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a 
                    className="hover:text-gray-900"
                    href="tel:2147143124"
                  >
                    +237#########
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <MapPinIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a 
                    className="hover:text-gray-900"
                    href="https://maps.app.goo.gl/3wo7rRprwiSq8B8u7"
                  >
                    Cameroon
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <br />
                  <span className="sr-only">social</span>
                  <Social />
                </dt>
              </div>
            </dl>
          </div>
        </div>

        {/* Carte responsive */}
        <div className="sm:px-6 pb-10 pt-10 lg:pt-0 lg:static lg:pb-0 lg:pr-0 lg:pl-0 w-full flex flex-col lg:flex-row">
          <div className="flex-grow">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8104017.473178279!2d6.99805982273266!3d7.349429741708846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613753703e0f21%3A0x2b03c44599829b53!2sCameroun!5e0!3m2!1sfr!2scm!4v1732820268784!5m2!1sfr!2scm"
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen=""
              className="shadow-lg w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
