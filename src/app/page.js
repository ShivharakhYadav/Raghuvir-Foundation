import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social media icons

export default function Home() {
  return (
    <main>
      <header className="px-3 bg-gray-800 text-white">
        <div className="container mx-auto py-6 flex items-center justify-between">
          <a href="#" className="lg:text-xl font-bold min-[320px]:text-sm">
            Shree Raghuvir Foundation
          </a>

          <nav>
            <ul className="flex space-x-4">
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

      <footer className="px-3 bg-gray-800 text-white pt-4">
        <div className="container mx-auto flex justify-between">
          <div>
            <p className="lg:text-xl font-bold min-[320px]:text-sm">
              Shree Raghuvir Foundation
            </p>
            <p className="text-gray-300">
              Alone, we can do so little; together, we can do so much.
            </p>
            <p className="text-gray-300 text-right"> - Helen Keller</p>
          </div>
          <div>
            <p className="text-gray-300">1234 Example Street, City, Country</p>
            <p className="text-gray-300">Opening Hours: Mon-Fri 9am-5pm</p>
            <div className="flex space-x-4 mt-2">
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
          <div>
            <ul className="flex flex-col space-y-4">
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
