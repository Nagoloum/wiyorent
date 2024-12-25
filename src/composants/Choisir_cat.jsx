import React from 'react';

const Choix = () => {
  return (
    <section className="w-full pb-16 px-4">
      {/* Section Header */}
      <div className="mt-7 mx-auto text-left grid max-w-6xl grid-cols-12 gap-4 pt-20 sm:pt-40">
        <div className="col-span-12 rounded-lg">
          <h2 className="text-5xl font-bold text-center">Choose Your Category</h2>
        </div>
      </div>

      <div class="mt-14 grid gap-4 grid-cols-1 sm:grid-cols-2 place-items-center h-full max-w-7xl mx-auto">
        <a href="/Appartement_pour_Etudiants" class="relative group w-full h-96">
          <img src="/Gallery/choix_img/c5.jpg" alt="Image 4" class="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-70 text-white text-2xl sm:text-3xl font-semibold group-hover:bg-opacity-30 transition duration-500">
            <span class="drop-shadow-md">I'm a Student</span>
          </div>
        </a>

        <a href="/Autres_appartements" class="relative group w-full h-96">
          <img src="/Gallery/choix_img/c2.jpg" alt="Image 1" class="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition duration-500" />
          <div class="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-70 text-white text-2xl sm:text-3xl font-semibold group-hover:bg-opacity-30 transition duration-500">
            <span class="drop-shadow-md">I'm not a Student</span>
          </div>
        </a>

      </div>
    </section>
  );
};

export default Choix;
