'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';

const sortOptions = [
  { name: 'Bathrooms: Low to High', value: 'bathroomsAsc' },
  { name: 'Bathrooms: High to Low', value: 'bathroomsDesc' },
  { name: 'Bedrooms: Low to High', value: 'bedroomsAsc' },
  { name: 'Bedrooms: High to Low', value: 'bedroomsDesc' },
  { name: 'Price: Low to High', value: 'priceAsc' },
  { name: 'Price: High to Low', value: 'priceDesc' },
];

const filters = [
  {
    id: 'region',
    name: 'Region',
    options: [
      { value: 'Adamaoua', label: 'Adamaoua' },
      { value: 'Centre', label: 'Centre' },
      { value: 'Est', label: 'Est' },
      { value: 'Extrême-Nord', label: 'Extrême-Nord' },
      { value: 'Littoral', label: 'Littoral' },
      { value: 'Nord', label: 'Nord' },
      { value: 'Nord-Ouest', label: 'Nord-Ouest' },
      { value: 'Ouest', label: 'Ouest' },
      { value: 'Sud', label: 'Sud' },
      { value: 'Sud-Ouest', label: 'Sud-Ouest' },
    ],
  },
  {
    id: 'bathrooms',
    name: 'Bathrooms',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ],
  },
  {
    id: 'bedrooms',
    name: 'Bedrooms',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: 'low', label: '-80,000 XAF' },
      { value: 'high', label: '+80,000 XAF' },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ApartmentFilterApp() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    region: [],
    bathrooms: [],
    bedrooms: [],
    price: [],
  });
  const [sortOption, setSortOption] = useState(null);

  const apartments = [
    {
      id: 1,
      title: "Beautiful 3-Bedroom Flat",
      bathrooms: 2,
      bedrooms: 3,
      price: "500 000",
      region: "Littoral",
      imageUrl: "../../public/Gallery/4.jpg",
      description: "A spacious 3-bedroom flat located in the heart of the city.",
    },
    {
      id: 2,
      title: "Modern Studio Apartment",
      bathrooms: 1,
      bedrooms: 1,
      price: "250 000",
      region: "Centre",
      imageUrl: "../../public/Gallery/2.jpg",
      description: "A cozy studio apartment perfect for a single occupant or couple.",
    },
    {
      id: 3,
      title: "Luxury 4-Bedroom House",
      bathrooms: 3,
      bedrooms: 4,
      price: "1 200 000",
      region: "Adamaoua",
      imageUrl: "../../public/Gallery/3.jpg",
      description: "A luxurious 4-bedroom house with a large garden and pool.",
    },
    {
      id: 4,
      title: "Luxury Bedroom House",
      bathrooms: 3,
      bedrooms: 3,
      price: "50 000",
      region: "Nord-Ouest",
      imageUrl: "../../public/Gallery/1.jpg",
      description: "A luxurious 4-bedroom house with a large garden and pool.",
    },
  ];

  const handleFilterChange = (sectionId, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[sectionId].includes(value)) {
        updatedFilters[sectionId] = updatedFilters[sectionId].filter((item) => item !== value);
      } else {
        updatedFilters[sectionId].push(value);
      }
      return updatedFilters;
    });
  };

  const filteredApartments = apartments.filter((apartment) => {
    const parsePrice = (price) => parseInt(price.replace(/\s/g, ''), 10); // Supprime les espaces et convertit en entier
    
    const regionMatch = selectedFilters.region.length === 0 || selectedFilters.region.includes(apartment.region);
    const bathroomsMatch = selectedFilters.bathrooms.length === 0 || selectedFilters.bathrooms.includes(apartment.bathrooms.toString());
    const bedroomsMatch = selectedFilters.bedrooms.length === 0 || selectedFilters.bedrooms.includes(apartment.bedrooms.toString());
    
    const price = parsePrice(apartment.price);
    const priceMatch = selectedFilters.price.length === 0 || 
      (selectedFilters.price.includes('low') && price < 80000) || 
      (selectedFilters.price.includes('high') && price >= 80000);
  
    return regionMatch && bathroomsMatch && bedroomsMatch && priceMatch;
  });
  

  const sortedApartments = [...filteredApartments].sort((a, b) => {
    if (!sortOption) return 0;
  
    const parsePrice = (price) => {
      return parseInt(price.replace(/\s/g, '').replace(',', ''), 10); // Supprime les espaces et convertit en entier
    };
  
    switch (sortOption) {
      case 'bathroomsAsc':
        return a.bathrooms - b.bathrooms;
      case 'bathroomsDesc':
        return b.bathrooms - a.bathrooms;
      case 'bedroomsAsc':
        return a.bedrooms - b.bedrooms;
      case 'bedroomsDesc':
        return b.bedrooms - a.bedrooms;
      case 'priceAsc':
        return parsePrice(a.price) - parsePrice(b.price);
      case 'priceDesc':
        return parsePrice(b.price) - parsePrice(a.price);
      default:
        return 0;
    }
  });
  

  return (
    <div className="bg-white w-full mt-28">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={`${section.id}-${option.value}`} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  value={option.value}
                                  checked={selectedFilters[section.id]?.includes(option.value) || false}
                                  onChange={() => handleFilterChange(section.id, option.value)}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-black checked:bg-black indeterminate:border-black indeterminate:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />

                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-full px-4 sm:px-6 lg:px-56">
          {/* Header Section */}
          <div className="flex flex-wrap items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Rent Out a Flat</h1>

            <div className="flex items-center mt-4 sm:mt-0">
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-400 hover:text-gray-900">
                  Sort
                  <Squares2X2Icon aria-hidden="true" className="h-5 w-5 ml-1" />
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-900"
                  />
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          onClick={() => setSortOption(option.value)} // Mise à jour du tri
                          className={classNames(
                            sortOption === option.value ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer w-full'
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="ml-4 p-2 text-gray-400 hover:text-gray-900 sm:hidden"
                aria-label="Filters"
              >
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main Section */}
          <section aria-labelledby="products-heading" className="py-6 lg:py-10">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Sidebar Filters */}
              <aside className="hidden lg:block">
                <form>
                  {filters.map((section) => (
                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-4">
                      <h3>
                        <DisclosureButton className="flex w-full justify-between items-center text-lg font-medium text-gray-900">
                          {section.name}
                          <span>
                            <PlusIcon className="h-5 w-5 text-gray-500 group-open:hidden" />
                            <MinusIcon className="h-5 w-5 text-gray-500 group-open:block hidden" />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-4">
                        <div className="space-y-3">
                          {section.options.map((option, optionIdx) => (
                            <div key={`${section.id}-${option.value}`} className="flex items-center gap-2">
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                value={option.value}
                                checked={selectedFilters[section.id]?.includes(option.value) || false}
                                onChange={() => handleFilterChange(section.id, option.value)}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 checked:bg-black bg-black checked:border-black focus:ring-black"
                                style={{
                                  accentColor: 'black', // Applique le noir pour le "check".
                                }}
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </form>
              </aside>

              {/* Product Grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {sortedApartments.map((apartment) => (
                    <div
                      key={apartment.id}
                      className="group relative bg-white border border-gray-200 rounded-lg hover:shadow-2xl shadow-lg transition-shadow duration-300"
                    >
                      <div className="w-full h-64 bg-gray-200">
                        <img
                          src={apartment.imageUrl}
                          alt={apartment.title}
                          className="object-cover w-full h-full rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900">{apartment.title}</h3>
                        <p className="text-lg text-gray-700 flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#000"
                            className="h-5 w-5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                          {apartment.region}
                        </p>
                        <p className="mt-2 text-gray-700 flex items-center gap-2">
                        <svg className="h-5 w-5" viewBox="0 0 50 50" fill="#000" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M5 10C3.347656 10 2 11.347656 2 13L2 26.8125C3.296875 25.6875 4.9375 24.777344 7 24.0625L7 20C7 17.339844 11.542969 17 15.5 17C19.457031 17 24 17.339844 24 20L24 22C24.335938 21.996094 24.65625 22 25 22C25.34375 22 25.664063 21.996094 26 22L26 20C26 17.339844 30.542969 17 34.5 17C38.457031 17 43 17.339844 43 20L43 24.03125C45.058594 24.742188 46.691406 25.671875 48 26.8125L48 13C48 11.347656 46.652344 10 45 10 Z M 25 24C5.90625 24 -0.015625 27.53125 0 37L50 37C50.015625 27.46875 44.09375 24 25 24 Z M 0 39L0 50L7 50L7 46C7 44.5625 7.5625 44 9 44L41 44C42.4375 44 43 44.5625 43 46L43 50L50 50L50 39Z"/></svg>
                          {apartment.bedrooms} Bedrooms
                        </p>

                        <p className="mt-2 text-gray-700 flex items-center gap-2">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">

                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.38517 2.75C4.48209 2.75 3.75 3.48209 3.75 4.38516V11.25H4.03429C4.04516 11.25 4.05599 11.25 4.06675 11.25C4.07208 11.25 4.07739 11.25 4.08268 11.25L19.9332 11.25C19.944 11.25 19.9548 11.25 19.9657 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21.7321C21.7386 12.7949 21.7433 12.8405 21.7463 12.8864C21.7501 12.9442 21.75 13.0066 21.75 13.0668L21.75 13.1047C21.75 13.4799 21.75 13.6998 21.7344 13.9452C21.5925 16.1815 20.384 18.2467 18.6326 19.597C18.6463 19.6186 18.6591 19.6412 18.6708 19.6646L19.6708 21.6646C19.8561 22.0351 19.7059 22.4856 19.3354 22.6708C18.9649 22.8561 18.5144 22.7059 18.3292 22.3354L17.3615 20.4C16.5597 20.8059 15.6878 21.073 14.7809 21.1648C14.5364 21.1896 14.3872 21.1952 14.133 21.2047L14.1263 21.205C13.3861 21.2328 12.6615 21.25 12 21.25C11.3385 21.25 10.6139 21.2328 9.87368 21.205L9.86699 21.2047C9.61278 21.1952 9.46358 21.1896 9.2191 21.1648C8.31222 21.073 7.44028 20.8059 6.63851 20.4L5.67082 22.3354C5.48558 22.7059 5.03507 22.8561 4.66459 22.6708C4.29411 22.4856 4.14394 22.0351 4.32918 21.6646L5.32918 19.6646C5.34089 19.6412 5.35366 19.6186 5.3674 19.597C3.61596 18.2467 2.4075 16.1815 2.26556 13.9452C2.24999 13.6998 2.24999 13.4798 2.25 13.1046L2.25 13.0827C2.25 13.0774 2.25 13.0721 2.24999 13.0668C2.24999 13.0483 2.24998 13.0296 2.25008 13.0108C2.25003 13.0072 2.25 13.0036 2.25 13V12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H2.25V4.38516C2.25 2.65366 3.65366 1.25 5.38517 1.25C6.66715 1.25 7.81998 2.0305 8.29609 3.22079L8.40623 3.49613C9.19952 3.29489 10.0603 3.34152 10.8717 3.68813C11.887 4.12189 12.6258 4.94029 13.0041 5.90053C13.1526 6.27744 12.975 6.70417 12.6029 6.86436L6.64215 9.43044C6.45572 9.51069 6.24473 9.51197 6.05735 9.43396C5.86997 9.35596 5.72221 9.20535 5.6478 9.01651C5.26959 8.05665 5.24692 6.94515 5.66723 5.91014C5.96643 5.17335 6.45214 4.56929 7.04665 4.13607L6.90338 3.77788C6.65506 3.15708 6.05379 2.75 5.38517 2.75ZM4.08268 12.75C4.04261 12.75 4.01877 12.75 4.00076 12.7502C3.98765 12.7504 3.98298 12.7506 3.98281 12.7506C3.98215 12.7506 3.98276 12.7506 3.98281 12.7506C3.85775 12.7587 3.75904 12.8581 3.75057 12.9831C3.75052 12.9843 3.75035 12.9893 3.75022 13.0008C3.75001 13.0188 3.75 13.0426 3.75 13.0827C3.75 13.4853 3.75031 13.6573 3.76255 13.8501C3.94798 16.7718 6.45762 19.3775 9.37024 19.6725C9.5652 19.6922 9.67311 19.6964 9.92999 19.7061C10.658 19.7334 11.3629 19.75 12 19.75C12.6371 19.75 13.342 19.7334 14.07 19.7061C14.3269 19.6964 14.4348 19.6922 14.6298 19.6725C17.5424 19.3775 20.052 16.7718 20.2375 13.8501C20.2497 13.6573 20.25 13.4853 20.25 13.0827C20.25 13.0426 20.25 13.0188 20.2498 13.0008C20.2497 12.9906 20.2495 12.9855 20.2495 12.9837C20.2494 12.9825 20.2494 12.9824 20.2495 12.9837C20.2413 12.8584 20.1415 12.7587 20.0162 12.7505C20.0174 12.7506 20.0177 12.7506 20.0162 12.7505C20.0142 12.7505 20.009 12.7503 19.9992 12.7502C19.9812 12.75 19.9574 12.75 19.9173 12.75H4.08268ZM10.2824 5.06753C9.62506 4.78672 8.91452 4.82579 8.30713 5.12147C7.76827 5.3838 7.31118 5.8486 7.05701 6.47451C6.89349 6.87716 6.83436 7.29656 6.86648 7.70078L11.2476 5.81471C10.9982 5.49339 10.6713 5.2337 10.2824 5.06753Z" fill="#000000" /> </g>

                          </svg>
                          {apartment.bathrooms} Bathrooms
                        </p>
                        <p className="mt-4 text-lg font-bold text-black">
                          {apartment.price} XAF
                        </p>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-800 transition-colors"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.458 12C3.732 7.943 7.523 5.25 12 5.25c4.477 0 8.268 2.693 9.542 6.75-1.274 4.057-5.065 6.75-9.542 6.75-4.477 0-8.268-2.693-9.542-6.75Z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
