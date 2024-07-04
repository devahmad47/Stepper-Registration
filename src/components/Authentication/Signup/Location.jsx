import React, { useState } from "react";
import { Link } from "react-router-dom";

const Location = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const validate = (event) => {
    if (!email) {
      event.preventDefault();
      setError("Please enter an email address.");
    }
  };

  return (
    <>
      <div className="px-3 py-4">
        <div
          className="w-full bg-gray-300 overflow-hidden flex items-center justify-center relative"
          style={{ width: "350px", height: "300px" }}
        >
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
          <div className="absolute mt-16 mr-6">
            <input
              className="relative z-50 shadow rounded w-full py-2 px-4 m-4 bg-gray-700/50 text-white leading-tight focus:outline-none placeholder:text-gray-300 focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={handleChange}
            />
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg mt-2">
        <div className="relative bg-inherit"></div>
        <Link
          to="/Login"
          onClick={validate}
          className="py-2 px-4 max-w-md flex justify-center items-center bg-[#07A6A9] text-white w-full transition ease-in duration-200 text-center text-sm font-light rounded-sm"
        >
          Continue
        </Link>
      </div>
    </>
  );
};

export default Location;
