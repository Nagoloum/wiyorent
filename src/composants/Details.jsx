'use client';

import { useParams } from 'react-router-dom';
import Caroussel_Details from './Caroussel_Details';
import classNames from 'classnames'; // Import ajouté
import { FaWhatsapp } from 'react-icons/fa';
import { apartments } from './Stud_Appart';
import { appart } from './Business_Appart';
import { cars } from './Cars';
import { houses } from './House';
import { Ceremonyy } from './Ceremony';
import catering from './Catering';
import Deco from './Deco';
import restau from './Restau';


const reviews = { href: '#', average: 4, totalCount: 117 };

function Example() {
  const { type, id } = useParams();
  let data;

  if (type === "Appartements_etudiants") data = apartments.find((item) => item.id === parseInt(id));
  if (type === "Appartements") data = appart.find((item) => item.id === parseInt(id));
  if (type === "car") data = cars.find((item) => item.id === parseInt(id));
  if (type === "maison") data = houses.find((item) => item.id === parseInt(id));
  if (type === "ceremony") data = Ceremonyy.find((item) => item.id === parseInt(id));

  if (!data) {
    return <h1 className="lg:p-72 py-52 text-5xl mx-auto text-center font-extrabold lg:text-7xl">Element non trouvé</h1>;
  }

  const Attributes = () => {
    if (type === "Appartements_etudiants" || type === "Appartements") {
      return (
        <>
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-[1500px] lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">{data.title}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 items-center lg:mt-20">
              <h2 className="sr-only">More informations</h2>
              <p className="text-4xl tracking-tight text-gray-900">XAF {data.price} /month</p>

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

                </div>
              </div>

              <form action="tel:+33769477997" className="mt-10">
                <button
                  type="submit"
                  className="mt-10 lg:mt-6 flex w-full items-center justify-center border-transparent px-8 py-3 text-base font-medium focus:outline-none border border-yellow-500 bg-yellow-500 text-black rounded-lg hover:bg-black hover:text-yellow-500 transition"
                >
                  <FaWhatsapp size={25} className='mr-5' /> Contact Us
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r h-96 lg:border-gray-400 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-xl text-gray-900">{data.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-medium text-gray-900">More informations</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-10 text-sm">
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Number of Bathrooms : {data.bathrooms} bathroom(s)</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Number of Bedrooms : {data.bedrooms} bedroom(s)</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">District : {data.District}</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </>
      )
    }

    if (type === "maison") {
      return (
        <>
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-[1500px] lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">{data.title} - {data.surface}m² - {data.Annee}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 items-center lg:mt-72">
              <h2 className="sr-only">More informations</h2>
              <p className="text-4xl tracking-tight text-gray-900">XAF {data.price} /month</p>

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

                </div>
              </div>

              <form action="tel:+33769477997" className="mt-10">
                <button
                  type="submit"
                  className="mt-10 lg:mt-6 flex w-full items-center justify-center border-transparent px-8 py-3 text-base font-medium focus:outline-none border border-yellow-500 bg-yellow-500 text-black rounded-lg hover:bg-black hover:text-yellow-500 transition"
                >
                  <FaWhatsapp size={25} className='mr-5' /> Contact Us
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
              <h3 className="mt-10 text-center text-2xl font-medium text-gray-900">More Details</h3>
            </div>
            <div className="lg:col-span-1 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}

              <div className="mt-1">
                <div className="mt-1">
                  <ul role="list" className="list-disc space-y-2 pl-10 text-sm">
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Area : {data.surface}m²</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Year of Construction : {data.Annee}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Number of Floors : {data.etage} floor(s)</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Garden : {data.jardin}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Pool : {data.piscine}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Gate : {data.barriere}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Kitchen : {data.cuisine}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Living room Area : {data.surfacesalon}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Number of Bathrooms : {data.bathrooms} bathroom(s)</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Number of Bedrooms : {data.bedrooms} bedroom(s)</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="lg:col-span-1 lg:col-start-2 lg:border-r lg:border-gray-400 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}

              <div className="mt-1">
                <div className="mt-1">
                  <ul role="list" className="list-disc space-y-2 pl-10 text-sm">
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Balcony : {data.balcon}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Garage : {data.garage}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Outdoor Parking : {data.parkingext}</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
              <h3 className="text-center text-2xl font-medium text-gray-900">🤩 With a Guaranteed Guided Tour 🤩</h3>
            </div>

          </div>
        </>
      )
    }

    if (type === "car") {
      return (
        <>
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-[1500px] lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">{data.marque} - {data.modele} - {data.Annee}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 items-center lg:mt-72">
              <h2 className="sr-only">More informations</h2>
              <p className="text-4xl tracking-tight text-gray-900">XAF {data.price}</p>

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

                </div>
              </div>

              <form action="tel:+33769477997" className="mt-10">
                <button
                  type="submit"
                  className="mt-10 lg:mt-6 flex w-full items-center justify-center border-transparent px-8 py-3 text-base font-medium focus:outline-none border border-yellow-500 bg-yellow-500 text-black rounded-lg hover:bg-black hover:text-yellow-500 transition"
                >
                  <FaWhatsapp size={25} className='mr-5' /> Contact Us
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
              <h3 className="mt-10 text-center text-2xl font-medium text-gray-900">More Details</h3>
            </div>
            <div className="lg:col-span-1 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}

              <div className="mt-1">
                <div className="mt-1">
                  <ul role="list" className="list-disc space-y-2 pl-10 text-sm">
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Brand : {data.marque}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Model : {data.modele}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Type : {data.style}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Conditions : {data.Conditions}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Year : {data.Annee}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Doors : {data.doors} doors</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Localisation : {data.District}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Color : {data.color}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Fuel : {data.carburant}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Cylinder Capacity : {data.cylindree}</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="lg:col-span-1 lg:col-start-2 lg:border-r lg:border-gray-400 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}

              <div className="mt-1">
                <div className="mt-1">
                  <ul role="list" className="list-disc space-y-2 pl-10 text-sm">
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Power : {data.puissance}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Transmission : {data.Transmission}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Max Speed : {data.vitesse_max}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Acceleration : {data.acceleration}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Car Lenght : {data.longueur}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Car Width : {data.largeur}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Car Height : {data.hauteur}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Car Weight : {data.poids}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Air Conditioning : {data.climatisation}</span>
                    </li>

                  </ul>
                </div>
              </div>

            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
              <h3 className="text-center text-2xl font-medium text-gray-900">🤩 With {data.guaranteed} Warrantly 🤩</h3>
            </div>

          </div>
        </>
      )
    }

    if (type === "ceremony") {
      return (
        <>
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-[1500px] lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">{data.title}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 items-center lg:mt-20">
              <h2 className="sr-only">More informations</h2>
              <p className="text-4xl tracking-tight text-gray-900">XAF {data.price} /day</p>

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

                </div>
              </div>

              <form action="tel:+33769477997" className="mt-10">
                <button
                  type="submit"
                  className="mt-10 lg:mt-6 flex w-full items-center justify-center border-transparent px-8 py-3 text-base font-medium focus:outline-none border border-yellow-500 bg-yellow-500 text-black rounded-lg hover:bg-black hover:text-yellow-500 transition"
                >
                  <FaWhatsapp size={25} className='mr-5' /> Contact Us
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r h-96 lg:border-gray-400 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-xl text-gray-900">{data.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-medium text-gray-900">More informations</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-10 text-sm">
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Ceremony Room Area : {data.surface}m²</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Number of Places : {data.place} places</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Sound System : {data.sonorisation}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Wifi : {data.wifi}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Decoration : {data.decoration}</span>
                    </li>
                    <li className="text-lg text-gray-400">
                      <span className="text-gray-600">Cleaning after the event : {data.nettoyage}</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </>
      )
    }

  }

  return (
    <div className="mt-20 bg-white">
      <div className="pt-14">

        <h2 className="text-5xl font-bold text-center mb-1">More Informationss</h2>

        {/* Caroussel */}
        <Caroussel_Details
          images={data.imageUrl}
        />

        {/* info */}
        {Attributes()}

      </div>
    </div>
  );
}

export default Example;