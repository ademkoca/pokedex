import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUserStore } from '../store';

const Navbar = () => {
  const location = useLocation();
  const user = useUserStore((state) => state.user);
  const logoutUser = useUserStore((state) => state.logout);
  const handleSignout = () => {
    logoutUser();
    window.location.href = '/login';
  };
  return (
    <nav className="bg-gray-200">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {/* <Link to="/">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="/pokemon-logo.png"
                  alt="Your Company"
                />
              </Link> */}
              <a href="/">
                <img
                  className="h-8 w-auto block"
                  src="/pokemon-logo.png"
                  alt="Your Company"
                />
              </a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <!-- Profile dropdown --> */}
            <div className="relative ml-3 md:ml-0">
              <div className="flex">
                {/* <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> */}
                {/* <div class="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                  <span class="font-medium text-gray-600 dark:text-gray-300">
                    JL
                  </span>
                </div> */}
                {Object.keys(user).length > 0 ? (
                  <button
                    onClick={handleSignout}
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#ED1A25] py-2 px-4 text-sm font-medium text-white hover:bg-[#F3666D] focus:outline-none focus:ring-2 focus:ring-[#ED1A25] focus:ring-offset-2"
                    href="#"
                  >
                    ({user.firstName?.charAt(0) + user.lastName?.charAt(0)})
                    Sign out
                  </button>
                ) : (
                  location.pathname !== '/login' && (
                    <Link to="/login">
                      <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#ED1A25] py-2 px-4 text-sm font-medium text-white hover:bg-[#F3666D] focus:outline-none focus:ring-2 focus:ring-[#ED1A25] focus:ring-offset-2">
                        Sign in
                      </button>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    </nav>
  );
};

export default Navbar;
