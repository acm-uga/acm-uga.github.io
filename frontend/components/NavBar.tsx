import React from 'react'

interface Props {}

export const NavBar: React.FC<Props> = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-6 bg-white">
        <div>
          <h1 className="text-black">ACM</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex align-middle">
            <li className="ml-12">
              <a className="text-black visited:text-black" href="/">
                HOME
              </a>
            </li>
            <li className="ml-12">
              <a className="text-black visited:text-black" href="/">
                CALENDAR
              </a>
            </li>
            <li className="ml-12">
              <a className="text-black visited:text-black" href="/">
                FEATURED EVENTS
              </a>
            </li>
            <li className="ml-12">
              <a className="text-black visited:text-black" href="/">
                RESOURCES
              </a>
            </li>
            <li className="ml-12">
              <a className="text-black visited:text-black" href="/">
                ABOUT US
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button">
            <svg
              className="w-6 h-6 text-black"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="hidden mobile-menu">
          <ul className="">
            <li className="active">
              <a
                href="index.html"
                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            position: fixed;
            width: 100%;
            height: 4em;
          }
        `}
      </style>
    </div>
  )
}
