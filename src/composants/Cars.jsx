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
  { name: 'Years: Oldest to Newest', value: 'YearsAsc' },
  { name: 'Years: Newest to Oldest', value: 'YearsDesc' },
  { name: 'Price: Low to High', value: 'priceAsc' },
  { name: 'Price: High to Low', value: 'priceDesc' },
];

export const cars = [
  {
    id: 1,
    marque: "Land Rover",
    modele: "Range Rover",
    Conditions: "Occasion",
    doors: 2,
    Annee: "2017",
    style: "Berline",
    guaranteed: "6 month",
    color: "blue",
    cylindree: "2 liters",
    puissance: "100 horses",
    carburant: "Essence",
    Transmission: "automatic",
    vitesse_max: "200 km/h",
    acceleration: "10s",
    longueur: "1.5 meter",
    largeur: "0.9 meter",
    hauteur: "1 meters",
    poids: "1500 kg",
    climatisation: "no",
    type: "car",
    price: "5 000 000",
    District: "Deido",
    imageUrl: ["/Gallery/voitures/c1.jpg", "/Gallery/voitures/c2.jpg", "/Gallery/voitures/c3.jpg"],
  },
  {
    id: 2,
    marque: "Dodge",
    modele: "Mustang",
    Conditions: "Brand new",
    doors: 2,
    Annee: "2018",
    style: "Hatchback",
    guaranteed: "6 month",
    color: "red",
    cylindree: "1.5 liters",
    puissance: "120 horses",
    carburant: "Diesel",
    Transmission: "manual",
    vitesse_max: "210 km/h",
    acceleration: "9s",
    longueur: "1.5 meter",
    largeur: "0.9 meter",
    hauteur: "1 meters",
    poids: "1700 kg",
    climatisation: "yes",
    type: "car",
    price: "4 000 000",
    District: "Akwa",
    imageUrl: ["/Gallery/voitures/c4.jpg", "/Gallery/voitures/c5.jpg", "/Gallery/voitures/c6.jpg"],
  },
  {
    id: 3,
    marque: "Mercedes",
    modele: "GLE",
    Conditions: "Occasion",
    doors: 2,
    Annee: "2019",
    style: "Cabriolet",
    guaranteed: "4 month",
    color: "white",
    cylindree: "1 liter",
    puissance: "150 horses",
    carburant: "Hybride",
    Transmission: "automatic",
    vitesse_max: "220 km/h",
    acceleration: "8s",
    longueur: "1.5 meter",
    largeur: "0.9 meter",
    hauteur: "1 meters",
    poids: "1300 kg",
    climatisation: "no",
    type: "car",
    price: "20 000 000",
    District: "Bonandjo",
    imageUrl: ["/Gallery/voitures/c7.jpg", "/Gallery/voitures/c8.jpg", "/Gallery/voitures/c9.jpg"],
  },
  {
    id: 4,
    marque: "Audi",
    modele: "RS8",
    Conditions: "Brand new",
    doors: 4,
    Annee: "2022",
    style: "Pickup",
    guaranteed: "5 month",
    color: "black",
    cylindree: "2 liters",
    puissance: "200 horses",
    carburant: "Electrique",
    Transmission: "manual",
    vitesse_max: "280 km/h",
    acceleration: "10s",
    longueur: "1.4 meter",
    largeur: "0.9 meter",
    hauteur: "1 meters",
    poids: "1700 kg",
    climatisation: "no",
    type: "car",
    price: "21 000 000",
    District: "Ndokoti",
    imageUrl: ["/Gallery/voitures/c10.jpg", "/Gallery/voitures/c11.jpg", "/Gallery/voitures/c1.jpg"],
  },
  {
    id: 5,
    marque: "Mercedes",
    modele: "GLK",
    Conditions: "Occasion",
    doors: 4,
    Annee: "2021",
    style: "Coupé",
    guaranteed: "6 month",
    color: "yellow",
    cylindree: "1 liter",
    puissance: "200 horses",
    carburant: "Essence",
    Transmission: "automatic",
    vitesse_max: "250 km/h",
    acceleration: "7s",
    longueur: "1.6 meter",
    largeur: "0.9 meter",
    hauteur: "1.3 meter",
    poids: "1800 kg",
    climatisation: "yes",
    type: "car",
    price: "25 000 000",
    District: "Ndokoti",
    imageUrl: ["/Gallery/voitures/c2.jpg", "/Gallery/voitures/c3.jpg", "/Gallery/voitures/c4.jpg"],
  },
  {
    id: 6,
    marque: "Maserati",
    modele: "MS",
    Conditions: "Brand new",
    doors: 2,
    Annee: "2020",
    style: "SUV",
    guaranteed: "4 month",
    color: "pink",
    cylindree: "1.2 liters",
    puissance: "100 horses",
    carburant: "Diesel",
    Transmission: "manual",
    vitesse_max: "220 km/h",
    acceleration: "8s",
    longueur: "1.4 meter",
    largeur: "0.8 meter",
    hauteur: "1.2 meter",
    poids: "1400 kg",
    climatisation: "yes",
    type: "car",
    price: "28 000 000",
    District: "New Bell",
    imageUrl: ["/Gallery/voitures/c5.jpg", "/Gallery/voitures/c6.jpg", "/Gallery/voitures/c7.jpg"],
  },
];

const filters = [
  {
    id: 'Marque',
    name: 'Car Brand',
    options: [
      { value: 'Toyota', label: 'Toyota' },
      { value: 'Audi', label: 'Audi' },
      { value: 'Mercedes', label: 'Mercedes' },
      { value: 'Mitsubishi', label: 'Mitsubishi' },
      { value: 'Land Rover', label: 'Land Rover' },
      { value: 'Lamborghini', label: 'Lamborghini' },
      { value: 'Maserati', label: 'Maserati' },
      { value: 'Dodge', label: 'Dodge' },
    ],
  },
  {
    id: 'Style',
    name: 'Type of car',
    options: [
      { value: 'Berline', label: 'Berline' },
      { value: 'SUV', label: 'SUV' },
      { value: 'Coupé', label: 'Coupé' },
      { value: 'Pickup', label: 'Pickup' },
      { value: 'Cabriolet', label: 'Cabriolet' },
      { value: 'Hatchback', label: 'Hatchback' },
    ],
  },
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
    id: 'Transmission',
    name: 'Engine Transmission',
    options: [
      { value: 'manual', label: 'Manual' },
      { value: 'automatic', label: 'Automatic' },
    ],
  },
  {
    id: 'Annee',
    name: 'Year of construction',
    options: [
      { value: '2000', label: '2000' },
      { value: '2001', label: '2001' },
      { value: '2002', label: '2002' },
      { value: '2003', label: '2003' },
      { value: '2004', label: '2004' },
      { value: '2005', label: '2005' },
      { value: '2006', label: '2006' },
      { value: '2007', label: '2007' },
      { value: '2008', label: '2008' },
      { value: '2009', label: '2009' },
      { value: '2010', label: '2010' },
      { value: '2011', label: '2011' },
      { value: '2012', label: '2012' },
      { value: '2013', label: '2013' },
      { value: '2014', label: '2014' },
      { value: '2015', label: '2015' },
      { value: '2016', label: '2016' },
      { value: '2017', label: '2017' },
      { value: '2018', label: '2018' },
      { value: '2019', label: '2019' },
      { value: '2020', label: '2020' },
      { value: '2021', label: '2021' },
      { value: '2022', label: '2022' },
      { value: '2023', label: '2023' },
      { value: '2024', label: '2024' },
      { value: '2025', label: '2025' },
    ],
  },
  {
    id: 'doors',
    name: 'Doors',
    options: [
      { value: '2', label: '2 Doors' },
      { value: '4', label: '4 Doors' },
    ],
  },
  {
    id: 'Conditions',
    name: 'Conditions',
    options: [
      { value: 'Brand new', label: 'Brand new' },
      { value: 'Occasion', label: 'Occasion' },
    ],
  },
  {
    id: 'Climate',
    name: 'Climatisation',
    options: [
      { value: 'non', label: 'non climatisé' },
      { value: 'yes', label: 'climatisé' },
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: 'low', label: '-5,000,000 XAF' },
      { value: 'high', label: '+5,000,000 XAF' },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CarsFilterApp() {

  const navigate = useNavigate();

  const handleNavigate = (type, id) => {
    navigate(`/Details/${type}/${id}`);
  };

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState({
    District: [],
    doors: [],
    Conditions: [],
    Annee: [],
    price: [],
    Transmission: [],
    Marque: [],
    Climate: [],
    Style: [],
  });
  const [sortOption, setSortOption] = useState(null);

  const cars = [
    {
      id: 1,
      marque: "Land Rover",
      modele: "Range Rover",
      Conditions: "Occasion",
      doors: 2,
      Annee: "2017",
      style: "Berline",
      guaranteed: "6 month",
      color: "blue",
      cylindree: "2 liters",
      puissance: "100 horses",
      carburant: "Essence",
      Transmission: "automatic",
      vitesse_max: "200 km/h",
      acceleration: "10s",
      longueur: "1.5 meter",
      largeur: "0.9 meter",
      hauteur: "1 meters",
      poids: "1500 kg",
      climatisation: "no",
      type: "car",
      price: "5 000 000",
      District: "Deido",
      imageUrl: ["/Gallery/voitures/c1.jpg", "/Gallery/voitures/c2.jpg", "/Gallery/voitures/c3.jpg"],
    },
    {
      id: 2,
      marque: "Dodge",
      modele: "Mustang",
      Conditions: "Brand new",
      doors: 2,
      Annee: "2018",
      style: "Hatchback",
      guaranteed: "6 month",
      color: "red",
      cylindree: "1.5 liters",
      puissance: "120 horses",
      carburant: "Diesel",
      Transmission: "manual",
      vitesse_max: "210 km/h",
      acceleration: "9s",
      longueur: "1.5 meter",
      largeur: "0.9 meter",
      hauteur: "1 meters",
      poids: "1700 kg",
      climatisation: "yes",
      type: "car",
      price: "4 000 000",
      District: "Akwa",
      imageUrl: ["/Gallery/voitures/c4.jpg", "/Gallery/voitures/c5.jpg", "/Gallery/voitures/c6.jpg"],
    },
    {
      id: 3,
      marque: "Mercedes",
      modele: "GLE",
      Conditions: "Occasion",
      doors: 2,
      Annee: "2019",
      style: "Cabriolet",
      guaranteed: "4 month",
      color: "white",
      cylindree: "1 liter",
      puissance: "150 horses",
      carburant: "Hybride",
      Transmission: "automatic",
      vitesse_max: "220 km/h",
      acceleration: "8s",
      longueur: "1.5 meter",
      largeur: "0.9 meter",
      hauteur: "1 meters",
      poids: "1300 kg",
      climatisation: "no",
      type: "car",
      price: "20 000 000",
      District: "Bonandjo",
      imageUrl: ["/Gallery/voitures/c7.jpg", "/Gallery/voitures/c8.jpg", "/Gallery/voitures/c9.jpg"],
    },
    {
      id: 4,
      marque: "Audi",
      modele: "RS8",
      Conditions: "Brand new",
      doors: 4,
      Annee: "2022",
      style: "Pickup",
      guaranteed: "5 month",
      color: "black",
      cylindree: "2 liters",
      puissance: "200 horses",
      carburant: "Electrique",
      Transmission: "manual",
      vitesse_max: "280 km/h",
      acceleration: "10s",
      longueur: "1.4 meter",
      largeur: "0.9 meter",
      hauteur: "1 meters",
      poids: "1700 kg",
      climatisation: "no",
      type: "car",
      price: "21 000 000",
      District: "Ndokoti",
      imageUrl: ["/Gallery/voitures/c10.jpg", "/Gallery/voitures/c11.jpg", "/Gallery/voitures/c1.jpg"],
    },
    {
      id: 5,
      marque: "Mercedes",
      modele: "GLK",
      Conditions: "Occasion",
      doors: 4,
      Annee: "2021",
      style: "Coupé",
      guaranteed: "6 month",
      color: "yellow",
      cylindree: "1 liter",
      puissance: "200 horses",
      carburant: "Essence",
      Transmission: "automatic",
      vitesse_max: "250 km/h",
      acceleration: "7s",
      longueur: "1.6 meter",
      largeur: "0.9 meter",
      hauteur: "1.3 meter",
      poids: "1800 kg",
      climatisation: "yes",
      type: "car",
      price: "25 000 000",
      District: "Ndokoti",
      imageUrl: ["/Gallery/voitures/c2.jpg", "/Gallery/voitures/c3.jpg", "/Gallery/voitures/c4.jpg"],
    },
    {
      id: 6,
      marque: "Maserati",
      modele: "MS",
      Conditions: "Brand new",
      doors: 2,
      Annee: "2020",
      style: "SUV",
      guaranteed: "4 month",
      color: "pink",
      cylindree: "1.2 liters",
      puissance: "100 horses",
      carburant: "Diesel",
      Transmission: "manual",
      vitesse_max: "220 km/h",
      acceleration: "8s",
      longueur: "1.4 meter",
      largeur: "0.8 meter",
      hauteur: "1.2 meter",
      poids: "1400 kg",
      climatisation: "yes",
      type: "car",
      price: "28 000 000",
      District: "New Bell",
      imageUrl: ["/Gallery/voitures/c5.jpg", "/Gallery/voitures/c6.jpg", "/Gallery/voitures/c7.jpg"],
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

  const filteredCars = cars.filter((car) => {
    const parsePrice = (price) => parseInt(price.replace(/\s/g, ''), 10); // Supprime les espaces et convertit en entier

    const DistrictMatch = selectedFilters.District.length === 0 || selectedFilters.District.includes(car.District);
    const doorsMatch = selectedFilters.doors.length === 0 || selectedFilters.doors.includes(car.doors.toString());
    const AnneeMatch = selectedFilters.Annee.length === 0 || selectedFilters.Annee.includes(car.Annee.toString());
    const TransmissionMatch = selectedFilters.Transmission.length === 0 || selectedFilters.Transmission.includes(car.Transmission.toString());
    const ConditionsMatch = selectedFilters.Conditions.length === 0 || selectedFilters.Conditions.includes(car.Conditions.toString());
    const MarqueMatch = selectedFilters.Marque.length === 0 || selectedFilters.Marque.includes(car.marque.toString());
    const climateMatch = selectedFilters.Climate.length === 0 || selectedFilters.Climate.includes(car.climatisation.toString());
    const styleMatch = selectedFilters.Style.length === 0 || selectedFilters.Style.includes(car.style.toString());

    const price = parsePrice(car.price);
    const priceMatch = selectedFilters.price.length === 0 ||
      (selectedFilters.price.includes('low') && price <= 5000000) ||
      (selectedFilters.price.includes('high') && price >= 5000000);

    return DistrictMatch && doorsMatch && ConditionsMatch && priceMatch && AnneeMatch && TransmissionMatch && MarqueMatch && climateMatch && styleMatch;
  }
);

  if(!filteredCars){
    return <h1 className="lg:p-72 py-52 text-5xl mx-auto text-center font-extrabold lg:text-7xl">Aucun Resultat pour cette recherche</h1>;
  }

  const sortedCars = [...filteredCars].sort((a, b) => {
    if (!sortOption) return 0;

    const parsePrice = (price) => {
      return parseInt(price.replace(/\s/g, '').replace(',', ''), 10); // Supprime les espaces et convertit en entier
    };

    switch (sortOption) {
      case 'YearsAsc':
        return a.Annee - b.Annee;
      case 'YearsDesc':
        return b.Annee - a.Annee;
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
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">Rent Out a Car</h1>

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
                  {sortedCars.map((car) => (
                    <div
                      key={car.id}
                      className="group relative bg-white border border-gray-200 rounded-lg hover:shadow-2xl shadow-lg transition-shadow duration-300"
                    >

                      <div className="w-full h-64 bg-gray-200">
                        <img
                          src={car.imageUrl[0]}
                          alt={car.marque}
                          className="object-cover w-full h-full rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {car.marque} - {car.modele} - {car.style} - {car.Annee} - ({car.Conditions})
                        </h3>
                        <p className="text-lg text-gray-700 flex items-center gap-2">
                          <svg className="h-5 w-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" ><path d="M50.001 0C33.65 0 20.25 13.36 20.25 29.666c0 6.318 2.018 12.19 5.433 17.016L46.37 82.445c2.897 3.785 4.823 3.066 7.232-.2l22.818-38.83c.46-.834.822-1.722 1.137-2.629a29.28 29.28 0 0 0 2.192-11.12C79.75 13.36 66.354 0 50.001 0zm0 13.9c8.806 0 15.808 6.986 15.808 15.766c0 8.78-7.002 15.763-15.808 15.763c-8.805 0-15.81-6.982-15.81-15.763c0-8.78 7.005-15.765 15.81-15.765z" fill="#000"></path><path d="M68.913 48.908l-.048.126c.015-.038.027-.077.042-.115l.006-.011z" fill="#000"></path><path d="M63.848 73.354l-1.383 1.71c1.87.226 3.68.491 5.375.812l-5.479 1.623l7.313 1.945l5.451-1.719c3.348 1.123 7.984 2.496 9.52 4.057h-10.93l1.086 3.176h11.342c-.034 1.79-3.234 3.244-6.29 4.422l-7.751-1.676l-7.303 2.617l7.8 1.78c-4.554 1.24-12.2 1.994-18.53 2.341l-.266-3.64h-7.606l-.267 3.64c-6.33-.347-13.975-1.1-18.53-2.34l7.801-1.781l-7.303-2.617l-7.752 1.676c-3.012-.915-6.255-2.632-6.289-4.422H25.2l1.086-3.176h-10.93c1.536-1.561 6.172-2.934 9.52-4.057l5.451 1.719l7.313-1.945l-5.479-1.623a82.552 82.552 0 0 1 5.336-.807l-1.363-1.713c-14.785 1.537-27.073 4.81-30.295 9.979C.7 91.573 19.658 99.86 49.37 99.989c.442.022.878.006 1.29 0c29.695-.136 48.636-8.42 43.501-16.654c-3.224-5.171-15.52-8.445-30.314-9.981z" fill="#000"></path></svg>
                          {car.District}
                        </p>
                        <p className="mt-2 text-gray-700 flex items-center gap-2">
                          <svg fill="#000" class="h-5 w-5 text-black group-hover:text-yellow-500 transition-all" stroke="none" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M5 10C3.347656 10 2 11.347656 2 13L2 26.8125C3.296875 25.6875 4.9375 24.777344 7 24.0625L7 20C7 17.339844 11.542969 17 15.5 17C19.457031 17 24 17.339844 24 20L24 22C24.335938 21.996094 24.65625 22 25 22C25.34375 22 25.664063 21.996094 26 22L26 20C26 17.339844 30.542969 17 34.5 17C38.457031 17 43 17.339844 43 20L43 24.03125C45.058594 24.742188 46.691406 25.671875 48 26.8125L48 13C48 11.347656 46.652344 10 45 10 Z M 25 24C5.90625 24 -0.015625 27.53125 0 37L50 37C50.015625 27.46875 44.09375 24 25 24 Z M 0 39L0 50L7 50L7 46C7 44.5625 7.5625 44 9 44L41 44C42.4375 44 43 44.5625 43 46L43 50L50 50L50 39Z" /></svg>

                          {car.Transmission} - {car.vitesse_max} - {car.acceleration}
                        </p>
                        <p className="mt-2 text-gray-700 flex items-center gap-2">
                          <svg fill="#000" className="h-5 w-5" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 211.667 211.667" xml:space="preserve">
                            <path d="M211.667,98.551c0,2.209-1.791,4-4,4H201v26.448c0,13.403-7.085,25.178-17.702,31.792l7.999,14.878
                            c1.046,1.946,0.317,4.371-1.629,5.418c-0.603,0.323-1.251,0.478-1.891,0.478c-1.425,0-2.804-0.764-3.526-2.106l-8.164-15.186
                            c-3.918,1.395-8.131,2.161-12.522,2.161H48.102c-3.755,0-7.38-0.562-10.802-1.595l-7.86,14.62c-0.722,1.343-2.102,2.106-3.526,2.106
                            c-0.64,0-1.288-0.154-1.891-0.478c-1.946-1.047-2.675-3.472-1.629-5.418l7.512-13.972c-11.465-6.406-19.239-18.659-19.239-32.699
                            v-26.448H4c-2.209,0-4-1.791-4-4s1.791-4,4-4h10.667H197h10.667C209.876,94.551,211.667,96.342,211.667,98.551z M4,60.814h43.083
                            c3.584,0,6.5,2.916,6.5,6.5v8.5c0,2.209,1.791,4,4,4s4-1.791,4-4v-8.5c0-7.995-6.505-14.5-14.5-14.5H4c-2.209,0-4,1.791-4,4
                            S1.791,60.814,4,60.814z M9.25,48.602h6.833c2.209,0,4-1.791,4-4v-10.5c0-2.209-1.791-4-4-4H9.25c-5.101,0-9.25,4.149-9.25,9.25
                            S4.149,48.602,9.25,48.602z"/>
                          </svg>
                          {car.guaranteed} warrantly
                        </p>
                        <p className="mt-4 text-lg font-bold text-black">
                          {car.price} XAF <span className="text-gray-400 text-base"></span>
                        </p>
                      </div>
                      <div className="absolute bottom-4 right-4 group">
                        <a
                          onClick={() => handleNavigate(car.type, car.id)}
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
