import React from 'react';
import Scroll from '../composants/Scroll';

const Services = () => {
  return (
    <section id="services" className="mt-10 py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-full">
            <Scroll />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="">
            <div
              class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-500 transition-all duration-300 group-hover:scale-[10]"></span>
              <div class="relative z-10 mx-auto max-w-md">
                <span class="grid h-20 w-20 place-items-center rounded-full bg-yellow-500 transition-all duration-300 group-hover:bg-black">
                  <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M11 6L13 8L17 4M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <div
                  class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white">
                  <p>Discover today how easy it is to book a moment of relaxation and beauty on our platform...</p>
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
          <div class="">
            <div
              class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-500 transition-all duration-300 group-hover:scale-[10]"></span>
              <div class="relative z-10 mx-auto max-w-md">
                <span class="grid h-20 w-20 place-items-center rounded-full bg-yellow-500 transition-all duration-300 group-hover:bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </span>
                <div
                  class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white">
                  <p>Discover several Gallerys, even the most complicated ones, and be satisfied with the result....</p>
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
          <div class="">
            <div
              class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-500 transition-all duration-300 group-hover:scale-[10]"></span>
              <div class="relative z-10 mx-auto max-w-md">
                <span class="grid h-20 w-20 place-items-center rounded-full bg-yellow-500 transition-all duration-300 group-hover:bg-black">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.581 19.4041C14.6645 19.9894 14.2606 20.5326 13.676 20.6211L12 20.9841C11.6307 21.1187 11.2169 21.0265 10.9398 20.7477C10.6627 20.469 10.5729 20.0546 10.7097 19.6861C10.8466 19.3176 11.1851 19.0623 11.577 19.0321L13.252 18.6701C13.8213 18.509 14.4142 18.8364 14.581 19.4041V19.4041Z" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 15.9919C5.89543 15.9919 5 15.0965 5 13.9919V10.9919C5 9.88737 5.89543 8.99194 7 8.99194C8.10457 8.99194 9 9.88737 9 10.9919V13.9919C9 15.0965 8.10457 15.9919 7 15.9919Z" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 15.9919C15.8954 15.9919 15 15.0965 15 13.9919V10.9919C15 9.88737 15.8954 8.99194 17 8.99194C18.1046 8.99194 19 9.88737 19 10.9919V13.9919C19 15.0965 18.1046 15.9919 17 15.9919Z" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.25 11C18.25 11.4142 18.5858 11.75 19 11.75C19.4142 11.75 19.75 11.4142 19.75 11H18.25ZM4.25 11C4.25 11.4142 4.58579 11.75 5 11.75C5.41421 11.75 5.75 11.4142 5.75 11H4.25ZM19.75 14.0023C19.7513 13.5881 19.4165 13.2513 19.0023 13.25C18.5881 13.2487 18.2513 13.5835 18.25 13.9977L19.75 14.0023ZM13.5113 19.8951C13.1071 19.9855 12.8527 20.3865 12.9431 20.7907C13.0335 21.1949 13.4345 21.4493 13.8387 21.3589L13.5113 19.8951ZM19.75 11V9H18.25V11H19.75ZM19.75 9C19.75 4.71979 16.2802 1.25 12 1.25V2.75C15.4518 2.75 18.25 5.54822 18.25 9H19.75ZM12 1.25C7.71979 1.25 4.25 4.71979 4.25 9H5.75C5.75 5.54822 8.54822 2.75 12 2.75V1.25ZM4.25 9V11H5.75V9H4.25ZM18.25 13.9977C18.2414 16.8289 16.2742 19.2771 13.5113 19.8951L13.8387 21.3589C17.2853 20.588 19.7393 17.534 19.75 14.0023L18.25 13.9977Z" fill="#contact000000"/>
                  </svg>
                </span>
                <div
                  class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white">
                  <p>Our customer service team answers all your questions and resolves your issues quickly via email or phone...</p>
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
