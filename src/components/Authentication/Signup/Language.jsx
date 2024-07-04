import React, { useState } from "react";

const Language = ({ onNext }) => {
  const [checkedItems, setCheckedItems] = useState({
    arabic: false,
    azerbaijani: false,
    dutch: false,
    english: false,
    farsi: false,
    french: false,
    german: false,
    hindi: false,
    italian: false,
    pashto: false,
    polish: false,
    portuguese: false,
    russian: false,
    spanish: false,
    turkish: false,
    ukrainian: false,
    urdu: false
  });

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const validate = () => {
    const isSelected = Object.values(checkedItems).some(item => item === true);
    if (!isSelected) {
      alert("Please select at least one language.");
    } else {
      onNext(5, checkedItems);
    }
  };

  return (
    <>
      <div>
        <div className="px-6 py-4">
          <p className="text-gray-700 mb-2 text-center text-xs text-custom-10">
            Which Languages Does Your Clinic Support? (select all that apply)
          </p>
          <ul className="list-none p-0 m-0 overflow-y-auto max-h-48">
            {Object.keys(checkedItems).map((key) => (
              <li key={key} className="flex items-center p-2 border-b text-xs border-gray-300">
                <input
                  className="form-checkbox mr-2"
                  type="checkbox"
                  name={key}
                  checked={checkedItems[key]}
                  onChange={handleCheckboxChange}
                  aria-label={key}
                />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </li>
            ))}
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

export default Language;
