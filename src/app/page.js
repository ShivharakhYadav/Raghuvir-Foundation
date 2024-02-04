"use client";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaHome } from "react-icons/fa"; // Import social media icons
import { FaClock } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <main>
      <header className="px-3 bg-gray-800 text-white">
        <div className="container mx-auto py-6 flex items-center justify-between">
          <a href="#" className="lg:text-xl font-bold min-[320px]:text-sm">
            Shree Raghuvir Foundation
          </a>

          <nav>
            <ul className="flex space-x-4 min-[320px]:space-x-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Members
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          loop
          className="h-96"
        >
          <SwiperSlide>
            <img
              src="/r-1.jpg"
              className="h-full w-full min-[420px]:object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover 2xl:object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/r-2.jpg"
              className="h-full w-full min-[420px]:object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover 2xl:object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/r-3.jpg"
              className="h-full w-full min-[420px]:object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover 2xl:object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <footer className="bg-gray-800 text-white pt-4">
        {/* <div className="container mx-auto flex justify-between"> */}
        <div className="container mx-auto justify-between min-[320px]:px-3 min-[320px]:space-y-3 sm:flex  md:flex-col lg:flex-row xl:flex-wrap lg:px-0 xl:px-0">
          <div>
            <p className="lg:text-xl font-bold min-[320px]:text-center">
              Shree Raghuvir Foundation
            </p>
            <p className="text-gray-300">
              Alone, we can do so little; together, we can do so much.
            </p>
            <p className="text-gray-300 text-right"> - Helen Keller</p>
            <p>जो देश तोड़ेगा उसे हम तोड़ेंगे</p>
            <p className="text-gray-300 text-right"> - Foundation</p>
          </div>
          <div className="flex flex-col justify-between space-y-4">
            <p className="lg:text-xl font-bold min-[320px]:text-center">
              Contact Us
            </p>
            <div className="flex space-x-2">
              <MdCall />
              <p className="text-gray-300 leading-none">9033276538</p>
            </div>

            <div className="flex space-x-2">
              <FaHome />
              <p className="text-gray-300 leading-none">
                1234 Example Street, City, Country
              </p>
            </div>
            <div className="flex space-x-2">
              <FaClock />
              <p className="text-gray-300 leading-none">
                Opening Hours: Mon-Fri 9am-5pm
              </p>
            </div>
            <div className="flex flex-col justify-between space-y-4">
              <p className="lg:text-xl font-bold min-[320px]:text-center">
                Follow Us
              </p>
              <div className="flex justify-between">
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div>
            <ul className="flex justify-between min-[320px]:flex-row">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4 mt-4 bg-gray-700">
          <p className="text-center">&copy; 2024 Shree Raghuvir Foundation</p>
        </div>
      </footer>
    </main>
  );
}
