import React from 'react';
import Logo from '../../assets/img/SpinBazar.svg';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <a href="https://flowbite.com/" className="flex items-center">
          <img src={Logo} className="h-12 pr-3" alt="Spinbazar Logo" />

          </a>
          <div className="items-center hidden md:flex md:space-x-8 rtl:space-x-reverse">
            <ul className="flex space-x-8 md:flex-row font-medium text-gray-900 dark:text-white">
              <li>
                <a href="#" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Kaszinó</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sportfogadás</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ml-auto flex space-x-3 rtl:space-x-reverse">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Regisztráció
          </button>
          <button type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Bejelentkezés
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
