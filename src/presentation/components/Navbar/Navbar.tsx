import { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../Icons/Icons";

type NavbarProps = {
  pages: Page[];
};

type Page = {
  label: string;
  path: string;
};

const Navbar = ({ pages }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 shadow-md z-50">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <Icons type="team" />
          <span className="self-center ml-2 text-xl font-semibold whitespace-nowrap dark:text-white">
            Tira Times
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Icons type={open ? "x" : "bars"} />
        </button>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul
            className={`md:static md:flex flex-col p-4 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:z-auto z-40 left-0 w-full top-12 absolute transition-all duration-500 ease-in ${
              open ? "opacity-100" : ""
            } md:opacity-100 opacity-0`}
            role="navigation-list"
          >
            {pages.map((page) => (
              <li key={page.label}>
                <Link
                  to={page.path}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
