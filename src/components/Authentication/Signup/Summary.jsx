import React, { useState } from 'react';

const Summary = ({ moveTo }) => {
  const [data, setData] = useState({
    textarea: "",
  });
  
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    
    if (data.textarea === "") {
      tempErrors.textarea = "Please fill the Summary";
    }
    
    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      moveTo(7, data);
    }
  };

  return (
    <>
      <div className="px-6 py-4 w-full">
        <div className="text-gray-700 mb-2 px-12 text-center text-lg font-bold text-custom-10">
          Summary of Your Medical <br />
          Practice:
        </div>
        <textarea
          name="textarea"
          id="textarea"
          rows="4"
          onChange={onChange}
          maxLength="256"
          required
          placeholder="Tell people all about your clinic and how you stand out with your competitors. What are your qualifications."
          className={`w-full rounded p-2 bg-black/5 border border-solid font-sm text-xs ${
            errors.textarea ? "border-red-500" : "border-gray-300"
          }`}
        ></textarea>
        {errors.textarea && (
          <p className="text-red-500 text-xs mt-1">{errors.textarea}</p>
        )}
      </div>
      <div className="bg-white p-4 rounded-lg mt-2 w-full">
        <div className="relative bg-inherit"></div>
        <button
          onClick={validate}
          className="py-2 px-4 flex justify-center items-center bg-[#07A6A9] text-white w-full transition ease-in duration-200 text-center text-sm font-light rounded-sm"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default Summary;
