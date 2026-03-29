// ─────────────────────────────────────────────────────────────────
//  siteData.js  —  Loveland Holidays · Central content store
//  All text, images, links, icons and config live here.
//  Components import from this file — nothing is hardcoded.
// ─────────────────────────────────────────────────────────────────

import { FaShieldAlt, FaGlobe, FaMapMarkedAlt,FaTaxi, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, } from 'react-icons/fa';
import { HiOutlineUsers, HiOutlineSparkles, HiOutlineGlobeAlt, } from 'react-icons/hi2';

// ─────────────────────────────────────────────────────────────────────────────
// Site-wide static data.
// Edit this file to update copy, images, prices, reviews, etc.
// ─────────────────────────────────────────────────────────────────────────────

// src/data/siteData.js
export const SITE_NAME = "Loveland Holidays";
export const SITE_LOGO = "/logo.png"; 


export const HERO_IMAGES = [
  {
  src:'/images/banner/banner1.jpg',
  label: 'Experience God\'s Own Country like never before', 
  },
  {
    src:'/images/banner/banner2.jpeg', 
    label: 'Crafting unforgettable journeys through the breathtaking landscapes of Kerala',
  },
  {
    src:'/images/banner/banner3.jpg',
    label: 'Discover the hidden gems of Kerala\'s pristine backwaters',
  },
  {
    src:'/images/banner/banner4.jpg',
    label: 'Immerse yourself in the rich culture and traditions of Kerala',
  }
];


export const SITE = {
  name: 'Loveland Holidays',
  tagline: "Experience God's Own Country like never before",
  slogan: 'Wander | Wonder | Relax',
  phone1: '+91 7591 999 499',
  phone2: '+91 85 8989 1919',
  email1: 'info@lovelandholidays.in',
  email2: 'bookings@lovelandholidays.in',
  gmail: 'lovelandholidays@gmail.com',
  hours: 'Monday – Saturday: 9 am – 7 pm',
  website: 'https://www.lovelandholidays.com',
  address: {
    line1: 'Kalady Post, Yordhanapuram',
    line2: 'Ernakulam District, Kerala',
    pin: '683574',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.752!2d76.4209!3d10.1614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c0000000001%3A0x1!2sKalady%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890',
  },
  social: {
    facebook: 'https://www.facebook.com/LoveLandHolidays?mibextid=wwXIfr&rdid=CERzQyVgQdvrc29u&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CtnKone3Y%2F%3Fmibextid%3DwwXIfr',
    instagram: '#',
    twitter: '#',
    youtube: '#',
    whatsapp: { 
      number: '917591999499', 
      link: 'https://wa.me/917591999499?text=Hi%20👋,%20I%20am%20interested%20in%20your%20travel%20packages',
      icon: FaWhatsapp,
    }
  },
};


// ─────────────────────────────────────────────────────────────────
//  EMAILJS  —  Contact-form credentials
//  Fill these in once you connect your EmailJS account.
//  Docs: https://www.emailjs.com/docs/
// ─────────────────────────────────────────────────────────────────
export const EMAILJS = {
  serviceId: 'YOUR_SERVICE_ID',   // EmailJS → Email Services → Service ID
  templateId: 'YOUR_TEMPLATE_ID',  // EmailJS → Email Templates → Template ID
  publicKey: 'YOUR_PUBLIC_KEY',   // EmailJS → Account → Public Key
};

// New Enquiry from Loveland Holidays

// Name: {{name}}
// Email: {{email}}
// Phone: {{phone}}
// Destination: {{destination}}

// Message:
// {{message}}

// ─────────────────────────────────────────────────────────────────
//  Other site data: services, tours, reviews, nav links, about page content, etc.
//  Edit these objects to update the corresponding sections of the site.
//  All components import from this file — nothing is hardcoded.
// ─────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    icon: FaShieldAlt,
    title: 'Comfortable Stay',
    desc: 'Curated accommodations from boutique homestays to luxury resorts, chosen for quality and character.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'Guided Tours',
    desc: "Expert guides share hidden gems, local stories, and cultural insights you won't find in guidebooks.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: 'Multi-language Drivers',
    desc: 'Friendly, licensed drivers fluent in English, Hindi, Malayalam, Tamil and more.',
  },
  {
    icon: HiOutlineUsers,
    title: 'Custom Packages',
    desc: 'Fully personalised itineraries crafted around your interests, budget, and travel pace.',
  },
  {
    icon: FaShieldAlt,
    title: 'Safe Travel',
    desc: 'Your safety is our priority — vetted vehicles, insured drivers, and 24/7 support throughout.',
  },
  {
    icon: FaTaxi,
    title: 'Taxi Services',
    desc: 'Reliable and comfortable taxi services with experienced drivers for local trips, airport transfers, and long-distance travel.',
  },
];

export const TOURS = [
  {
    title: 'Alleppey',
    tag: 'Backwaters',
    price: '',
    duration: '',
    desc: "Glide through Kerala's iconic backwater network aboard a traditional houseboat.",
    img: '/images/tours/Alappuzha.jpg',
  },
  {
    title: 'Thekkady',
    tag: 'Wildlife',
    price: '',
    duration: '',
    desc: 'Spice plantations, Periyar tiger reserve, and thrilling jungle safari experiences.',
    img: '/images/tours/Thekkady.jpg',
  },
  {
    title: 'Kovalam',
    tag: 'Beach',
    price: '',
    duration: '',
    desc: 'Unwind on golden crescent beaches with Ayurvedic spa retreats and fresh seafood.',
    img: '/images/tours/Kovalam.jpg',
  },
  {
    title: 'Wayanad',
    tag: 'Tribal Trail',
    price: '',
    duration: '',
    desc: 'Trek through ancient forests, discover tribal culture and stunning hidden waterfalls.',
    img: '/images/tours/Wayanad.jpg',
  },

  // New tour added as per user request
  {
    title: 'Goa',
    tag: 'Beach Destination',
    price: '',
    duration: '',
    desc: 'Explore Goa’s stunning beaches, majestic waterfalls, vibrant casinos, and the historic Basilica of Bom Jesus, a UNESCO World Heritage Site.',
    img: '/images/tours/Goa.jpg',
  },
  {
    title: 'Bangalore',
    tag: 'City Escape',
    price: '',
    duration: '',
    desc: 'Discover Bangalore’s top attractions—from Lalbagh and Nandi Hills to temples, forts, shopping hubs, and vibrant city experiences.',
    img: '/images/tours/Bangalore.jpg',
  },
  {
    title: 'Coorg',
    tag: 'Hill Station',
    price: '',
    duration: '',
    desc: 'Known as the Scotland of India, Coorg offers lush coffee plantations, scenic hills, waterfalls, and serene attractions like Abbey Falls and Dubare Elephant Camp.',
    img: '/images/tours/Coorg.jpg',
  },
  {
    title: 'Mysuru',
    tag: 'Heritage City',
    price: '',
    duration: '',
    desc: 'Explore Mysuru’s royal charm with the grand Mysore Palace, Chamundi Hills, Brindavan Gardens, and rich cultural heritage.',
    img: '/images/tours/Mysuru.jpg',
  },
  {
    title: 'Shimoga',
    tag: 'Nature & Adventure',
    price: '',
    duration: '',
    desc: 'Discover Shimoga’s natural beauty with Jog Falls, Kodachadri trekking, lush rainforests, and wildlife adventures in the Western Ghats.',
    img: '/images/tours/Shimoga.jpg',
  },
  {
    title: 'Bekal',
    tag: 'Beach & Heritage',
    price: '',
    duration: '',
    desc: 'Explore Bekal’s scenic coast, highlighted by the iconic Bekal Fort with its unique keyhole-shaped observation tower.',
    img: '/images/tours/Bekal.jpg',
  },
  {
    title: 'Thrissur',
    tag: 'Cultural Capital',
    price: '',
    duration: '',
    desc: 'Experience Thrissur’s rich culture with ancient temples, Athirappilly Waterfalls, and the vibrant Thrissur Pooram festival.',
    img: '/images/tours/Thrissur.jpg',
  },
  {
    title: 'Kochi',
    tag: 'Coastal Heritage',
    price: '',
    duration: '',
    desc: 'Discover Kochi’s colonial charm, Chinese fishing nets, backwaters, beaches, and vibrant cultural heritage.',
    img: '/images/tours/Kochi.jpg',
  },
  {
    title: 'Munnar',
    tag: 'Hill Station',
    price: '',
    duration: '',
    desc: 'Experience Munnar’s misty hills, tea plantations, waterfalls, and scenic viewpoints like Top Station and Mattupetty Dam.',
    img: '/images/tours/Munnar.jpg',
  },

  {
    title: 'Trivandrum',
    tag: 'City & Beach',
    price: '',
    duration: '',
    desc: 'Explore Trivandrum’s iconic Padmanabhaswamy Temple, Kovalam Beach, Poovar Island, and scenic city attractions.',
    img: '/images/tours/Trivandrum.jpg',
  },
  {
    title: 'Lakshadweep',
    tag: 'Island Escape',
    price: '',
    duration: '',
    desc: 'Crystal-clear lagoons, coral reefs, white sand beaches, and peaceful island life.',
    img: '/images/tours/Lakshadweep.jpg',
  }


];

export const REVIEWS = [
  {
    name: 'Joice Antony',
    location: 'Ontario, Canada',
    rating: 5,
    image: '/images/reviews/Joice_Antony.jpeg',
    text: 'Loveland Holidays made our anniversary trip absolutely magical. Every detail was thoughtfully planned — from the houseboat to the Munnar sunrise. A truly unforgettable experience!',
  },
  {
    name: 'M. Orenstein',
    location: 'Ontario, Canada',
    rating: 5,
    image: '/images/reviews/M_Orenstein.jpeg',
    text: "We had a fabulous 10-day trip through Kerala with Jinto as our guide and driver.   His ideas on where to go and what to do were excellent, and we quickly learned to trust his instincts when he told us what we should try — which included washing an elephant, hiking in a tiger preserve, renting a houseboat, touring the world’s highest-altitude tea plantation and having an ayurvedic massage.  Ultimately, it was cheaper for us to hire Jinto than to arrange the trip by ourselves, as he was able to book beautiful locations at prices we never would have received, and I am convinced that our trip was better for it.  I have no hesitation in strongly recommending Jinto for anyone visiting southern India.",
  },
  {
    name: 'Marla',
    location: 'Ontario, Canada',
    rating: 5,
    image: '/images/reviews/Marla.jpeg',
    text: "The custom package was perfect for our family of five. The children loved Thekkady wildlife safari and the adults couldn't get enough of the Ayurvedic spa. Worth every rupee!",
  },
  {
    name: 'Manikyam',
    location: 'Malaysia',
    rating: 5,
    image: '/images/reviews/Manikyam.jpeg',
    text: "A dreamlike journey through Kerala. The English-speaking guide was exceptional — culturally sensitive and filled with wonderful stories. I'll recommend Loveland to all my friends.",
  },

];

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'tours', label: 'Tours' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];






// About Us page features


// ─── Brand ───────────────────────────────────
export const brand = {
  name: 'Loveland Holidays',
  tagline: "Crafting unforgettable journeys through the breathtaking landscapes of God's Own Country — Kerala.",
  location: 'Kochi, Kerala, India',
  copyright: '2026',
  eyebrow: "Kerala's Finest Travel Experts",
  credo: {
    sanskrit: 'Aditi Devo Bhava',
    english: 'Guest Is Our God',
    banner: 'Guest Is Our God — Our Eternal Promise to You',
  },
};

// ─── Hero ─────────────────────────────────────
export const hero = {
  titleLine1: 'Loveland',
  titleLine2: 'Holidays',
};

// ─── About Sections ───────────────────────────
//  Each section renders as a two-column (text + image) pair.
//  `reverse: true` flips the column order on desktop.
export const aboutSections = [
  {
    id: 'who-we-are',
    label: 'Who We Are',
    title: 'Your Partners in',
    titleEm: 'Travel Excellence',
    reverse: false,
    paragraphs: [
      "We, at Loveland Holidays, are proud of working in partnership with our clients in exceeding their travel dreams. Our personable team of experts works hard to create the perfect packaged tours within South India.",
      {
        before: "Our specialty lies in creating unforgettable experiences within Kerala, commonly known as",
        chip: "God's Own Country",
        after: ". True to its name, Kerala is a very special place with breathtaking hill stations, vast forest reserves, wild animals, countless lakes, the sea, village life and exotic farming.",
      },
    ],
    image: {
      src: '/images/about/kerala_backwaters.jpg',
      alt: 'Kerala backwaters',
      badge: 'Kerala Backwaters',
    },
  },
  {
    id: 'our-journey',
    label: 'Our Journey',
    title: 'Born from a Vision to',
    titleEm: 'Transform Tourism',
    reverse: true,
    paragraphs: [
      {
        before: 'Loveland Holidays is located in Cochin, commonly known as the',
        chip: 'Business Capital of Kerala',
        after: '. We founded our company upon realizing the many drawbacks of Kerala Tourism — a great lack of information, guidance, and coordination with visitors.',
      },
      "Travel in Cochin can take many forms as it houses an International Airport, a port, and railway station. Through Loveland Holidays, guests can rest easy as our team expertly organizes comfortable lodgings and safe travel.",
    ],
    image: {
      src: '/images/about/kochi.jpg',
      alt: 'Kochi Kerala',
      badge: 'Kochi, Kerala',
    },
  },
  {
    id: 'our-team',
    label: 'Our Expert Team',
    title: 'Guides You Can',
    titleEm: 'Trust, Every Step',
    reverse: false,
    paragraphs: [
      {
        before: 'Each of our personable drivers is handpicked to be well experienced, trained and educated. They additionally act as guides and can speak a wide array of languages including',
        chip: 'English · Hindi · Arabic',
        after: ' and several regional languages.',
      },
      "At Loveland Holidays we strive to create a safe, relaxing and magical experience of South India for each of our clients — whether your goal is to strengthen family ties, relax the mind and body, or exhilarate the spirit.",
    ],
    image: {
      src: '/images/about/munnar.jpg',
      alt: 'Munnar hills Kerala',
      badge: 'Munnar Hills, Kerala',
    },
  },
];

// ─── Why Choose Us — Feature Cards ────────────
export const features = [
  {
    id: 'tours',
    Icon: HiOutlineSparkles,
    title: 'Expertly Curated Tours',
    desc: 'Tailored packages for every kind of traveller — families, solo explorers, honeymooners and groups.',
  },
  {
    id: 'safety',
    Icon: FaShieldAlt,
    title: 'Safe & Comfortable',
    desc: 'Every journey is planned with your safety and comfort as the highest priority, always.',
  },
  {
    id: 'multilingual',
    Icon: HiOutlineGlobeAlt,
    title: 'Multilingual Guides',
    desc: 'Our team speaks English, Hindi, Arabic and several regional languages with ease and warmth.',
  },
];

// ─── Stats ────────────────────────────────────
export const stats = [
  { id: 'families', Icon: HiOutlineUsers, number: '500+', label: 'Happy Families' },
  { id: 'years', Icon: FaMapMarkedAlt, number: '12+', label: 'Years of Excellence' },
  { id: 'destinations', Icon: FaGlobe, number: '50+', label: 'Destinations Covered' },
];

// ─── Features Section Header ──────────────────
export const featuresHeader = {
  eyebrow: 'Why Choose Us',
  title: 'Everything You Need for a',
  titleEm: 'Perfect Journey',
};