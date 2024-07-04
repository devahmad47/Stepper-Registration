import React, { useState } from "react";

const Contact = ({ onNext }) => {
  const [data, setData] = useState({
    password: "",
    cnfrm: ""
  });
  
  const [errors, setErrors] = useState({
    password: "",
    cnfrm: ""
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let isValid = true;
    let newErrors = { password: "", cnfrm: "" };

    if (data.password === "") {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (data.cnfrm === "") {
      newErrors.cnfrm = "Please confirm your password";
      isValid = false;
    } else if (data.password !== data.cnfrm) {
      newErrors.cnfrm = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    if (isValid) {
      onNext(3, data);
    }
  };

  return (
    <>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 justify-center text-center">Password</div>
        <p className="text-gray-700 text-center text-xs text-custom-10">
          Enter your password for business profile
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="bg-white p-4 rounded-lg -mb-4">
            <div className="relative bg-inherit">
              <input
                type="password"
                id="password"
                required
                onChange={onChange}
                name="password"
                className="peer bg-transparent h-8 w-full rounded-sm text-gray-700 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute cursor-text left-0 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
              >
                Password
              </label>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg -mb-4">
            <div className="relative bg-inherit">
              <input
                type="password"
                id="cnfrm"
                required
                name="cnfrm"
                onChange={onChange}
                className="peer bg-transparent h-8 w-full rounded-sm text-gray-700 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Re-enter Password"
              />
              <label
                htmlFor="cnfrm"
                className="absolute cursor-text left-0 text-xs text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
              >
                Re-enter Password
              </label>
              {errors.cnfrm && <p className="text-red-500 text-xs mt-1">{errors.cnfrm}</p>}
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

export default Contact;
