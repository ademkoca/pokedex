import React from 'react';

const Step1 = ({ user, setUser }) => {
  return (
    <div className="-space-y-px rounded-md shadow-sm">
      <div>
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
      </div>
      <div>
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
      </div>
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
              />
            </div> */}
    </div>
  );
};

export default Step1;
