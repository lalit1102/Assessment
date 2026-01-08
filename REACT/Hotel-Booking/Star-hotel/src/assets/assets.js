/* ===================== IMAGES ===================== */
import logoImg from "./logo.png";

import instagramicon from "./instagramicon.svg";
import facebookicon from "./facebookicon.svg";
import linkendinicon from "./linkendinicon.svg";
import twittericon from "./twittericon.svg";
import arrowicon from "./arrowicon.svg";

import banner1 from "./banner1.avif";
import banner2 from "./banner2.avif";
import banner3 from "./banner3.avif";
import img1 from "./img1.avif";
import img2 from "./img2.avif";
import img3 from "./img3.avif"

import customer1 from "./customer1.avif"
import customer2 from "./customer2.avif"
import customer3 from "./customer3.avif"


import roomImg1 from "./roomImg1.png";
import roomImg2 from "./roomImg2.png";
import roomImg3 from "./roomImg3.png";
import roomImg4 from "./roomImg4.png";



/* ===================== LOGO ===================== */
export const logo = {
  images: [logoImg],
};

/* ===================== ICONS ===================== */
export const hotelsvg = {
  instagramicon,
  facebookicon,
  linkendinicon,
  twittericon,
  arrowicon,
  
};

/* ===================== HERO CAROUSEL ===================== */
export const carousle = {
  images: [banner1, banner2, banner3],
};

/* ===================== HOME ROOMS (STATIC) ===================== */
export const roomsData = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "₹3,500 / night",
    image: [img2],
    features: ["Free WiFi", "AC", "Breakfast"],
  },
  {
    id: 2,
    name: "Suite Room",
    price: "₹6,500 / night",
    image: [img3],
    features: ["Luxury Bed", "Sea View", "Mini Bar"],
  },
  {
    id: 3,
    name: "Standard Room",
    price: "₹2,500 / night",
    image: [img1],
    features: ["WiFi", "TV", "Comfort Bed"],
  },
];

/* ===================== USER DUMMY DATA ===================== */
export const userDummyData = {
  _id: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
  username: "Lalit Baldaniya",
  email: "lalit@gmail.com",
  image: roomImg1,
  role: "hotelOwner",
  recentSearchedCities: ["Ahemdabad"],
};

/* ===================== HOTEL DUMMY DATA ===================== */
export const hotelDummyData = {
  _id: "67f76393197ac559e4089b72",
  name: "Star Hotel",
  address: "Main Road 123 Street, Ahemdabad",
  contact: "1234567890",
  owner: userDummyData,
  city: "Ahemdabad",
};

/* ===================== ROOMS DUMMY DATA ===================== */
export const roomsDummyData = [
  {
    _id: "67f7647c197ac559e4089b96",
    hotel: hotelDummyData,
    roomType: "Deluxe Room",
    pricePerNight: 3500,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    isAvailable: true,
  },
  {
    _id: "67f76452197ac559e4089b8e",
    hotel: hotelDummyData,
    roomType: "Suite Room",
    pricePerNight: 6500,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [roomImg2, roomImg3, roomImg4, roomImg1],
    isAvailable: true,
  },
  {
    _id: "67f76406197ac559e4089b82",
    hotel: hotelDummyData,
    roomType:  "Standard Room",
    pricePerNight: 2499,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
    images: [roomImg3, roomImg4, roomImg1, roomImg2],
    isAvailable: true,
  },
  {
    _id: "67f763d8197ac559e4089b7a",
    hotel: hotelDummyData,
    roomType: "Luxury Room",
    pricePerNight: 4500,
    amenities: ["Free WiFi", "Room Service", "Pool Access"],
    images: [roomImg4, roomImg1, roomImg2, roomImg3],
    isAvailable: true,
  },
];


export const reviewsData = [
  {
    id: 1,
    name: "Ansh Baldaniya",
    location: "Ahemdabad",
    image: customer1,
    review:
      "Words can't explain the kind of treatment I received from the management of Star Hotels. They are the best in the country.",
  },
  {
    id: 2,
    name: "Kenil Baldaniya",
    location: "Ahemdabad",
    image: customer2,
    review:
      "Star Hotels makes you feel the best room quality that gives you the comfort of a home.",
  },
  {
    id: 3,
    name: "Kavya Baldaniya",
    location: "Ahemdabad",
    image: customer3,
    review:
      "My family and I are very happy whenever we lodge into Star Hotels. They are by far the best in the universe.",
  },
];