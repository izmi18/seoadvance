import { Link } from "gatsby"
import React from "react"

import logo from "../images/Logo-jatipadi.jpg"

const Footer = () => {
  return (
    <div className="m-4">
      <div className="max-w-7xl mx-auto mt-10 h-auto lg:mb-8 sm:mb-4 xs:mb-4 xxs:mb-4">
        <div className="footer bg-gradient-to-r from-pink to-purple p-10 mt-10 rounded-xl">
          <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* LEFT */}
            <div>
              <img className="max-h-28 max-w-xs" src={logo} alt="PT Jati Padi" />

              {/* CONTACT INFO */}
              <div className="text-black text-sm mt-6 space-y-2">
                <p>
                  📞 <span className="font-semibold">Telepon:</span>{" "}
                  <a href="tel:081234567890" className="hover:underline text-black">
                    0812-3456-7890
                  </a>
                </p>
                <p>
                  ✉️ <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:corporate@jatipadigroups.web.id"
                    className="hover:underline text-black"
                  >
                    corporate@jatipadigroups.web.id
                  </a>
                </p>
                <p>
                  📸 <span className="font-semibold">Instagram:</span>{" "}
                  <a
                    href="https://instagram.com/jatipadigroups"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-black"
                  >
                    @jatipadigroups
                  </a>
                </p>
              </div>

              {/* COPYRIGHT */}
              <p className="text-black font-montserrat font-semibold mt-10 text-sm">
                &copy; {new Date().getFullYear()} PT Jati Padi. All Rights Reserved.
              </p>

              {/* CREDIT */}
              <p className="text-black text-sm mt-2">
                Website by{" "}
                <a
                  className="font-semibold hover:underline text-black"
                  target="_blank"
                  href="https://portfolioizmi.my.id"
                  rel="noopener noreferrer"
                >
                  Izmi
                </a>
              </p>
            </div>

            {/* RIGHT - MENU */}
            <div className="place-self-end self-center xxs:hidden lg:block">
              <ul className="space-y-3 text-lg font-montserrat font-semibold">
                <li>
                  <Link
                    to="/"
                    className="text-black hover:text-white transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-black hover:text-white transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-black hover:text-white transition"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-black hover:text-white transition"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-black hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
