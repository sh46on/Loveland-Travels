// ─────────────────────────────────────────────────────────────────
//  siteData.js  —  Loveland Holidays · Central content store
//  All text, images, links, icons and config live here.
//  Components import from this file — nothing is hardcoded.
// ─────────────────────────────────────────────────────────────────
 
import { FaShieldAlt, FaGlobe, FaMapMarkedAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, } from 'react-icons/fa';
import { HiOutlineUsers, HiOutlineSparkles, HiOutlineGlobeAlt,} from 'react-icons/hi2';
 
// ─────────────────────────────────────────────────────────────────────────────
// Site-wide static data.
// Edit this file to update copy, images, prices, reviews, etc.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name:    'Loveland Holidays',
  tagline: "Experience God's Own Country like never before",
  phone1:  '+91 7591 999 499',
  phone2:  '+91 85 8989 1919',
  email1:  'info@lovelandholidays.in',
  email2:  'bookings@lovelandholidays.in',
  hours:   'Monday – Saturday: 9 am – 7 pm',
  website:   'https://www.lovelandholidays.com',
  address: {
    line1: 'Kalady Post, Yordhanapuram',
    line2: 'Ernakulam District, Kerala',
    pin:   '683574',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.752!2d76.4209!3d10.1614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c0000000001%3A0x1!2sKalady%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890',
  },
  social: {
    facebook:  'https://www.facebook.com/LoveLandHolidays?mibextid=wwXIfr&rdid=CERzQyVgQdvrc29u&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CtnKone3Y%2F%3Fmibextid%3DwwXIfr',
    instagram: '#',
    twitter:   '#',
    youtube:   '#',
  },
};


// ─────────────────────────────────────────────────────────────────
//  EMAILJS  —  Contact-form credentials
//  Fill these in once you connect your EmailJS account.
//  Docs: https://www.emailjs.com/docs/
// ─────────────────────────────────────────────────────────────────
export const EMAILJS = {
  serviceId:  'YOUR_SERVICE_ID',   // EmailJS → Email Services → Service ID
  templateId: 'YOUR_TEMPLATE_ID',  // EmailJS → Email Templates → Template ID
  publicKey:  'YOUR_PUBLIC_KEY',   // EmailJS → Account → Public Key
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
    icon:  FaShieldAlt,
    title: 'Comfortable Stay',
    desc:  'Curated accommodations from boutique homestays to luxury resorts, chosen for quality and character.',
  },
  {
    icon:  HiOutlineSparkles,
    title: 'Guided Tours',
    desc:  "Expert guides share hidden gems, local stories, and cultural insights you won't find in guidebooks.",
  },
  {
    icon:  HiOutlineGlobeAlt,
    title: 'Multi-language Drivers',
    desc:  'Friendly, licensed drivers fluent in English, Hindi, Malayalam, Tamil and more.',
  },
  {
    icon:  HiOutlineUsers,
    title: 'Custom Packages',
    desc:  'Fully personalised itineraries crafted around your interests, budget, and travel pace.',
  },
  {
    icon:  FaShieldAlt,
    title: 'Safe Travel',
    desc:  'Your safety is our priority — vetted vehicles, insured drivers, and 24/7 support throughout.',
  },
];

export const TOURS = [
  {
    title:    'Munnar',
    tag:      'Hill Station',
    price:    '₹8,999',
    duration: '3 Days',
    desc:     'Drift through endless tea gardens and rolling emerald hills blanketed in cool mist.',
    img:      'https://images.hindustantimes.com/auto/img/2025/07/28/600x338/Ready_for_Munnar__1753703044253_1753703064768.jpg?w=600&q=80',
    
  },
  {
    title:    'Alleppey',
    tag:      'Backwaters',
    price:    '₹9,499',
    duration: '2 Days',
    desc:     "Glide through Kerala's iconic backwater network aboard a traditional houseboat.",
    img:      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80',
  },
  {
    title:    'Kochi',
    tag:      'Heritage City',
    price:    '₹6,999',
    duration: '2 Days',
    desc:     "Explore Fort Kochi's colonial charm, Chinese fishing nets and vibrant art scene.",
    img:      'https://c.ndtvimg.com/2025-03/qi8ql9j_fort-kochi_625x300_23_March_25.jpg?w=600&q=80'
  },
  {
    title:    'Thekkady',
    tag:      'Wildlife',
    price:    '₹10,499',
    duration: '3 Days',
    desc:     'Spice plantations, Periyar tiger reserve, and thrilling jungle safari experiences.',
    img:      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/6b/09/70/thekkady.jpg?w=600&q=80'
  },
  {
    title:    'Kovalam',
    tag:      'Beach',
    price:    '₹7,499',
    duration: '2 Days',
    desc:     'Unwind on golden crescent beaches with Ayurvedic spa retreats and fresh seafood.',
    img:      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&q=80',
  },
  {
    title:    'Wayanad',
    tag:      'Tribal Trail',
    price:    '₹9,999',
    duration: '3 Days',
    desc:     'Trek through ancient forests, discover tribal culture and stunning hidden waterfalls.',
    img:      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&q=80',
  },
];

export const REVIEWS = [
  {
    name:     'Priya Menon',
    location: 'Bangalore, India',
    rating:   5,
    text:     'Loveland Holidays made our anniversary trip absolutely magical. Every detail was thoughtfully planned — from the houseboat to the Munnar sunrise. A truly unforgettable experience!',
  },
  {
    name:     'James & Sarah Thompson',
    location: 'London, UK',
    rating:   5,
    text:     "As first-time visitors to Kerala, we were nervous about logistics. Loveland handled everything seamlessly. Our driver was warm, knowledgeable, and made us feel completely at home.",
  },
  {
    name:     'Rahul Sharma',
    location: 'Delhi, India',
    rating:   5,
    text:     "The custom package was perfect for our family of five. The children loved Thekkady wildlife safari and the adults couldn't get enough of the Ayurvedic spa. Worth every rupee!",
  },
  {
    name:     'Aiko Tanaka',
    location: 'Tokyo, Japan',
    rating:   5,
    text:     "A dreamlike journey through Kerala. The English-speaking guide was exceptional — culturally sensitive and filled with wonderful stories. I'll recommend Loveland to all my friends.",
  },
  {
    name:     'Mohammed Al Rashid',
    location: 'Dubai, UAE',
    rating:   5,
    text:     'Second time booking with Loveland and they exceeded expectations again. Pristine beaches, incredible food, and hassle-free travel throughout.',
  },
];

export const NAV_LINKS = [
  { id: 'home',     label: 'Home'     },
  { id: 'about',    label: 'About'    },
  { id: 'services', label: 'Services' },
  { id: 'tours',    label: 'Tours'    },
  { id: 'reviews',  label: 'Reviews'  },
  { id: 'contact',  label: 'Contact'  },
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
      src: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=85',
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
      src: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=900&q=85',
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
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85',
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
  { id: 'families',    Icon: HiOutlineUsers,   number: '500+', label: 'Happy Families' },
  { id: 'years',       Icon: FaMapMarkedAlt,   number: '12+',  label: 'Years of Excellence' },
  { id: 'destinations',Icon: FaGlobe,          number: '50+',  label: 'Destinations Covered' },
];
 
// ─── Features Section Header ──────────────────
export const featuresHeader = {
  eyebrow: 'Why Choose Us',
  title: 'Everything You Need for a',
  titleEm: 'Perfect Journey',
};