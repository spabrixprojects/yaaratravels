export interface Destination {
  id: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price?: string;
  priceNum?: number;
  categories: string[];
  image: string;
  description: string;
  featured?: boolean;
  highlights?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export const BRAND = {
  name: "YAARA TRAVELS",
  tagline: "Beyond the Journey",
  establishedTagline: "Rooted in Thrissur, Kerala — Redefining Travel with Trust & Passion",
  logo: "/yaaralogo.png",
  description:
    "Your trusted travel partner from the heart of Kerala. We craft unforgettable journeys for families and couples across India and beyond.",
  address: "YAARA TRAVELS, Kizhipilly Towers, Opp. Peechi's Hospital, Peechi Road, Thrissur – 680652, Kerala, India",
  phoneOffice: "0487 2999522",
  phoneOfficeTel: "tel:04872999522",
  phoneHolidays: "8606555538",
  phoneHolidaysTel: "tel:8606555538",
  phoneSupport: "9526708000",
  phoneSupportTel: "tel:9526708000",
  whatsapp1: "8606555538",
  whatsapp1Url: "https://wa.me/918606555538",
  whatsapp2: "9526708000",
  whatsapp2Url: "https://wa.me/919526708000",
  email: "info@yaaratravels.com",
  instagramUrl: "https://www.instagram.com/yaara_trvls/",
  facebookUrl: "https://www.facebook.com/yaaratravels",
  copyright: "© 2026 Yaara Travels. All rights reserved.",
  locationNote: "Crafted with care in Thrissur, Kerala",
};

export const TRUST_STATS: StatItem[] = [
  {
    value: "25+",
    label: "Years of Experience",
    description: "Over two decades of proven excellence in curating seamless travel experiences.",
  },
  {
    value: "500+",
    label: "Happy Travellers",
    description: "Delighted families, couples, and explorers across domestic and global circuits.",
  },
  {
    value: "100%",
    label: "Personalised Service",
    description: "Customised itineraries designed around your dreams and unique travel preferences.",
  },
  {
    value: "24/7",
    label: "Dedicated Support",
    description: "Round-the-clock on-tour assistance before, during, and after your trip.",
  },
];

export const DESTINATIONS: Destination[] = [
  {
    id: "kerala",
    name: "Kerala",
    region: "South India",
    tagline: "God's Own Country",
    description:
      "Explore emerald tea plantations in Munnar, serene backwater cruises in Alleppey, and heritage coastal charm in Fort Kochi.",
    image: "/kerala.jpg",
    featured: true,
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    region: "North India",
    tagline: "The Land of Maharajas",
    description:
      "Step into a world of majestic forts in Jaipur, golden desert dunes in Jaisalmer, and romantic palaces in Udaipur.",
    image: "/rajastan.jpg",
    featured: true,
  },
  {
    id: "goa",
    name: "Goa",
    region: "West India",
    tagline: "The Sunshine State",
    description:
      "Sun-kissed golden beaches, vibrant Portuguese heritage, bohemian night markets, and thrilling water sports.",
    image: "/goa.jpg",
    featured: true,
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    region: "North India",
    tagline: "The Valley of the Gods",
    description:
      "Snow-capped Himalayan peaks, pine-scented mountain valleys of Manali and Shimla, and tranquil hillside monasteries.",
    image: "/himajal.jpg",
    featured: true,
  },
  {
    id: "andaman-islands",
    name: "Andaman Islands",
    region: "Island Escape",
    tagline: "Tropical Paradise",
    description:
      "Crystal-clear turquoise waters, pristine Radhanagar beach, vibrant coral reefs, and exotic marine adventures.",
    image: "/Andaman.jpg",
    featured: true,
  },
  {
    id: "maldives",
    name: "Maldives",
    region: "International",
    tagline: "Barefoot Luxury",
    description:
      "Overwater villas perched above turquoise lagoons, private sunset cruises, and world-class island indulgence.",
    image: "/malidives.avif",
    featured: true,
  },
];


export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "kerala-backwaters-escape",
    title: "Kerala Backwaters Escape",
    destination: "Kerala",
    duration: "5 Days / 4 Nights",
    price: "₹8,000",
    priceNum: 8000,
    categories: ["India", "Family & Couples"],
    image: "/kerala.jpg",
    description:
      "Drift through the emerald waterways of Alleppey on a private houseboat, explore the misty tea estates of Munnar, and soak in the timeless beauty of God's Own Country.",
    featured: true,
    highlights: [
      "Private houseboat stay",
      "Alleppey backwater cruise",
      "Munnar tea gardens",
      "Kathakali cultural show",
    ],
  },
  
  {
    id: "royal-rajasthan-trail",
    title: "Royal Rajasthan Trail",
    destination: "Rajasthan",
    duration: "7 Days / 6 Nights",
    price: "₹18,000",
    priceNum: 18000,
    categories: ["India", "Heritage & Culture"],
    image: "/rajastan.jpg",
    description:
      "Journey through the land of maharajas — from the pink streets of Jaipur to the golden dunes of Jaisalmer and the romantic lakes of Udaipur.",
    featured: true,
    highlights: [
      "Jaipur City Palace",
      "Jaisalmer desert camp",
      "Udaipur lake cruise",
      "Camel safari at sunset",
    ],
  },
  {
    id: "gujarat",
    title: "Gujarat Heritage Tour",
    destination: "Gujarat",
    duration: "5 Days / 4 Nights",
    price: "On Request",
    priceNum: 0,
    categories: ["India", "Heritage & Culture"],
    image: "/gujarat-heritage.jpg",
    description:
      "Discover Gujarat's vibrant culture, ancient temples, and breathtaking landscapes, from the Statue of Unity to the white desert of Kutch.",
    featured: true,
    highlights: [
      "Statue of Unity",
      "Rann of Kutch",
      "Somnath Temple",
      "Dwarkadhish Temple",
    ],
  },
  {
    id: "hyderabad",
    title: "Hyderabad City Escape",
    destination: "Hyderabad",
    duration: "3 Days / 2 Nights",
    price: "On Request",
    priceNum: 0,
    categories: ["India", "Heritage & Culture"],
    image: "/hyderabad-city.jpg",
    description:
      "Explore Hyderabad's royal charm, historic monuments, vibrant bazaars, and famous culinary traditions.",
    featured: true,
    highlights: [
      "Charminar & Laad Bazaar",
      "Golconda Fort",
      "Ramoji Film City",
      "Hussain Sagar Lake",
    ],
  },
  {
    id: "mysore-bangalore",
    title: "Mysore & Bangalore Explorer",
    destination: "Mysore & Bangalore",
    duration: "4 Days / 3 Nights",
    price: "On Request",
    priceNum: 0,
    categories: ["India", "City & Culture"],
    image: "/Mysore.jpg",
    description:
      "Experience Mysore's royal palaces and beautiful gardens alongside Bangalore's vibrant city life and green spaces.",
    featured: true,
    highlights: [
      "Mysore Palace",
      "Brindavan Gardens",
      "Bangalore Palace",
      "Lalbagh Botanical Garden",
    ],
  },
  {
    id: "wayanad",
    title: "Wayanad Nature Retreat",
    destination: "Wayanad",
    duration: "3 Days / 2 Nights",
    price: "On Request",
    priceNum: 0,
    categories: ["India", "Nature & Adventure"],
    image: "/wayanad-nature.jpg",
    description:
      "Escape to misty mountains, lush forests, spectacular waterfalls, and ancient caves in Kerala's beautiful highlands.",
    featured: true,
    highlights: [
      "Edakkal Caves",
      "Banasura Sagar Dam",
      "Soochipara Waterfalls",
      "Pookode Lake",
    ],
  },
  {
    id: "lakshadweep",
    title: "Lakshadweep Island Paradise",
    destination: "Lakshadweep",
    duration: "4 Days / 3 Nights",
    price: "On Request",
    priceNum: 0,
    categories: ["India", "Beach & Island"],
    image: "/lakshadweep-islands.jpg",
    description:
      "Discover turquoise lagoons, pristine white-sand beaches, vibrant coral reefs, and unforgettable tropical island adventures.",
    featured: true,
    highlights: [
      "Agatti Island",
      "Bangaram Island",
      "Snorkelling Adventures",
      "Glass-bottom Boat Experience",
    ],
  },
  {
    id: "delhi-agra-jaipur",
    title: "Delhi - Agra - Jaipur Heritage Tour",
    destination: "Delhi- Agra-Jaipur",
    duration: "6 Days / 5 Nights",
    price: "On Request",
    priceNum: 0,
    categories: ["India", "Heritage & Culture"],
    image: "/Delhi.webp",
    description:
      "Journey through India's legendary Golden Triangle, exploring historic Delhi, the timeless Taj Mahal in Agra, and Jaipur's magnificent royal architecture.",
    featured: true,
    highlights: [
      "India Gate & Qutub Minar",
      "Taj Mahal & Agra Fort",
      "Amber Fort, Jaipur",
      "Hawa Mahal",
    ],
  },
  {
    id: "sikkim-darjeeling",
    title: "Sikkim and Darjeeling Himalayan Escape",
    destination: "Sikkim and dargling",
    duration: "6 Days / 5 Nights",
    price: "On Request",
    priceNum: 0,
    categories: ["India", "Mountains & Nature"],
    image: "/Sikkim.jpg",
    description:
      "Explore breathtaking Himalayan landscapes, peaceful monasteries, scenic tea gardens, and unforgettable mountain sunrises.",
    featured: true,
    highlights: [
      "Tsomgo Lake",
      "Nathula Pass",
      "Tiger Hill Sunrise",
      "Darjeeling Himalayan Railway",
    ],
  },
  {
    id: "meghalaya-assam",
    title: "Meghalaya and Assam Discovery",
    destination: "meghalaya and assam",
    duration: "7 Days / 6 Nights",
    price: "On Request",
    priceNum: 0,
    categories: ["India", "Nature & Adventure"],
    image: "/Meghalaya.avif",
    description:
      "Discover Meghalaya's living root bridges and spectacular waterfalls, explore the crystal-clear Dawki River, and experience Assam's rich wildlife and culture.",
    featured: true,
    highlights: [
      "Cherrapunji Waterfalls",
      "Double Decker Living Root Bridge",
      "Dawki River",
      "Kaziranga National Park",
    ],
  },
  
  {
    id: "maldives-honeymoon-bliss",
    title: "Maldives Honeymoon Bliss",
    destination: "Maldives",
    duration: "6 Days / 5 Nights",
    price: "₹85,000",
    priceNum: 85000,
    categories: ["International", "Honeymoon"],
    image: "/malidives.avif",
    description:
      "Escape to paradise — overwater bungalows, turquoise lagoons, and sunsets made for two. The ultimate honeymoon experience in the Maldives.",
    featured: true,
    highlights: [
      "Overwater villa stay",
      "Private beach dinner",
      "Snorkelling & diving",
      "Sunset dolphin cruise",
    ],
  },
  {
    id: "goa-beach-holiday",
    title: "Goa Beach Holiday",
    destination: "Goa",
    duration: "4 Days / 3 Nights",
    price: "₹5500",
    priceNum: 5500,
    categories: ["India", "Family & Leisure"],
    image: "/goa.jpg",
    description:
      "Sun, sand, and the laid-back spirit of Goa. Perfect for families and couples looking for a relaxed beach holiday with a dash of culture and adventure.",
    highlights: [
      "North & South Goa beaches",
      "Old Goa heritage churches",
      "Water sports & shacks",
      "Sunset cruise on Mandovi",
    ],
  },
  {
    id: "himachal-mountain-retreat",
    title: "Himachal Mountain Retreat",
    destination: "Himachal Pradesh",
    duration: "6 Days / 5 Nights",
    price: "₹12,000",
    priceNum: 12000,
    categories: ["India", "Adventure & Nature"],
    image: "/himajal.jpg",
    description:
      "Breathe in the crisp mountain air of Himachal Pradesh — from the colonial charm of Shimla to the snow-draped valleys of Manali and beyond.",
    highlights: [
      "Manali snow valley",
      "Rohtang Pass excursion",
      "Solang Valley adventure",
      "Shimla colonial walk",
    ],
  },
  {
    id: "andaman-island-explorer",
    title: "Andaman Island Explorer",
    destination: "Andaman Islands",
    duration: "5 Days / 4 Nights",
    price: "₹18,000",
    priceNum: 18000,
    categories: ["India", "Island & Beach"],
    image: "/Andaman.jpg",
    description:
      "Discover the untouched paradise of the Andaman Islands — pristine white beaches, vibrant coral reefs, and crystal-clear waters that take your breath away.",
    highlights: [
      "Radhanagar Beach",
      "Scuba diving & snorkelling",
      "Cellular Jail light show",
      "Neil Island day trip",
    ],
  },
  {
    id: "bali-tropical-escape",
    title: "Bali Tropical Escape",
    destination: "Bali, Indonesia",
    duration: "6 Days / 5 Nights",
    price: "₹26,000",
    priceNum: 26000,
    categories: ["International"],
    image: "/Bali.jpg",
    description:
      "Lose yourself in Bali's magical blend of lush rice terraces, ancient temples, world-class spas, and vibrant beach culture. A paradise for every kind of traveller.",
    highlights: [
      "Tegallalang rice terraces",
      "Uluwatu temple sunset",
      "Seminyak beach & spa",
      "Ubud cultural tour",
    ],
  },
  {
    id: "thailand-discovery",
    title: "Thailand Discovery",
    destination: "Thailand",
    duration: "7 Days / 6 Nights",
    price: "₹22,000",
    priceNum: 22000,
    categories: ["International"],
    image: "/tailend.jpg",
    description:
      "From the golden temples of Bangkok to the turquoise waters of Phuket and the cultural heartland of Chiang Mai — Thailand is a journey that never disappoints.",
    highlights: [
      "Bangkok grand palace",
      "Chiang Mai temples",
      "Phi Phi island cruise",
      "Thai cooking class",
    ],
  },
  {
    id: "malaysia-explorer",
    title: "Malaysia Explorer",
    destination: "Malaysia",
    duration: "5 Days / 4 Nights",
    price: "₹20,000",
    priceNum: 20000,
    categories: ["International"],
    image: "/Malaysia.avif",
    description:
      "A vibrant mix of modern skylines, colonial heritage, tropical islands, and incredible food — Malaysia is Southeast Asia's most diverse and rewarding destination.",
    highlights: [
      "Petronas Twin Towers",
      "Batu Caves visit",
      "Penang street food trail",
      "Langkawi island day trip",
    ],
  },
  {
    id: "singapore-city-break",
    title: "Singapore City Break",
    destination: "Singapore",
    duration: "4 Days / 3 Nights",
    price: "₹30,000",
    priceNum: 30000,
    categories: ["International"],
    image: "/singapore-modern.avif",
    description:
      "The city that has it all — futuristic architecture, world-class dining, lush gardens, and non-stop entertainment. Singapore is the perfect short international getaway.",
    highlights: [
      "Marina Bay Sands skypark",
      "Gardens by the Bay",
      "Sentosa Island & Universal Studios",
      "Hawker centre food tour",
    ],
  },
  {
    id: "dubai-uae-splendour",
    title: "Dubai & UAE Splendour",
    destination: "Dubai & UAE",
    duration: "5 Days / 4 Nights",
    price: "₹34,000",
    priceNum: 34000,
    categories: ["International"],
    image: "/Dubai.avif",
    description:
      "Experience the dazzling contrast of ultra-modern skyscrapers and timeless desert landscapes. Dubai and the UAE offer luxury, adventure, and culture in equal measure.",
    highlights: [
      "Burj Khalifa observation deck",
      "Desert safari & dune bashing",
      "Dubai Mall & Gold Souk",
      "Abu Dhabi Sheikh Zayed Mosque",
    ],
  },
  {
    id: "european-grand-tour",
    title: "Europe Grand Tour",
    destination: "Europe",
    duration: "10 Days / 9 Nights",
    price: "₹1,80,000",
    priceNum: 180000,
    categories: ["International"],
    image: "/Europe.avif",
    description:
      "A sweeping journey through Europe's most iconic cities — Paris, Rome, Amsterdam, and beyond. Art, history, cuisine, and breathtaking landscapes await at every turn.",
    highlights: [
      "Paris Eiffel Tower & Louvre",
      "Rome Colosseum & Vatican",
      "Swiss Alps scenic train",
      "Amsterdam canal cruise",
    ],
  },
  {
    id: "sri-lanka-heritage-trail",
    title: "Sri Lanka Heritage Trail",
    destination: "Sri Lanka",
    duration: "6 Days / 5 Nights",
    price: "₹35,000",
    priceNum: 35000,
    categories: ["International"],
    image: "/Sri Lanka.avif",
    description:
      "A compact island packed with ancient ruins, misty hill stations, golden beaches, and incredible wildlife. Sri Lanka is South Asia's most underrated gem.",
    highlights: [
      "Sigiriya rock fortress",
      "Kandy Temple of the Tooth",
      "Ella tea country train ride",
      "Mirissa whale watching",
    ],
  },
  {
    id: "vietnam-highlights",
    title: "Vietnam Highlights",
    destination: "Vietnam",
    duration: "8 Days / 7 Nights",
    price: "₹52,000",
    priceNum: 52000,
    categories: ["International"],
    image: "/vietnam.jpg",
    description:
      "From the dramatic limestone karsts of Halong Bay to the lantern-lit streets of Hoi An and the buzzing energy of Ho Chi Minh City — Vietnam is endlessly captivating.",
    highlights: [
      "Halong Bay overnight cruise",
      "Hoi An ancient town",
      "Ho Chi Minh City tour",
      "Mekong Delta boat trip",
    ],
  },
  {
    id: "azerbaijan-discovery",
    title: "Azerbaijan Discovery",
    destination: "Azerbaijan",
    duration: "5 Days / 4 Nights",
    price: "₹45,000",
    priceNum: 45000,
    categories: ["International"],
    image: "/Azerbaijan.avif",
    description:
      "Where East meets West — Baku's stunning blend of medieval old city, futuristic architecture, and warm Azerbaijani hospitality makes it one of the most exciting emerging destinations.",
    highlights: [
      "Baku Old City (Icherisheher)",
      "Flame Towers & Baku Boulevard",
      "Gobustan mud volcanoes",
      "Sheki Palace day trip",
    ],
  },
  {
    id: "georgia-caucasus-journey",
    title: "Georgia Caucasus Journey",
    destination: "Georgia",
    duration: "6 Days / 5 Nights",
    price: "₹40,000",
    priceNum: 40000,
    categories: ["International"],
    image: "/Georgia.jpg",
    description:
      "A hidden gem of the Caucasus — Tbilisi's cobblestone old town, dramatic mountain monasteries, ancient vineyards, and legendary hospitality make Georgia utterly unforgettable.",
    highlights: [
      "Tbilisi old town & Metekhi Church",
      "Kazbegi mountain monastery",
      "Mtskheta ancient capital",
      "Georgian wine & cuisine trail",
    ],
  },
];


export const SERVICES: Service[] = [
  {
    id: "air-tickets",
    title: "Domestic & International Air Tickets",
    description:
      "Best-fare flight bookings across all major airlines — domestic routes and international destinations. We handle group bookings, multi-city itineraries, and last-minute travel with ease.",
    iconName: "Plane",
  },
  {
    id: "holiday-packages",
    title: "Holiday Packages",
    description:
      "Handcrafted holiday packages for every budget and travel style — from weekend getaways within India to exotic international escapes. Domestic and international packages tailored just for you.",
    iconName: "Palmtree",
  },
  {
    id: "visa-assistance",
    title: "Global Visa Assistance & Processing",
    description:
      "Stress-free visa guidance for 50+ countries. We assist with documentation, application filing, appointment scheduling, and follow-ups — so your visa is ready before you are.",
    iconName: "FileCheck2",
  },
  {
    id: "hotel-reservations",
    title: "Hotel & Resort Reservations",
    description:
      "Curated stays from budget-friendly guesthouses to five-star luxury resorts. We negotiate the best rates and ensure your accommodation matches your expectations perfectly.",
    iconName: "Hotel",
  },
  {
    id: "car-rental",
    title: "Car Rental & Private Transfers",
    description:
      "Comfortable, reliable private vehicles for airport pickups, sightseeing, and intercity transfers. Available across India and at select international destinations.",
    iconName: "Car",
  },
  {
    id: "group-custom-tours",
    title: "Group Tours & Customised Tours",
    description:
      "Organised group departures with expert guides, or fully bespoke itineraries built around your group's interests, pace, and budget. No two tours are the same.",
    iconName: "Users",
  },
  {
    id: "cruise-houseboats",
    title: "Cruise & Houseboat Bookings",
    description:
      "From Kerala's iconic backwater houseboats to international ocean cruises — we book the right vessel, the right route, and the right experience for you.",
    iconName: "Ship",
  },
  {
    id: "honeymoon-family",
    title: "Honeymoon & Family Packages",
    description:
      "Romantic escapes for newlyweds and fun-filled adventures for families. Specially designed itineraries with the right mix of privacy, comfort, and memorable experiences.",
    iconName: "Heart",
  },
  {
    id: "corporate-travel",
    title: "Corporate & Business Travel",
    description:
      "End-to-end travel management for businesses — flights, hotels, ground transport, and visa support for employees and delegations. Reliable, efficient, and cost-effective.",
    iconName: "Briefcase",
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    description:
      "Punctual, comfortable airport pickup and drop-off services. Track your flight, meet-and-greet on arrival, and door-to-door transfers — available 24/7.",
    iconName: "MapPin",
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance & Assistance",
    description:
      "Comprehensive travel insurance plans covering medical emergencies, trip cancellations, lost baggage, and more. Travel with confidence knowing you're fully protected.",
    iconName: "Shield",
  },
  {
    id: "complete-support",
    title: "Complete Travel Planning & Support",
    description:
      "From the first enquiry to the final day of your trip, our team is with you every step of the way. 24/7 support, real-time assistance, and a dedicated travel advisor for every booking.",
    iconName: "ClipboardCheck",
  },
];

export const ABOUT_CONTENT = {
  heroLabel: "OUR STORY",
  heading: "Beyond the Journey",
  establishmentTagline: "Rooted in Thrissur, Kerala — Redefining Travel with Trust & Passion",
  introTitle1: "We Don't Just Arrange Journeys.",
  introTitle2: "We Go Beyond the Journey.",
  companyIntro:
    "At YAARA TRAVELS, travel is more than reaching a destination — it is the stories you bring home, the serenity you discover, and the bonds that grow stronger along the way. Founded in Thrissur, Kerala, YAARA TRAVELS was born out of a profound passion for exploration and an unwavering commitment to hospitality. With over 25 years of industry expertise, we specialize in curating heartfelt, dependable, and extraordinary journeys across India and international horizons.",
  stats: [
    { value: "25+", label: "Years of Experience" },
    { value: "500+", label: "Happy Travellers" },
    { value: "30+", label: "Destinations Covered" },
    { value: "100%", label: "Personalised Service" },
  ],
  story: {
    title: "Our Story",
    content:
      "What began as a heartfelt endeavor to connect people with the timeless beauty of Kerala has evolved into a premier travel consultancy serving travellers across India and the globe. Every itinerary we design reflects our deep local knowledge, meticulous attention to detail, and a genuine care for each guest. Over the years, we have cultivated enduring partnerships with luxury resorts, heritage homestays, airlines, and local guides to deliver experiences that transcend typical tourism.",
  },
  mission: {
    title: "Our Mission",
    content:
      "To deliver seamless, worry-free, and inspiring travel experiences by offering honest guidance, handcrafted itineraries, transparent pricing, and 24/7 dedicated support for every traveller.",
  },
  vision: {
    title: "Our Vision",
    content:
      "To be recognized as South India's most trusted and beloved travel partner, setting the benchmark for ethical travel management, customer delight, and transformative journeys.",
  },
  pillars: [
    {
      title: "Experience",
      description:
        "Over two decades of proven travel management expertise guiding every reservation, route, and tour package.",
      icon: "Award",
    },
    {
      title: "Passion",
      description:
        "A team of passionate travel architects who treat your vacation dreams with genuine enthusiasm and personalized warmth.",
      icon: "Heart",
    },
    {
      title: "Trust",
      description:
        "Complete transparency, verified partners, and dependable round-the-clock support from your first enquiry to your safe return.",
      icon: "Shield",
    },
  ],
  founder: {
    name: "Sreemangalathu Shijuraj",
    title: "Founder & Director",
    bio:
      "With over 25 years of extensive experience in the travel, tourism, and hospitality sectors, Sreemangalathu Shijuraj has guided thousands of travellers across domestic and international circuits. His deep-rooted belief that true travel should be an enriching, effortless experience forms the cornerstone of YAARA TRAVELS. Under his stewardship, the company continues to foster lasting relationships with clients through integrity, personalized care, and operational excellence.",
    quote:
      "Travel is not merely an itinerary of places; it is a tapestry of moments that stay with you forever. Our responsibility is to ensure that every single moment is filled with wonder, comfort, and peace of mind.",
  },
  associations: [
    {
      name: "MKTA",
      fullName: "Malabar Karavali Tourism Association",
      role: "Registered Member",
      note: "Promoting ethical, sustainable tourism and regional travel excellence.",
    },
    {
      name: "GTAA",
      fullName: "Global Travel Agents Association",
      role: "Certified Member",
      note: "Adhering to international industry safety, quality standards, and consumer protection.",
    },
  ],
  ctaHeading: "Your Journey. Our Responsibility.",
  ctaButton: "Start Planning Your Trip",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/contact", label: "Contact" },
];
