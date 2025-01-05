import React from 'react'

function Listing_services() {
  return (
    <section className="w-full pb-16 px-4">
      {/* Section Header */}
      <div className="mt-7 mx-auto text-left grid max-w-6xl grid-cols-12 gap-4 pt-20 sm:pt-28">
        <div className="col-span-12 rounded-lg">
          <h2 className="text-5xl font-bold text-center">Our Services</h2>
        </div>
      </div>

      <div class="mt-14 grid gap-4 grid-cols-1 sm:grid-cols-2 place-items-center h-full max-w-7xl mx-auto">
        <a href="/Choisir_Categorie" class="relative group w-full h-96">
          <img src="/Gallery/4.jpg" alt="Image 4" class="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-70 text-white text-2xl sm:text-3xl font-semibold group-hover:bg-opacity-30 transition duration-500">
            <p class="drop-shadow-md text-center">Rental of studios and apartments</p>
          </div>
        </a>

        <a href="/Louer_une_maison" class="relative group w-full h-96">
          <img src="/Gallery/maisons/house.jpg" alt="Image 1" class="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-70 text-white text-2xl sm:text-3xl font-semibold group-hover:bg-opacity-30 transition duration-500">
            <p class="drop-shadow-md text-center">Houses rental</p>
          </div>
        </a>

        <a href="/Louer_une_salle_de_ceremonie" class="relative group w-full h-96">
          <img src="/Gallery/salle_fete/fete.jpg" alt="Image 2" class="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-70 text-white text-2xl sm:text-3xl font-semibold group-hover:bg-opacity-30 transition duration-500">
            <p class="drop-shadow-md text-center">Ceremony rooms rental</p>
          </div>
        </a>

        <a href="/Louer_une_voiture" class="relative group w-full h-96">
          <img src="/Gallery/voitures/car.jpg" alt="Image 3" class="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-70 text-white text-2xl sm:text-3xl font-semibold group-hover:bg-opacity-30 transition duration-500">
            <p class="drop-shadow-md text-center">Car rental</p>
          </div>
        </a>

        <a href="/Reserver_un_restaurant" class="relative group w-full h-96">
          <img src="/Gallery/restaurant/restau.jpg" alt="Image 4" class="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-70 text-white text-2xl sm:text-3xl font-semibold group-hover:bg-opacity-30 transition duration-500">
            <p class="drop-shadow-md text-center">Restauration reservation</p>
          </div>
        </a>
        
        <a href="/Service_traiteur" class="relative group w-full h-96">
          <img src="/Gallery/service_traiteur/cat.jpg" alt="Image 4" class="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-70 text-white text-2xl sm:text-3xl font-semibold group-hover:bg-opacity-30 transition duration-500">
            <p class="drop-shadow-md text-center">Catering service</p>
          </div>
        </a>

        <a href="Refaire_ma_deco" class="relative group w-full h-96">
          <img src="/Gallery/deco/deco.jpg" alt="Image 4" class="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-70 text-white text-2xl sm:text-3xl font-semibold group-hover:bg-opacity-30 transition duration-500">
            <p class="drop-shadow-md text-center">Decoration service</p>
          </div>
        </a>

      </div>
    </section>

  )
}

export default Listing_services
