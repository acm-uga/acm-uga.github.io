import React from 'react'

interface Props {}

export const NavBar: React.FC<Props> = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-6 bg-white">
        <div>
          <h1 className="text-black">ACM</h1>
        </div>
        <div>
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
