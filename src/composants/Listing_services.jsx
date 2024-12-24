import React from 'react'

function Listing_services() {
  return (
    <section className="w-full pb-16 px-4">
      {/* Section Header */}
      <div className="px-11 mx-auto text-left grid max-w-6xl grid-cols-12 gap-4 pt-20 sm:pt-40">
        <div className="col-span-12 rounded-lg">
          <h2 className="text-5xl font-bold text-center">Our Services</h2>
        </div>
      </div>

      <div class="mt-10 grid gap-4 grid-cols-2 place-items-center h-full mx-48">
        <a href="page1.html" class="relative group w-full h-96">
          <img src="/Gallery/1.jpg" alt="Image 1" class="w-full h-full object-cover rounded-xl group-hover:grayscale-0 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-70 text-white text-3xl font-semibold group-hover:bg-opacity-30 transition duration-500">
            <span class="drop-shadow-md">Titre 1</span>
          </div>
        </a>

        <a href="page2.html" class="relative group w-full h-96">
          <img src="/Gallery/2.jpg" alt="Image 2" class="w-full h-full object-cover rounded-xl group-hover:grayscale-0 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-70 text-white text-3xl font-semibold group-hover:bg-opacity-30 transition duration-500">
            <span class="drop-shadow-md">Titre 2</span>
          </div>
        </a>

        <a href="page3.html" class="relative group w-full h-96">
          <img src="/Gallery/3.jpg" alt="Image 3" class="w-full h-full object-cover rounded-xl group-hover:grayscale-0 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-70 text-white text-3xl font-semibold group-hover:bg-opacity-30 transition duration-500">
            <span class="drop-shadow-md">Titre 3</span>
          </div>
        </a>

        <a href="page4.html" class="relative group w-full h-96">
          <img src="/Gallery/4.jpg" alt="Image 4" class="w-full h-full object-cover rounded-xl group-hover:grayscale-0 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-70 text-white text-3xl font-semibold group-hover:bg-opacity-30 transition duration-500">
            <span class="drop-shadow-md">Titre 4</span>
          </div>
        </a>
      </div>



    </section>
  )
}

export default Listing_services
