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
            className="h-4 w-4 rounded border-gray-300 text-[#ED1A25] focus:ring-[#ED1A25]"
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
      </div>
    </div>
  );
};

export default Step3;
