'use client';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  { name: 'Places: Low to High', value: 'placesAsc' },
  { name: 'Places: High to Low', value: 'placesDesc' },
  { name: 'Surface: Low to High', value: 'surfaceAsc' },
  { name: 'Surface: High to Low', value: 'surfaceDesc' },
  { name: 'Price: Low to High', value: 'priceAsc' },
  { name: 'Price: High to Low', value: 'priceDesc' },
];

export const Ceremonyy = [
  {
    id: 1,
    title: "Beautiful 3-Bedroom Flat",
    type: "ceremony",
    surface: 70,
    place: 100,
    sonorisation: "yes",
    wifi: "yes",
    decoration: "customizable",
    nettoyage: "included",
    price: "100 000",
    District: "Deido",
    imageUrl: ["/Gallery/salle_fete/f1.jpg", "/Gallery/salle_fete/f2.jpg", "/Gallery/salle_fete/f3.jpg"],
    description: "A spacious 3-bedroom flat located in the heart of the city.",
  },
  {
    id: 2,
    title: "Modern Studio Apartment",
    type: "ceremony",
    surface: 150,
    place: 200,
    sonorisation: "yes",
    wifi: "yes",
    decoration: "customizable",
    nettoyage: "included",
    price: "350 000",
    District: "Akwa",
    imageUrl: ["/Gallery/salle_fete/f4.jpg", "/Gallery/salle_fete/f5.jpg", "/Gallery/salle_fete/f6.jpg"],
    description: "A cozy studio apartment perfect for a single occupant or couple.",
  },
  {
    id: 3,
    title: "Luxury 4-Bedroom House",
    type: "ceremony",
    surface: 200,
    place: 210,
    sonorisation: "yes",
    wifi: "yes",
    decoration: "customizable",
    nettoyage: "included",
    price: "250 000",
    District: "Bonandjo",
    imageUrl: ["/Gallery/salle_fete/f7.jpg", "/Gallery/salle_fete/f1.jpg", "/Gallery/salle_fete/f2.jpg"],
    description: "A luxurious 4-bedroom house with a large garden and pool.",
  },
  {
    id: 4,
    title: "Luxury Bedroom House",
    type: "ceremony",
    surface: 50,
    place: 100,
    sonorisation: "yes",
    wifi: "yes",
    decoration: "customizable",
    nettoyage: "included",
    price: "90 000",
    District: "Ndokoti",
    imageUrl: ["/Gallery/salle_fete/f3.jpg", "/Gallery/salle_fete/f4.jpg", "/Gallery/salle_fete/f5.jpg"],
    description: "A luxurious 4-bedroom house with a large garden and pool.",
  },
];

const filters = [
  {
    id: 'District',
    name: 'District',
    options: [
      { value: 'Bonandjo', label: 'Bonandjo' },
      { value: 'Akwa', label: 'Akwa' },
      { value: 'Madagascar', label: 'Madagascar' },
      { value: 'Bessenge', label: 'Bessenge' },
      { value: 'Deido', label: 'Deido' },
      { value: 'Nylon', label: 'Nylon' },
      { value: 'Ndokoti', label: 'Ndokoti' },
      { value: 'New Bell', label: 'New Bell' },
      { value: 'Bonapriso', label: 'Bonapriso' },
      { value: 'Bali', label: 'Bali' },
    ],
  },

  {
    id: 'surface',
    name: 'Ceremony Room Area',
    options: [
      { value: 'lowsur', label: '-100m²' },
      { value: 'highsur', label: '+100m²' },
    ],
  },
  {
    id: 'places',
    name: 'Ceremony Room Places',
    options: [
      { value: 'lowpla', label: '-200 places' },
      { value: 'highpla', label: '+200 places' },
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: 'low', label: '-200,000 XAF' },
      { value: 'high', label: '+200,000 XAF' },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ceremonyFilterApp() {

  const navigate = useNavigate();

  const handleNavigate = (type, id) => {
    navigate(`/Details/${type}/${id}`);
  };

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState({
    District: [],
    surface: [],
    places: [],
    price: [],
  });
  const [sortOption, setSortOption] = useState(null);

  const Ceremonyy = [
    {
      id: 1,
      title: "Beautiful 3-Bedroom Flat",
      type: "ceremony",
      surface: 70,
      place: 100,
      sonorisation: "yes",
      wifi: "yes",
      decoration: "customizable",
      nettoyage: "included",
      price: "100 000",
      District: "Deido",
      imageUrl: ["/Gallery/salle_fete/f1.jpg", "/Gallery/salle_fete/f2.jpg", "/Gallery/salle_fete/f3.jpg"],
      description: "A spacious 3-bedroom flat located in the heart of the city.",
    },
    {
      id: 2,
      title: "Modern Studio Apartment",
      type: "ceremony",
      surface: 150,
      place: 200,
      sonorisation: "yes",
      wifi: "yes",
      decoration: "customizable",
      nettoyage: "included",
      price: "350 000",
      District: "Akwa",
      imageUrl: ["/Gallery/salle_fete/f4.jpg", "/Gallerysalle_fete/f5.jpg", "/Gallery/salle_fete/f6.jpg"],
      description: "A cozy studio apartment perfect for a single occupant or couple.",
    },
    {
      id: 3,
      title: "Luxury 4-Bedroom House",
      type: "ceremony",
      surface: 200,
      place: 210,
      sonorisation: "yes",
      wifi: "yes",
      decoration: "customizable",
      nettoyage: "included",
      price: "250 000",
      District: "Bonandjo",
      imageUrl: ["/Gallery/salle_fete/f7.jpg", "/Gallery/salle_fete/f1.jpg", "/Gallery/salle_fete/f2.jpg"],
      description: "A luxurious 4-bedroom house with a large garden and pool.",
    },
    {
      id: 4,
      title: "Luxury Bedroom House",
      type: "ceremony",
      surface: 50,
      place: 100,
      sonorisation: "yes",
      wifi: "yes",
      decoration: "customizable",
      nettoyage: "included",
      price: "90 000",
      District: "Ndokoti",
      imageUrl: ["/Gallery/salle_fete/f3.jpg", "/Gallery/salle_fete/f4.jpg", "/Gallery/salle_fete/f5.jpg"],
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

  const filteredceremony = Ceremonyy.filter((ceremony) => {
    const parsePrice = (price) => parseInt(price.replace(/\s/g, ''), 10); // Supprime les espaces et convertit en entier

    const DistrictMatch = selectedFilters.District.length === 0 || selectedFilters.District.includes(ceremony.District);

    const price = parsePrice(ceremony.price);
    const places = ceremony.place;
    const surface = ceremony.surface;

    const placesMatch = selectedFilters.places.length === 0 ||
      (selectedFilters.places.includes('lowpla') && places < 200) ||
      (selectedFilters.places.includes('highpla') && places >= 200);

    const surfaceMatch = selectedFilters.surface.length === 0 ||
      (selectedFilters.surface.includes('lowsur') && surface < 100) ||
      (selectedFilters.surface.includes('highsur') && surface >= 100);

    const priceMatch = selectedFilters.price.length === 0 ||
      (selectedFilters.price.includes('low') && price < 200000) ||
      (selectedFilters.price.includes('high') && price >= 200000);


    return DistrictMatch && placesMatch && surfaceMatch && priceMatch;
  });


  const sortedceremony = [...filteredceremony].sort((a, b) => {
    if (!sortOption) return 0;

    const parsePrice = (price) => {
      return parseInt(price.replace(/\s/g, '').replace(',', ''), 10); // Supprime les espaces et convertit en entier
    };

    switch (sortOption) {
      case 'placesAsc':
        return a.place - b.place;
      case 'placesDesc':
        return b.place - a.place;
      case 'surfaceAsc':
        return a.surface - b.surface;
      case 'surfaceDesc':
        return b.surface - a.surface;
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
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">Rent Out a Ceremony Room</h1>

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
                  {sortedceremony.map((ceremony) => (
                    <div
                      key={ceremony.id}
                      className="group relative bg-white border border-gray-200 rounded-lg hover:shadow-2xl shadow-lg transition-shadow duration-300"
                    >

                      <div className="w-full h-64 bg-gray-200">
                        <img
                          src={ceremony.imageUrl[0]}
                          alt={ceremony.title}
                          className="object-cover w-full h-full rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {ceremony.title}
                        </h3>
                        <p className="text-lg text-gray-700 flex items-center gap-2">
                          <svg className="h-5 w-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" ><path d="M50.001 0C33.65 0 20.25 13.36 20.25 29.666c0 6.318 2.018 12.19 5.433 17.016L46.37 82.445c2.897 3.785 4.823 3.066 7.232-.2l22.818-38.83c.46-.834.822-1.722 1.137-2.629a29.28 29.28 0 0 0 2.192-11.12C79.75 13.36 66.354 0 50.001 0zm0 13.9c8.806 0 15.808 6.986 15.808 15.766c0 8.78-7.002 15.763-15.808 15.763c-8.805 0-15.81-6.982-15.81-15.763c0-8.78 7.005-15.765 15.81-15.765z" fill="#000"></path><path d="M68.913 48.908l-.048.126c.015-.038.027-.077.042-.115l.006-.011z" fill="#000"></path><path d="M63.848 73.354l-1.383 1.71c1.87.226 3.68.491 5.375.812l-5.479 1.623l7.313 1.945l5.451-1.719c3.348 1.123 7.984 2.496 9.52 4.057h-10.93l1.086 3.176h11.342c-.034 1.79-3.234 3.244-6.29 4.422l-7.751-1.676l-7.303 2.617l7.8 1.78c-4.554 1.24-12.2 1.994-18.53 2.341l-.266-3.64h-7.606l-.267 3.64c-6.33-.347-13.975-1.1-18.53-2.34l7.801-1.781l-7.303-2.617l-7.752 1.676c-3.012-.915-6.255-2.632-6.289-4.422H25.2l1.086-3.176h-10.93c1.536-1.561 6.172-2.934 9.52-4.057l5.451 1.719l7.313-1.945l-5.479-1.623a82.552 82.552 0 0 1 5.336-.807l-1.363-1.713c-14.785 1.537-27.073 4.81-30.295 9.979C.7 91.573 19.658 99.86 49.37 99.989c.442.022.878.006 1.29 0c29.695-.136 48.636-8.42 43.501-16.654c-3.224-5.171-15.52-8.445-30.314-9.981z" fill="#000"></path></svg>
                          {ceremony.District}
                        </p>
                        <p className="mt-2 text-gray-700 flex items-center gap-2">
                          <svg viewBox="0 0 15 15" class="h-5 w-5 text-black group-hover:text-yellow-500 transition-all" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H2.50002C2.22388 4.99998 2.00002 5.22384 2.00002 5.49998V12.5C2.00002 12.7761 2.22388 13 2.50002 13H9.50002C9.77616 13 10 12.7761 10 12.5V5.49998C10 5.22384 9.77616 4.99998 9.50002 4.99998ZM2.50002 3.99998C1.67159 3.99998 1.00002 4.67156 1.00002 5.49998V12.5C1.00002 13.3284 1.67159 14 2.50002 14H9.50002C10.3284 14 11 13.3284 11 12.5V5.49998C11 4.67156 10.3284 3.99998 9.50002 3.99998H2.50002ZM14.7389 6.00001H14V12H14.7389C14.9469 12 15.064 12.2393 14.9362 12.4035L13.6974 13.9963C13.5973 14.125 13.4028 14.125 13.3027 13.9963L12.0639 12.4035C11.9362 12.2393 12.0532 12 12.2612 12H13V6.00001H12.2612C12.0532 6.00001 11.9361 5.76074 12.0639 5.59653L13.3027 4.00373C13.4028 3.87505 13.5973 3.87505 13.6974 4.00374L14.9362 5.59653C15.0639 5.76074 14.9469 6.00001 14.7389 6.00001Z"
                              fill="#000000"
                            />
                          </svg>
                          {ceremony.surface}m²
                        </p>
                        <p className="mt-2 text-gray-700 flex items-center gap-2">
                          <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512" class="h-5 w-5 text-black group-hover:text-yellow-500 transition-all" xml:space="preserve">
                            <g>
                              <rect x="146.966" class="st0" width="218.067" height="189.867" />
                              <polygon class="st0" points="365.033,209.049 146.966,209.049 98.998,280.883 413.002,280.883 	" />
                              <polygon class="st0" points="98.998,340.692 98.998,512 145.995,512 145.995,340.692 366.005,340.692 366.005,512 413.002,512 
		                          413.002,340.692 413.002,299.67 98.998,299.67 	"/>
                            </g>
                          </svg>
                          {ceremony.place} Place(s)
                        </p>
                        <p className="mt-4 text-lg font-bold text-black">
                          {ceremony.price} XAF <span className="text-gray-400 text-base">/day</span>
                        </p>
                      </div>
                      <div className="absolute bottom-4 right-4 group">
                        <a
                          onClick={() => handleNavigate(ceremony.type, ceremony.id)}
                          className="relative flex items-center cursor-pointer justify-center w-10 h-10 group-hover:bg-yellow-500 rounded-full transition-all duration-500"
                        >
                          <div className="absolute w-16 h-8 border-t-4 cursor-pointer border-yellow-500 rounded-full -top-3 group-hover:scale-100 scale-0 transition-transform duration-500"></div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5 text-gray-400 group-hover:text-black transition-colors"
                            cursor-pointer
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
