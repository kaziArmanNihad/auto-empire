import HeroSectionCar from "@/public/images/HomePageImages/HeroSectionCar.jpeg";
import LatestCarOne from "@/public/images/HomePageImages/LatestCarOne.jpg";
import LatestCarTwo from "@/public/images/HomePageImages/LatestCarTwo.jpg";
import LatestCarThree from "@/public/images/HomePageImages/LatestCarThree.jpg";
import TopSellCarOne from "@/public/images/HomePageImages/TopSellCarOne.jpg";
import TopSellCarTwo from "@/public/images/HomePageImages/TopSellCarTwo.jpg";
import TreasureComponentImageOne from "@/public/images/HomePageImages/TreasureComponentImageOne.jpg";
import TreasureComponentImageTwo from "@/public/images/HomePageImages/TreasureComponentImageTwo.jpg";
import TreasureComponentImageThree from "@/public/images/HomePageImages/TreasureComponentImageThree.jpg";
import TreasureComponentImageFour from "@/public/images/HomePageImages/TreasureComponentImageFour.jpg";
import TreasureComponentImageFive from "@/public/images/HomePageImages/TreasureComponentImageFive.jpg";
import SpotlightImageOne from "@/public/images/HomePageImages/SpotlightImageOne.png";
import ServiceSectionCarOne from "@/public/images/HomePageImages/ServiceSectionCarOne.jpg";
import ServiceSectionCarTwo from "@/public/images/HomePageImages/ServiceSectionCarTwo.jpg";
import ServiceSectionCarThree from "@/public/images/HomePageImages/ServiceSectionCarThree.jpg";
import ServiceSectionCarFour from "@/public/images/HomePageImages/ServiceSectionCarFour.jpg";
import ServiceSectionCarFive from "@/public/images/HomePageImages/ServiceSectionCarFive.jpg";
import ServiceSectionCarSix from "@/public/images/HomePageImages/ServiceSectionCarSix.jpg";
import StockComponentImageOne from "@/public/images/HomePageImages/StockComponentImageOne.png";

// inventory page imports

// import InventorySectionImageOne from "@/public/images/InventoryPageImages/InventorySectionImageOne.avif";

// about page imports
import AboutSignatureSectionImage from "@/public/images/AboutPageImages/AboutSignatureSectionImage.jpg";
import AboutPrestigeSectionImageOne from "@/public/images/AboutPageImages/AboutPrestigeSectionImageOne.jpg";
import AboutStorySectionImageOne from "@/public/images/AboutPageImages/AboutStorySectionImageOne.jpg";
import AboutFounderImageOne from "@/public/images/AboutPageImages/AboutFounderImageOne.jpg";

import AboutTeamSectionImageOne from "@/public/images/AboutPageImages/AboutTeamSectionImageOne.jpg";
import AboutTeamSectionImageTwo from "@/public/images/AboutPageImages/AboutTeamSectionImageTwo.jpg";
import AboutTeamSectionImageThree from "@/public/images/AboutPageImages/AboutTeamSectionImageThree.jpg";

// contact page imports

import ContactLocationImage from "@/public/images/ContactPageImages/LocationImage.png";

// start exporting

export const heroSection = {
  image: HeroSectionCar,
  title: "Welcome to Auto Empire",
  subtitle:
    "Stay informed, stay inspired, and stay ahead with Auto Empire — where your journey begins.",
  description:
    "We're thrilled to have you here at Auto empire, your premier destination for all things automotive. Whether you're looking for expert advice, the latest industry trends, or top-notch services to keep your vehicle in peak condition, you've come to the right place.",
  secondDescription:
    "From routine maintenance to performance upgrades, we’re here to help you drive with confidence. Our team of seasoned professionals is dedicated to delivering excellence, ensuring your car runs as smoothly as the day you got it.",
};

export const latestSection = {
  title: "Discover Our Latest Arrivals",
  description:
    "At Auto empire, we’re excited to present three of the most captivating vehicles that are making waves in the automotive world. Explore the epitome of luxury, the thrill of racing, and the power of SUVs with our latest selections.",
};

export const latestSectionImages = [
  {
    id: "0",
    image: LatestCarOne,
  },
  {
    id: "1",
    image: LatestCarTwo,
  },
  {
    id: "2",
    image: LatestCarThree,
  },
];

export const TopSellSection = {
  title: "Explore Our Top Selling Vehicles",
  description:
    "At Auto empire, we’re proud to showcase our top-selling cars, each representing the pinnacle of excellence in their respective categories. Discover why these models have captured the hearts of our customers and continue to lead the way in luxury and performance.",
};

export const TopSellSectionCards = [
  {
    id: "1",
    image: TopSellCarOne,
    model: "Mercedes Benz S Class",
    modelDetails:
      "The S-Class has consistently been a benchmark for luxury sedans, combining advanced technology, superior comfort, and a prestigious brand reputation.",
  },
  {
    id: "2",
    image: TopSellCarTwo,
    model: "Porsche 911 GT3",
    modelDetails:
      "Known for its exceptional track performance, precision engineering, and iconic design, the 911 GT3 has been a top choice among racing enthusiasts and performance car lovers.",
  },
];

export const TreasureSection = {
  title: "Empire Treasure",
  description:
    "Easily track, organize, and manage all your products in one place. This section provides real-time insights into stock levels, item details, and inventory movements to help you stay on top of your supply chain and make informed decisions.",
  imageOne: TreasureComponentImageOne,
  imageFive: TreasureComponentImageTwo,
  imageThree: TreasureComponentImageThree,
  imageFour: TreasureComponentImageFour,
  imageTwo: TreasureComponentImageFive,
};

export const SpotlightSection = {
  title: "Empire Spotlight",
  ImageOne: SpotlightImageOne,
  headline:
    "Auto Empire Launches: A New Digital Kingdom for Car Enthusiasts Worldwide!",
  descriptionOne:
    "Auto Empire has officially hit the road your new go to destination for all things automotive, where passion meets performance across three distinct worlds: Luxury, Racing, and SUVs. Whether you're captivated by the handcrafted elegance of a Mercedes-Benz S-Class, the raw speed of a Porsche 911 GTR, or the commanding presence of a high end SUV, Auto Empire delivers a premium experience tailored to car lovers of every kind.",
  descriptionTwo:
    "This digital showroom isn't just about specs and stats it's about storytelling. From in depth reviews and cutting edge news to lifestyle features and expert insights, Auto Empire puts you in the driver’s seat of a high-octane journey. Our top news coverage tracks global unveilings, motorsport victories, tech innovations, and luxury trends that define the future of driving.",
  descriptionThree:
    "Auto Empire redefines the digital showroom experience—where every car has a story, and every story fuels your passion for the road. Dive into immersive reviews, breaking automotive news, and curated lifestyle content that connects innovation with aspiration. From international debuts to elite motorsport moments and the latest in luxury and tech, we bring you the pulse of the automotive world in motion.",
};

export const EmpireServiceSection = {
  title: "Empire Service Hubs",
  heading: "Where Precision Meets Performance",
  descriptionOne:
    "Expert service for luxury, racing, and SUV vehicles across Auto Empire’s trusted network.",
  ImageOne: ServiceSectionCarOne,
  ImageTwo: ServiceSectionCarTwo,
  ImageThree: ServiceSectionCarThree,
  ImageFour: ServiceSectionCarFour,
  ImageFive: ServiceSectionCarFive,
  ImageSix: ServiceSectionCarSix,
};

export const StockCardSection = [
  {
    cardTitle: "Real-Time Inventory Sync",
    cardDescription:
      "Stay ahead with live updates. Our system ensures that every luxury and racing vehicle in our collection is tracked in real time no delays, no guesswork.",
  },
  {
    cardTitle: "Precision Vehicle Management",
    cardDescription:
      "From exotic supercars to track ready legends, each car is logged, detailed, and managed with unmatched accuracy, ensuring your dream ride is always within reach.",
  },
  {
    cardTitle: "Acquisition to Delivery",
    cardDescription:
      "SmartStock handles every stage sourcing, inspection, storage, and handover with the same care and precision you'd expect from a luxury automotive brand.",
  },
];

export const StockSection = {
  title: "Smart Stock",
  description:
    "SmartStock is the heart of Auto Empire, powering our curated collection of luxury and racing cars. With precision inventory management, we keep every masterpiece from supercars to track legends ready to move.",
  descriptionTwo:
    "It's the engine behind Auto Empire’s success — a robust inventory system that ensures our lineup of luxury and racing vehicles is always current, accurate, and ready for sale. From acquisition to delivery, our stock is managed with precision to meet the highest standards of automotive excellence.",
  imageOne: StockComponentImageOne,
};

export const FooterSection = {
  title: "Auto Empire",
  description:
    "Discover a curated selection of high-end vehicles from top-tier dealers and private collectors. Whether you're acquiring your next luxury car or showcasing your prized model, experience an elevated standard of automotive excellence.",
};

// Inventory page constants starts:

export const InventorySection = [
  {
    brand: "Mercedes-Benz",
    carName: "S-Class",
    modelName: "S 580 4MATIC",
    price: 55000000,
    releaseYear: 2023,
    stockAvailable: 3,
    image:
      "https://i.pinimg.com/736x/8e/4b/1c/8e4b1c4bde26596bdbc5e856d4ad1e96.jpg",
  },
  {
    brand: "BMW",
    carName: "7 Series",
    modelName: "740i M Sport",
    price: 49000000,
    releaseYear: 2023,
    stockAvailable: 5,
    image:
      "https://i.pinimg.com/736x/8a/e3/e4/8ae3e44e7158140838f29148592bbc43.jpg",
  },
  {
    brand: "Audi",
    carName: "A8",
    modelName: "A8 L 60 TFSI quattro",
    price: 47000000,
    releaseYear: 2023,
    stockAvailable: 2,
    image:
      "https://i.pinimg.com/736x/63/55/15/635515c87c8a45152466c9ee0936ddcb.jpg",
  },
  {
    brand: "Lexus",
    carName: "LS",
    modelName: "LS 500h Executive",
    price: 46000000,
    releaseYear: 2022,
    stockAvailable: 4,
    image:
      "https://i.pinimg.com/736x/a5/09/1e/a5091eea29ce7b73f23df662d9f00e79.jpg",
  },
  {
    brand: "Jaguar",
    carName: "XJ",
    modelName: "XJL Portfolio",
    price: 42000000,
    releaseYear: 2021,
    stockAvailable: 1,
    image:
      "https://i.pinimg.com/736x/94/7b/15/947b15cbd1282a0434e04e7d35437456.jpg",
  },
  {
    brand: "Porsche",
    carName: "Panamera",
    modelName: "Panamera 4 E-Hybrid",
    price: 53000000,
    releaseYear: 2023,
    stockAvailable: 2,
    image:
      "https://i.pinimg.com/736x/7a/70/00/7a700013de3b7dbe6d7df7e9f5d9d1f7.jpg",
  },
  {
    brand: "Tesla",
    carName: "Model S",
    modelName: "Plaid",
    price: 48000000,
    releaseYear: 2023,
    stockAvailable: 6,
    image:
      "https://i.pinimg.com/736x/64/d4/da/64d4daec943260c734023be29a7027f1.jpg",
  },
  {
    brand: "Bentley",
    carName: "Flying Spur",
    modelName: "V8",
    price: 75000000,
    releaseYear: 2023,
    stockAvailable: 2,
    image:
      "https://i.pinimg.com/736x/db/a6/ac/dba6ac62bb2f5bf0361545c2e816298d.jpg",
  },
  {
    brand: "Rolls-Royce",
    carName: "Ghost",
    modelName: "Ghost Extended",
    price: 120000000,
    releaseYear: 2024,
    stockAvailable: 1,
    image:
      "https://i.pinimg.com/736x/a1/1b/8c/a11b8c0a18d994190098b2ca05eb690c.jpg",
  },
  {
    brand: "Aston Martin",
    carName: "Rapide",
    modelName: "Rapide AMR",
    price: 68000000,
    releaseYear: 2022,
    stockAvailable: 1,
    image:
      "https://i.pinimg.com/736x/20/29/6b/20296b205c88cb42b93b80f00f84a15f.jpg",
  },
  {
    brand: "Maserati",
    carName: "Quattroporte",
    modelName: "Trofeo",
    price: 59000000,
    releaseYear: 2023,
    stockAvailable: 3,
    image:
      "https://i.pinimg.com/736x/e0/e8/9f/e0e89fe08ed39ee347b89bbb73565cbf.jpg",
  },
  {
    brand: "Genesis",
    carName: "G90",
    modelName: "G90 3.5T E-SC",
    price: 43000000,
    releaseYear: 2023,
    stockAvailable: 4,
    image:
      "https://i.pinimg.com/736x/06/31/47/063147d92f78a5b692ba49e5fcaba827.jpg",
  },
  {
    brand: "Cadillac",
    carName: "CT6",
    modelName: "CT6 Platinum",
    price: 41000000,
    releaseYear: 2021,
    stockAvailable: 2,
    image:
      "https://i.pinimg.com/736x/07/3a/ea/073aea2719eb3da6499cd1ef6ac36f89.jpg",
  },
  {
    brand: "Infiniti",
    carName: "Q70",
    modelName: "Q70L 5.6 V8",
    price: 39500000,
    releaseYear: 2020,
    stockAvailable: 2,
    image:
      "https://i.pinimg.com/736x/bb/f9/5a/bbf95ab174f92846d5f696b499647536.jpg",
  },
  {
    brand: "Lucid",
    carName: "Air",
    modelName: "Grand Touring",
    price: 69000000,
    releaseYear: 2024,
    stockAvailable: 2,
    image:
      "https://i.pinimg.com/736x/b6/56/70/b656701a902c0bf7830bce16e67bb82a.jpg",
  },
  {
    brand: "Ferrari",
    carName: "488 GT3",
    modelName: "Evo 2020",
    price: 95000000,
    releaseYear: 2020,
    stockAvailable: 2,
    image:
      "https://i.pinimg.com/736x/68/e2/d5/68e2d57bbb51cf28c66f4b72ea9b8804.jpg",
  },
  {
    brand: "Lamborghini",
    carName: "Hurac\u00e1n",
    modelName: "Super Trofeo EVO2",
    price: 102000000,
    releaseYear: 2022,
    stockAvailable: 3,
    image:
      "https://i.pinimg.com/736x/3f/f7/a1/3ff7a1158b6fd6f66d26f5fd24ce7df9.jpg",
  },
  {
    brand: "Porsche",
    carName: "911 GT3 Cup",
    modelName: "992",
    price: 85000000,
    releaseYear: 2021,
    stockAvailable: 4,
    image:
      "https://i.pinimg.com/736x/85/0a/ca/850aca7cd77c110e99ab20862aef14cf.jpg",
  },
  {
    brand: "McLaren",
    carName: "720S GT3",
    modelName: "2023 Edition",
    price: 98000000,
    releaseYear: 2023,
    stockAvailable: 1,
    image:
      "https://i.pinimg.com/736x/71/45/99/7145995c2f7fd5389f7e22612f502a60.jpg",
  },
  {
    brand: "Aston Martin",
    carName: "Vantage GT3",
    modelName: "2022",
    price: 89000000,
    releaseYear: 2022,
    stockAvailable: 2,
    image:
      "https://i.pinimg.com/736x/20/29/6b/20296b205c88cb42b93b80f00f84a15f.jpg",
  },
  {
    brand: "BMW",
    carName: "M4 GT3",
    modelName: "G82",
    price: 87000000,
    releaseYear: 2022,
    stockAvailable: 3,
    image:
      "https://i.pinimg.com/736x/67/e8/ef/67e8efc60881f3ab396e26c29e8fd71a.jpg",
  },
  {
    brand: "Audi",
    carName: "R8 LMS",
    modelName: "GT3 Evo II",
    price: 88000000,
    releaseYear: 2022,
    stockAvailable: 2,
    image:
      "https://i.pinimg.com/736x/5d/88/d1/5d88d18850dda888a480a0a2501e4f05.jpg",
  },
  {
    brand: "Mercedes-AMG",
    carName: "GT3",
    modelName: "2023",
    price: 93000000,
    releaseYear: 2023,
    stockAvailable: 1,
    image:
      "https://i.pinimg.com/736x/de/5a/6f/de5a6fa3a3bee0544e97b14d39de8dc3.jpg",
  },
  {
    brand: "Nissan",
    carName: "GT-R",
    modelName: "NISMO GT3",
    price: 86000000,
    releaseYear: 2020,
    stockAvailable: 2,
    image:
      "https://i.pinimg.com/736x/f4/5e/97/f45e9763c34cc624978d7f5ec3d2fa99.jpg",
  },
  {
    brand: "Chevrolet",
    carName: "Corvette C8.R",
    modelName: "GTLM",
    price: 82000000,
    releaseYear: 2021,
    stockAvailable: 2,
    image:
      "https://i.pinimg.com/736x/b7/bf/0a/b7bf0a103253034dc337e6bf9d876e2e.jpg",
  },
  {
    brand: "Ford",
    carName: "GT",
    modelName: "LM GTE-Pro",
    price: 90000000,
    releaseYear: 2020,
    stockAvailable: 1,
    image:
      "https://i.pinimg.com/736x/1f/07/9d/1f079d0d5bc79b1b692a46d1b41382f3.jpg",
  },
  {
    brand: "Toyota",
    carName: "GR Supra GT4",
    modelName: "2023",
    price: 78000000,
    releaseYear: 2023,
    stockAvailable: 3,
    image:
      "https://i.pinimg.com/736x/5a/3e/08/5a3e080456e964ca42afc6a8fe849b8e.jpg",
  },
  {
    brand: "Subaru",
    carName: "WRX STI",
    modelName: "NR4",
    price: 75000000,
    releaseYear: 2022,
    stockAvailable: 2,
    image:
      "https://i.pinimg.com/736x/f3/8c/99/f38c99e77b9bcb432f1fa00632d5795f.jpg",
  },
  {
    brand: "Peugeot",
    carName: "9X8",
    modelName: "Hypercar",
    price: 105000000,
    releaseYear: 2023,
    stockAvailable: 1,
    image:
      "https://i.pinimg.com/736x/c9/c3/0d/c9c30d0cddf316d9e0d249800f7a3097.jpg",
  },
  {
    brand: "Mazda",
    carName: "RT24-P",
    modelName: "DPi",
    price: 80000000,
    releaseYear: 2021,
    stockAvailable: 1,
    image:
      "https://i.pinimg.com/736x/47/9f/1c/479f1caf4f87219917db6dc7c6824d5d.jpg",
  },
];

// Inventory page constants ends:

// About page constants starts:

export const AboutPrestigeSection = {
  imageOne: AboutPrestigeSectionImageOne,
  heading: "Legacy of Prestige",
  title: "Precision. Power. Prestige.",
  description:
    "At Auto Empire, we unite the elegance of luxury with the thrill of performance. Our showroom features a handpicked selection of the world’s most coveted luxury cars and adrenaline-charged racing machines — each chosen to ignite passion in every kind of driver. From refined cruisers to track-ready beasts, we deliver vehicles that turn heads and dominate roads.",
  descriptionTwo:
    "Every vehicle in our collection is meticulously selected for its design, engineering excellence, and undeniable presence. We source only from the most respected manufacturers and ensure that each model reflects our standards of quality, performance, and exclusivity. From high-end cruisers designed for comfort and status to track-ready beasts built for speed and control, Auto Empire caters to drivers who refuse to compromise.",
  descriptionThree:
    "But what truly sets us apart is the experience. Our team of knowledgeable enthusiasts is here to guide you through every step — whether you're selecting your dream car, customizing performance packages, or seeking expert advice. We believe buying a vehicle should be as exhilarating as driving one.",
};

export const AboutSignatureSection = {
  image: AboutSignatureSectionImage,
  title: "Auto Empire’s Signature",
  discription:
    "At Auto Empire, we don’t just sell luxury cars we deliver a driving experience defined by elegance, innovation, and prestige. Our signature collection represents a fusion of world class engineering and refined design, offering vehicles that embody status, sophistication, and uncompromising performance.",

  question: "Why choose Auto empire?",

  answerOne: "Curated Excellence:",
  answerDis:
    "Each vehicle in our luxury collection is handpicked to ensure it meets the highest standards of quality and craftsmanship.",

  answerTwo: "Personalized Service:",
  answerDisTwo:
    "Our expert team is dedicated to providing you with a personalized experience, offering insights and assistance tailored to your unique preferences.",

  answerThree: "Innovative Technology:",
  answerDisThree:
    "Experience the latest advancements in automotive technology that enhance your driving pleasure and ensure a seamless journey.",

  answerFour: "Unmatched Comfort:",
  answerDisFour:
    "Indulge in the ultimate in luxury and comfort with features designed to make every drive extraordinary.",

  footer:
    "We invite you to explore our collection and discover the car that perfectly aligns with your lifestyle and aspirations. Our team is here to assist you in finding the ideal vehicle that reflects your personal style and meets your highest expectations.",
};

export const AboutStorySection = {
  heading: "Our Story",
  image: AboutStorySectionImageOne,
  title: "Born from Passion, Built for Drivers",
  description:
    "Auto Empire was founded with a simple yet powerful idea: to create a space where automotive passion meets purpose. Frustrated by soulless spec sheets and shallow reviews, our team of car enthusiasts, storytellers, and industry insiders came together to launch a platform that goes beyond the basics. We set out to capture the thrill, emotion, and innovation that fuel the automotive world bringing you not just information, but inspiration. Auto Empire is more than a destination; it’s the start of every great drive.",
};

export const AboutFounderSection = {
  title: "A Word From Our Founder",
  Image: AboutFounderImageOne,
  author: "Jaxon Reeve, Founder of Auto Empire",
  description:
    "I didn’t just grow up loving cars I grew up living them. From late-night races on back roads to early mornings reading every auto magazine I could find, the spark was always there. But as the industry evolved, I noticed something missing: a place where real passion, deep insights, and bold storytelling could come together. That’s why I started Auto Empire.This isn’t just a platform it’s a movement. A digital garage for dreamers, drivers, and disruptors. Whether you're chasing speed, design, innovation, or heritage, you're one of us. Welcome to Auto Empire. Let’s ride into the future together.",
};

export const AboutTeamSection = {
  title: "Faces of the Empire",
  nameOne: "Henry Cavill",
  postOne: "Chief Driving Visionary",
  roleOne: "Head of Brand Strategy",
  nameTwo: "Benedict Cumberbatch",
  postTwo: "Motor Culture Curator",
  roleTwo: "Content Director",
  nameThree: "Andrew Garfield",
  postThree: "Speed & Style Ambassador",
  roleThree: "Brand Ambassador",
  imageOne: AboutTeamSectionImageOne,
  imageTwo: AboutTeamSectionImageTwo,
  imageThree: AboutTeamSectionImageThree,
};

// About page constants ends:

// Contact page constants starts:

export const ContactHeroSection = {
  image: ContactLocationImage,

  title: "Visit Auto Empire",
  discription:
    "Located in the heart of Rome, Auto Empire offers a premium showroom experience where luxury meets convenience. Whether you're stopping by to explore our exclusive car collection or to speak with our expert team, our doors are always open.",
  subtitle: "Opening Hours:",
  openDay: "🕒 Monday–Saturday: 9:00 AM – 7:00 PM",
  Appointment: "🕒 Sunday: By Appointment Only",
};

export const ContactMessageSection = {
  title: "Get in Touch",
  subtitle: "We’re Just a Message Away",
  description:
    "Looking to book a service, schedule a test drive, or have questions about a vehicle? Our team is here to help just send us a message and we’ll respond shortly.",
};

// Contact page constants ends:
