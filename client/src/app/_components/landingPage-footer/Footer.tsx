"use client";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Logo } from "../common/Logo";
export default function Footer() {
  const textArray = new Array(100).fill("Fresh fast delivered");
  return (
    <footer className="bg-[#141414] text-gray-300">
      {/* 🔴 Top Banner */}
      <div className="relative overflow-hidden bg-[#e63946] h-14 flex items-center">
        <div className="whitespace-nowrap animate-scroll text-white font-semibold text-xl">
          {textArray.map((text, index) => (
            <span className="mx-10" key={index}>
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* 🖤 Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <Logo />

        {/* Column 1 */}
        <div>
          <h3 className="text-gray-400 uppercase text-sm font-semibold mb-3">
            Nomnom
          </h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Contact us</li>
            <li>Delivery zone</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-gray-400 uppercase text-sm font-semibold mb-3">
            Menu
          </h3>
          <ul className="space-y-2">
            <li>Appetizers</li>
            <li>Salads</li>
            <li>Pizzas</li>
            <li>Main dishes</li>
            <li>Desserts</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-gray-400 uppercase text-sm font-semibold mb-3">
            Follow us
          </h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 py-6 text-sm text-gray-400 text-center md:text-left max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        <p>Copyright 2024 © Nomnom LLC</p>
        <div className="flex flex-wrap gap-6 mt-3 md:mt-0">
          <a href="#">Privacy policy</a>
          <a href="#">Terms and condition</a>
          <a href="#">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
}
