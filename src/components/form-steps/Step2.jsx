import React from 'react';

const Step2 = ({ user, setUser }) => {
  return (
    <div className="-space-y-px rounded-md shadow-sm">
      <div>
        <label for="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required
          className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#ED1A25] focus:outline-none focus:ring-[#ED1A25] sm:text-sm"
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
          className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#ED1A25] focus:outline-none focus:ring-[#ED1A25] sm:text-sm"
          placeholder="Repeat Password"
          value={user.repeatPassword}
          onChange={(e) => setUser({ ...user, repeatPassword: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Step2;
