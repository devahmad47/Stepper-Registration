import React, { useState } from "react";

const About = ({ onNext }) => {
  const [data, setData] = useState({
    businessname: "",
    username: "",
    email: ""
  });

  const [errors, setErrors] = useState({
    businessname: "",
    username: "",
    email: ""
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let isValid = true;
    let newErrors = { businessname: "", username: "", email: "" };

    if (data.businessname === "") {
      newErrors.businessname = "Business name is required";
      isValid = false;
    }

    if (data.username === "") {
      newErrors.username = "Your name is required";
      isValid = false;
    }

    if (data.email === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    setErrors(newErrors);
    if (isValid) {
      onNext(2, data);
    }
  };

  return (
    <>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 justify-center text-center">
          About You
        </div>
        <p className="text-gray-700 text-center text-xs text-custom-10">
          Tell us more about yourself and your business
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="bg-white p-4 rounded-lg -mb-4">
            <div className="relative bg-inherit">
              <input
                type="text"
                required
                value={data.businessname}
                id="businessname"
                name="businessname"
                onChange={onChange}
                className="peer bg-transparent h-8 w-full rounded-sm text-gray-700 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Business Name"
              />
              <label
                htmlFor="businessname"
                className="absolute cursor-text left-0 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
              >
                Business Name
              </label>
              {errors.businessname && <p className="text-red-500 text-xs mt-1">{errors.businessname}</p>}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg -mb-4">
            <div className="relative bg-inherit">
              <input
                type="text"
                required
                id="username"
                name="username"
                value={data.username}
                onChange={onChange}
                className="peer bg-transparent h-8 w-72 rounded-sm text-gray-700 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Your Name"
              />
              <label
                htmlFor="username"
                className="absolute cursor-text left-0 text-xs text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
              >
                Your Name
              </label>
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg -mb-1">
            <div className="relative bg-inherit">
              <input
                type="email"
                id="email"
                required
                value={data.email}
                name="email"
                onChange={onChange}
                className="peer bg-transparent h-8 w-72 rounded-sm text-gray-700 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Business Email"
              />
              <label
                htmlFor="email"
                className="absolute cursor-text left-0 text-xs text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
              >
                Business Email Address
              </label>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg mt-2">
            <div className="relative bg-inherit"></div>
            <button
              onClick={validate}
              className="py-2 px-4 max-w-md flex justify-center items-center bg-[#07A6A9] text-white w-full transition ease-in duration-200 text-center text-sm font-light rounded-sm"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
