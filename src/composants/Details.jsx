'use client';

import { useParams } from 'react-router-dom';
import Caroussel_Details from './Caroussel_Details';
import classNames from 'classnames'; // Import ajouté

const reviews = { href: '#', average: 4, totalCount: 117 };

const apartments = [
  {
    id: 1,
    title: "Beautiful 3-Bedroom Flat",
    bathrooms: 1,
    bedrooms: 1,
    price: "50 000",
    District: "Deido",
    imageUrl: ["/Gallery/4.jpg", "/Gallery/5.jpg", "/Gallery/6.jpg"],
    description: "A spacious 3-bedroom flat located in the heart of the city.",
  },
  {
    id: 2,
    title: "Modern Studio Apartment",
    bathrooms: 1,
    bedrooms: 1,
    price: "40 000",
    District: "Akwa",
    imageUrl: ["/Gallery/2.jpg", "/Gallery/5.jpg", "/Gallery/6.jpg"],
    description: "A cozy studio apartment perfect for a single occupant or couple.",
  },
  {
    id: 3,
    title: "Luxury 4-Bedroom House",
    bathrooms: 2,
    bedrooms: 2,
    price: "20 000",
    District: "Bonandjo",
    imageUrl: ["/Gallery/3.jpg", "/Gallery/5.jpg", "/Gallery/6.jpg"],
    description: "A luxurious 4-bedroom house with a large garden and pool.",
  },
  {
    id: 4,
    title: "Luxury Bedroom House",
    bathrooms: 1,
    bedrooms: 2,
    price: "25 000",
    District: "Ndokoti",
    imageUrl: ["/Gallery/1.jpg", "/Gallery/5.jpg", "/Gallery/6.jpg"],
    description: "A luxurious 4-bedroom house with a large garden and pool.",
  },
];

function Example() {
  const { id } = useParams();
  const apartment = apartments.find((apt) => apt.id === parseInt(id));

  if (!apartment) {
    return <h1 className="lg:p-72 py-52 text-5xl mx-auto text-center font-extrabold lg:text-7xl">Appartement non trouvé</h1>;
  }

  return (
    <div className="mt-20 bg-white">
      <div className="pt-14">

        <h2 className="text-5xl font-bold text-center mb-1">More Informations</h2>

        {/* Caroussel */}
        <Caroussel_Details
          images={apartment.imageUrl}
        />

        {/* Apartment info */}

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-[1500px] lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">{apartment.title}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-5xl tracking-tight text-gray-900">XAF {apartment.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg
                      key={rating}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={classNames(
                        'size-8 shrink-0',
                        reviews.average > rating
                          ? 'fill-[url(#gold-gradient)]'  // Applique le dégradé
                          : 'text-gray-200'
                      )}
                    >
                      <defs>
                        <linearGradient id="gold-gradient" x1="0" x2="1" y1="0" y2="1">
                          <stop offset="0%" stopColor="#FFD700" />  {/* Début doré clair */}
                          <stop offset="50%" stopColor="#FFC300" />  {/* Milieu plus foncé */}
                          <stop offset="100%" stopColor="#B8860B" /> {/* Doré foncé */}
                        </linearGradient>
                      </defs>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.256 3.874h4.065c.969 0 1.371 1.24.588 1.81l-3.29 2.392 1.256 3.874c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.287 2.392c-.785.57-1.84-.197-1.54-1.118l1.256-3.874-3.29-2.392c-.783-.57-.38-1.81.588-1.81h4.065l1.256-3.874z" />
                    </svg>
                  ))}
                </div>


                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-gray-600 hover:text-gray-900 transition">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              <button
                type="submit"
                className="mt-10 lg:mt-64 flex w-full items-center justify-center border-transparent px-8 py-3 text-base font-medium focus:outline-none border border-yellow-500 bg-yellow-500 text-black rounded-lg hover:bg-black hover:text-yellow-500 transition"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{apartment.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Détails</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400">
                    <span className="text-gray-600">Salles de bains : {apartment.bathrooms}</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">Chambres : {apartment.bedrooms}</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">Quartier : {apartment.District}</span>
                  </li>

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;
