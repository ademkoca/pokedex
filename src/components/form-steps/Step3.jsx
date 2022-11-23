import React, { useState } from 'react';

const Step3 = ({ user, setUser }) => {
  // const [checked, setChecked] = useState(false);
  const toogleCheckBox = (checkbox) => {
    if (!checkbox) checkbox = true;
    else checkbox = false;
    return checkbox;
  };
  return (
    <div className="-space-y-px rounded-md shadow-sm">
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <input
            id="accept-terms"
            name="accept-terms"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-[#ED1A25] focus:ring-[#F3666D]"
            checked={user.termsCheckBox}
            onChange={(e) =>
              setUser({
                ...user,
                termsCheckBox: toogleCheckBox(user.termsCheckBox),
              })
            }
          />
          <label
            for="accept-terms"
            className="ml-2 block text-sm text-gray-900"
          >
            Accept terms of service
          </label>
        </div>

        {/* <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div> */}
      </div>
      {/* <div>
        <label for="first-name" className="sr-only">
          First name
        </label>
        <input
          id="first-name"
          name="firstName"
          type="text"
          autocomplete="firstName"
          required
          className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#ED1A25] focus:outline-none focus:ring-[#ED1A25] sm:text-sm"
          placeholder="First name"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
      </div> */}
      {/* <div>
        <label for="last-name" className="sr-only">
          Last name
        </label>
        <input
          id="last-name"
          name="lastName"
          type="text"
          autocomplete="lastName"
          required
          className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#ED1A25] focus:outline-none focus:ring-[#ED1A25] sm:text-sm"
          placeholder="Last name"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
      </div>
      <div>
        <label for="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required
          className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#ED1A25] focus:outline-none focus:ring-[#ED1A25] sm:text-sm"
          placeholder="Email address"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div> */}
      {/* <div>
        <label for="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required
          className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div>
        <label for="repeat-password" className="sr-only">
          Password
        </label>
        <input
          id="repeat-password"
          name="repeat-password"
          type="password"
          autocomplete="repeat-password"
          required
          className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Repeat Password"
          value={user.repeatPassword}
          onChange={(e) => setUser({ ...user, repeatPassword: e.target.value })}
        />
      </div> */}
    </div>
  );
};

export default Step3;
