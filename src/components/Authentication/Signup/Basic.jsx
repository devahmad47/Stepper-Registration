import React, { useState } from "react";

const Basic = ({ onNext }) => {
  const [checkedItems, setCheckedItems] = useState({
    hotel43: false,
    hotel3: false,
    tours: false,
    transport: false,
    visa: false,
    support: false,
    insurance: false
  });

  const [error, setError] = useState(false);

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const validate = () => {
    const isSelected = Object.values(checkedItems).some(item => item === true);
    if (!isSelected) {
      alert("Please select at least one service.");
      setError(true);
    } else {
      onNext(4, checkedItems);
    }
  };

  return (
    <>
      <div>
        <div className="px-6 py-4">
          <p className="text-gray-700 mb-2 text-center text-xs text-custom-10">
            Which one of these extra services does your business provide your patients?
          </p>
          <ul className="list-none p-0 m-0 overflow-y-auto max-h-48">
            <li className="flex items-center p-2 border-b text-xs border-gray-300">
              <input
                className="form-checkbox mr-2"
                type="checkbox"
                name="hotel43"
                checked={checkedItems.hotel43}
                onChange={handleCheckboxChange}
                aria-label="..."
              />
              4&3 star Hotel Accommodation
            </li>
            <li className="flex items-center p-2 border-b text-xs border-gray-300">
              <input
                className="form-checkbox mr-2"
                type="checkbox"
                name="hotel3"
                checked={checkedItems.hotel3}
                onChange={handleCheckboxChange}
                aria-label="..."
              />
              3 star Hotel Accommodation
            </li>
            <li className="flex items-center p-2 border-b text-xs border-gray-300">
              <input
                className="form-checkbox mr-2"
                type="checkbox"
                name="tours"
                checked={checkedItems.tours}
                onChange={handleCheckboxChange}
                aria-label="..."
              />
              Sightseeing Tours
            </li>
            <li className="flex items-center p-2 border-b text-xs border-gray-300">
              <input
                className="form-checkbox mr-2"
                type="checkbox"
                name="transport"
                checked={checkedItems.transport}
                onChange={handleCheckboxChange}
                aria-label="..."
              />
              Transportation to and from Airport/Clinic/Hotel
            </li>
            <li className="flex items-center p-2 border-b text-xs border-gray-300">
              <input
                className="form-checkbox mr-2"
                type="checkbox"
                name="visa"
                checked={checkedItems.visa}
                onChange={handleCheckboxChange}
                aria-label="..."
              />
              Visa Support
            </li>
            <li className="flex items-center p-2 border-b text-xs border-gray-300">
              <input
                className="form-checkbox mr-2"
                type="checkbox"
                name="support"
                checked={checkedItems.support}
                onChange={handleCheckboxChange}
                aria-label="..."
              />
              Sightseeing Support Booking
            </li>
            <li className="flex items-center p-2 border-b text-xs border-gray-300">
              <input
                className="form-checkbox mr-2"
                type="checkbox"
                name="insurance"
                checked={checkedItems.insurance}
                onChange={handleCheckboxChange}
                aria-label="..."
              />
              Medical Complication Insurance/Travel Insurance
            </li>
          </ul>
          <button
            onClick={validate}
            className="py-2 px-4 mt-5 max-w-md flex justify-center items-center bg-[#07A6A9] text-white w-full transition ease-in duration-200 text-center text-sm font-light rounded-sm"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Basic;
