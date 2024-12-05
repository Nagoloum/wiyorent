import React from 'react';
import Scroll from '../composants/Scroll';

const Services = () => {
  return (
    <section id="services" className="pb-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-full">
            <Scroll />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div
              class="group relative cursor-pointer overflow-hidden bg-black px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-500 transition-all duration-300 group-hover:scale-[10]"></span>
              <div class="relative z-10 mx-auto max-w-md">
                <span class="grid h-20 w-20 place-items-center rounded-full bg-yellow-500 transition-all duration-300 group-hover:bg-black">
                  <svg fill="currentColor" stroke='currentColor' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="h-10 w-10 text-black group-hover:text-yellow-500 transition-all" viewBox="0 0 21.05 21.05" xml:space="preserve">

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                    <g id="SVGRepo_iconCarrier"> <g> <path d="M4.209,16.523c1.199,0.785,1.92,1.709,1.585,3.228c-0.096,0.433,0.227,0.597,0.632,0.591 c0.639-0.007,1.292,0.075,1.914-0.029c3.117-0.525,6.13,0.043,9.141,0.733c0.021-0.995,0.299-2.038-0.777-2.872 c-1.183-0.917-1.634-2.34-2.012-3.736c-0.349-1.287,0.402-2.306,1.093-3.211c1.001-1.317,0.321-2.233-0.488-3.175 c-0.283-0.33-0.694-0.546-1.006-0.856c-0.267-0.265-0.707-0.519-0.572-0.952c0.184-0.586,0.741-0.312,1.147-0.334 c0.517-0.029,1.037-0.007,1.814-0.007C14.929,4.116,15.923,1.707,14.639,0c-0.393,0-0.787,0-1.181,0 c0.404,0.39,0.084,1.077,0.604,1.43c1.112,0.757,0.522,1.378-0.248,1.818c-0.507,0.289-0.938,0.642-1.092,1.134 c-0.773,2.486-2.627,4.409-3.511,6.838c-0.233,0.64-0.646,1.54-1.42,0.31c-0.15-0.239-0.393-0.277-0.749-0.233 c-1.519,0.185-2.385,1.218-2.93,2.416C3.732,14.55,2.944,15.693,4.209,16.523z" /> </g> </g>

                  </svg>
                </span>
                <div
                  class="space-y-6 pt-5 text-base leading-7 text-white transition-all duration-300 group-hover:text-white">
                  <p>Wherever you are in Cameroon, book in a few clicks...</p>
                </div>
                <div class="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a href="/List" class="text-yellow-500 transition-all duration-300 group-hover:text-black">Book Now
                      &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              class="group relative cursor-pointer overflow-hidden bg-black px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-500 transition-all duration-300 group-hover:scale-[10]"></span>
              <div class="relative z-10 mx-auto max-w-md">
                <span class="grid h-20 w-20 place-items-center rounded-full bg-yellow-500 transition-all duration-300 group-hover:bg-black">
                  <svg fill="currentColor" class="h-10 w-10 text-black group-hover:text-yellow-500 transition-all" stroke="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M5 10C3.347656 10 2 11.347656 2 13L2 26.8125C3.296875 25.6875 4.9375 24.777344 7 24.0625L7 20C7 17.339844 11.542969 17 15.5 17C19.457031 17 24 17.339844 24 20L24 22C24.335938 21.996094 24.65625 22 25 22C25.34375 22 25.664063 21.996094 26 22L26 20C26 17.339844 30.542969 17 34.5 17C38.457031 17 43 17.339844 43 20L43 24.03125C45.058594 24.742188 46.691406 25.671875 48 26.8125L48 13C48 11.347656 46.652344 10 45 10 Z M 25 24C5.90625 24 -0.015625 27.53125 0 37L50 37C50.015625 27.46875 44.09375 24 25 24 Z M 0 39L0 50L7 50L7 46C7 44.5625 7.5625 44 9 44L41 44C42.4375 44 43 44.5625 43 46L43 50L50 50L50 39Z" /></svg>
                </span>
                <div
                  class="space-y-6 pt-5 text-base leading-7 text-white transition-all duration-300 group-hover:text-white">
                  <p>Discover apartments based on your preferences...</p>
                </div>
                <div class="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a href="/List" class="text-yellow-500 transition-all duration-300 group-hover:text-black">Read more
                      &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              class="group relative cursor-pointer overflow-hidden bg-black px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-500 transition-all duration-300 group-hover:scale-[10]"></span>
              <div class="relative z-10 mx-auto max-w-md">
                <span class="grid h-20 w-20 place-items-center rounded-full bg-yellow-500 transition-all duration-300 group-hover:bg-black">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-black group-hover:text-yellow-500 transition-all">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.581 19.4041C14.6645 19.9894 14.2606 20.5326 13.676 20.6211L12 20.9841C11.6307 21.1187 11.2169 21.0265 10.9398 20.7477C10.6627 20.469 10.5729 20.0546 10.7097 19.6861C10.8466 19.3176 11.1851 19.0623 11.577 19.0321L13.252 18.6701C13.8213 18.509 14.4142 18.8364 14.581 19.4041V19.4041Z" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 15.9919C5.89543 15.9919 5 15.0965 5 13.9919V10.9919C5 9.88737 5.89543 8.99194 7 8.99194C8.10457 8.99194 9 9.88737 9 10.9919V13.9919C9 15.0965 8.10457 15.9919 7 15.9919Z" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 15.9919C15.8954 15.9919 15 15.0965 15 13.9919V10.9919C15 9.88737 15.8954 8.99194 17 8.99194C18.1046 8.99194 19 9.88737 19 10.9919V13.9919C19 15.0965 18.1046 15.9919 17 15.9919Z" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.25 11C18.25 11.4142 18.5858 11.75 19 11.75C19.4142 11.75 19.75 11.4142 19.75 11H18.25ZM4.25 11C4.25 11.4142 4.58579 11.75 5 11.75C5.41421 11.75 5.75 11.4142 5.75 11H4.25ZM19.75 14.0023C19.7513 13.5881 19.4165 13.2513 19.0023 13.25C18.5881 13.2487 18.2513 13.5835 18.25 13.9977L19.75 14.0023ZM13.5113 19.8951C13.1071 19.9855 12.8527 20.3865 12.9431 20.7907C13.0335 21.1949 13.4345 21.4493 13.8387 21.3589L13.5113 19.8951ZM19.75 11V9H18.25V11H19.75ZM19.75 9C19.75 4.71979 16.2802 1.25 12 1.25V2.75C15.4518 2.75 18.25 5.54822 18.25 9H19.75ZM12 1.25C7.71979 1.25 4.25 4.71979 4.25 9H5.75C5.75 5.54822 8.54822 2.75 12 2.75V1.25ZM4.25 9V11H5.75V9H4.25ZM18.25 13.9977C18.2414 16.8289 16.2742 19.2771 13.5113 19.8951L13.8387 21.3589C17.2853 20.588 19.7393 17.534 19.75 14.0023L18.25 13.9977Z" fill="#contact000000" />
                  </svg>
                </span>
                <div
                  class="space-y-6 pt-5 text-base leading-7 text-white transition-all duration-300 group-hover:text-white">
                  <p>Take advantage of our 24/7 customer service to resolve your issues...</p>
                </div>
                <div class="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a href="mailto:landhack049@gmail.com" class="text-yellow-500 transition-all duration-300 group-hover:text-black">Ask a question
                      &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
