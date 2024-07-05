import React, { useState } from "react";
import Procedure from "./Modals/Procedure";

const Procedures = ({ moveTo }) => {
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
    bio: "",
    minPrice: "",
    maxPrice: "",
    minAllInclusive: "",
    maxAllInclusive: "",
    instantBookingProcedure: "",
    instantBookingAllInclusive: "",
    radioCheck: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [isModelOpen, setIsModelOpen] = useState(false);
const   [isChecked, setIsChecked]=useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.category) tempErrors.category = "Category is required.";
    if (!formData.subCategory) tempErrors.subCategory = "Subcategory is required.";
    if (!formData.bio) tempErrors.bio = "Bio is required.";
    if (!formData.minPrice) tempErrors.minPrice = "Minimum price is required.";
    if (!formData.maxPrice) tempErrors.maxPrice = "Maximum price is required.";
    if (!formData.minAllInclusive) tempErrors.minAllInclusive = "Minimum all-inclusive price is required.";
    if (!formData.maxAllInclusive) tempErrors.maxAllInclusive = "Maximum all-inclusive price is required.";
    if (!formData.radioCheck) tempErrors.radioCheck = "Please select an option.";
    if (formData.radioCheck === "yes" && !formData.instantBookingProcedure) {
      tempErrors.instantBookingProcedure = "Instant booking fixed price is required.";
    }
    if (formData.radioCheck === "yes" && !formData.instantBookingAllInclusive) {
      tempErrors.instantBookingAllInclusive = "Instant booking all-inclusive fixed price is required.";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data is valid:", formData);
      // Submit form
      moveTo(6, formData)
    } else {
      console.log("Form data is invalid:", errors);
    }
  };

  const toggleModel = () => {
    setIsModelOpen(!isModelOpen);
  };
  function handleFormSubmit(e) {
    e.preventDefault();
    // Validation logic
    const newErrors = {};
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.sub) newErrors.sub = "Sub-category is required";
    if (!formData.bio) newErrors.bio = "Bio is required";
    if (!formData.min2) newErrors.min2 = "Minimum price is required";
    if (!formData.max2) newErrors.max2 = "Maximum price is required";
    if (!formData.inclusive) newErrors.inclusive = "All-inclusive price is required";
    if (isChecked && !formData.instantBooking) newErrors.instantBooking = "Instant booking is required";
    if (isChecked && !formData.instantBookingFixedPrice) newErrors.instantBookingFixedPrice = "Instant booking fixed price is required";
    if (!formData.upload) newErrors.upload = "File is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Submit form data
      console.log("Form submitted successfully:", formData);
      toggleModel();
    }
  }
  return (
    <>
      <div className="px-6 py-4">
        <p className="text-gray-700 mb-2 text-center text-xs text-custom-10">
          Let's set up the procedures your clinic provides! We will add these
          one at a time so let's add the first procedure here
        </p>
        <form onSubmit={handleSubmit} className="p-0 m-0 overflow-y-auto max-h-40">
          {/* Category and Subcategory selections */}
          <div className="bg-white p-4 rounded-lg -mb-6">
            <div className="relative bg-inherit">
              <select
                className="w-72 h-8 justify-center items-center text-start rounded-sm border border-[#e0e0e0] bg-white py-1 px-2 text-xs font-light text-[#5e5e5e] outline-none focus:border-[#6A64F1] focus:shadow-md"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="" className="text-[#D5CED2]">
                  Choose Medical Specialty
                </option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Gynecology">Gynecology</option>
              </select>
              {errors.category && <span className="text-red-500 text-xs">{errors.category}</span>}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg -mb-4">
            <div className="relative bg-inherit">
              <select
                className="w-72 h-8 justify-center items-center text-start rounded-sm border border-[#e0e0e0] bg-white py-1 px-2 text-xs font-light text-[#5e5e5e] outline-none focus:border-[#6A64F1] focus:shadow-md"
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
              >
                <option value="" className="text-[#D5CED2]">
                  Choose Subcategory
                </option>
                <option value="Subcategory1">Subcategory1</option>
                <option value="Subcategory2">Subcategory2</option>
              </select>
              {errors.subCategory && <span className="text-red-500 text-xs">{errors.subCategory}</span>}
            </div>
          </div>
          {/* Bio textarea */}
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <textarea
                name="bio"
                id="bio"
                rows="3"
                maxLength="256"
                required
                value={formData.bio}
                onChange={handleChange}
                placeholder="Brief Bio"
                className="w-full rounded-sm p-2 bg-gray-100 border border-gray-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
              ></textarea>
              {errors.bio && <span className="text-red-500 text-xs">{errors.bio}</span>}
            </div>
          </div>
          {/* File input */}
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <div className="rounded-md border border-dashed border-gray-400 bg-gray-50 p-4 shadow-md w-36">
                <label
                  htmlFor="upload"
                  className="flex flex-col items-center gap-2 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 fill-white stroke-gray-700"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-gray-600 text-xs font-sm">
                    Add img/Video
                  </span>
                </label>
                <input
                  id="upload"
                  type="file"
                  accept="image/png,image/jpeg,video/mp4"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
          {/* Price inputs */}
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
            <label
                  htmlFor="upload"
                  className="flex flex-col text-xs gap-2 cursor-pointer"
                >
                  Procedure Only:

                </label>
              <div className="-mx-3 flex flex-wrap">
            
                <div className="bg-white p-4 rounded-lg -mb-8 w-full px-3 sm:w-1/2">
              
                  <div className="relative bg-inherit">
                
                    <input
                      type="text"
                      id="minPrice"
                      name="minPrice"
                      value={formData.minPrice}
                      onChange={handleChange}
                      className="peer bg-transparent h-8 w-full placeholder:text-gray-600 placeholder:text-xs rounded-sm text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                      placeholder="Minimum Price USD"
                    />
                    {errors.minPrice && <span className="text-red-500 text-xs">{errors.minPrice}</span>}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg -mb-8 w-full px-3 sm:w-1/2">
                  <div className="relative bg-inherit">
                    <input
                      type="text"
                      id="maxPrice"
                      name="maxPrice"
                      value={formData.maxPrice}
                      onChange={handleChange}
                      className="peer bg-transparent h-8 w-full placeholder:text-gray-600 placeholder:text-xs rounded-sm text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                      placeholder="Maximum Price USD"
                    />
                    {errors.maxPrice && <span className="text-red-500 text-xs">{errors.maxPrice}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* All-inclusive price inputs */}
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
            <label
                  htmlFor="upload"
                  className="flex flex-col text-xs gap-2 cursor-pointer"
                >
               All Inclusive Price in USD:
                </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="bg-white p-4 rounded-lg -mb-4 w-full px-3 sm:w-1/2">
                  <div className="relative bg-inherit">
                    <input
                      type="text"
                      id="minAllInclusive"
                      name="minAllInclusive"
                      value={formData.minAllInclusive}
                      onChange={handleChange}
                      className="peer bg-transparent h-8 w-full rounded-sm placeholder:text-gray-600 placeholder:text-xs text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                      placeholder="Minimum Price USD"
                    />
                    {errors.minAllInclusive && <span className="text-red-500 text-xs">{errors.minAllInclusive}</span>}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg -mb-4 w-full px-3 sm:w-1/2">
                  <div className="relative bg-inherit">
                    <input
                      type="text"
                      id="maxAllInclusive"
                      name="maxAllInclusive"
                      value={formData.maxAllInclusive}
                      onChange={handleChange}
                      className="peer bg-transparent h-8 w-full placeholder:text-gray-600 placeholder:text-xs rounded-sm text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                      placeholder="Maximum Price USD"
                    />
                    {errors.maxAllInclusive && <span className="text-red-500 text-xs">{errors.maxAllInclusive}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Instant booking */}
          <div className=" bg-white p-4 rounded-lg">
            <div className="flex relative bg-inherit">
              <label htmlFor="radioCheck" className="text-xs">
              Do you want to include an instant booking fixed price for this procedure?
              </label>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="yes"
                    name="radioCheck"
                    value="yes"
                    onChange={handleChange}
                    className="peer h-4 w-4 text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  />
                  <label htmlFor="yes" className="text-xs">
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="no"
                    name="radioCheck"
                    value="no"
                    onChange={handleChange}
                    className="peer h-4 w-4 text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                  />
                  <label htmlFor="no" className="text-xs">
                    No
                  </label>
                </div>
              </div>
              {errors.radioCheck && <span className="text-red-500 text-xs">{errors.radioCheck}</span>}
            </div>
          </div>
          {/* Conditional fields */}
          {formData.radioCheck === "yes" ? (
  <>
    <div className=" bg-white p-4 rounded-lg -mb-6">
      <div className="flex relative bg-inherit">
      <label
                  htmlFor="instantBookingProcedure"
                  className="flex flex-col text-xs gap-2 cursor-pointer"
                >
Instant Booking Fixed Price for Procedure Only:

                </label>
        <input
          type="text"
          id="instantBookingProcedure"
          name="instantBookingProcedure"
          value={formData.instantBookingProcedure}
          onChange={handleChange}
          className="peer bg-transparent h-8 placeholder:text-xs placeholder:text-gray-400 rounded-sm text-gray-800  ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600 w-1/2"
          placeholder="Price in USD"
          />
        {errors.instantBookingProcedure && (
          <span className="text-red-500 text-xs">{errors.instantBookingProcedure}</span>
        )}
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg -mb-4">
      <div className="flex relative bg-inherit">
      <label
                  htmlFor="instantBookingAllInclusive"
                  className="flex flex-col  text-xs gap-2 cursor-pointer"
                >
Instant Booking Fixed Price for All Inclusive Package:
                </label>
        <input
          type="text"
          id="instantBookingAllInclusive"
          name="instantBookingAllInclusive"
          value={formData.instantBookingAllInclusive}
          onChange={handleChange}
          className="peer bg-transparent h-8 placeholder:text-xs placeholder:text-gray-400 rounded-sm text-gray-800  ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600 w-1/2"
          placeholder="Price in USD"
        />
        {errors.instantBookingAllInclusive && (
          <span className="text-red-500 text-xs">{errors.instantBookingAllInclusive}</span>
        )}
      </div>
    </div>
  </>
) : (
  <>
    <div className="flex bg-white p-4 rounded-lg -mb-6">
      <div className="flex relative bg-inherit">
      <label
                  htmlFor="instantBookingProcedure"
                  className="flex flex-col text-xs gap-2 cursor-pointer"
                >
Instant Booking Fixed Price for Procedure Only:
                </label>
        <input
          type="text"
          id="instantBookingProcedure"
          name="instantBookingProcedure"
          value={formData.instantBookingProcedure}
          onChange={handleChange}
          className="peer bg-transparent h-8 placeholder:text-xs placeholder:text-gray-400 rounded-sm text-gray-800  ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600 w-1/2"
          placeholder="Price in USD"
          disabled
        />
        {errors.instantBookingProcedure && (
          <span className="text-red-500 text-xs">{errors.instantBookingProcedure}</span>
        )}
      </div>
    </div>
    <div className="bg-white p-4 rounded-lg -mb-4">
      <div className="flex relative bg-inherit">
      <label
                  htmlFor="instantBookingAllInclusive"
                  className="flex flex-col text-xs gap-2 cursor-pointer"
                >
Instant Booking Fixed Price for All Inclusive Package:
                </label>
        <input
          type="text"
          id="instantBookingAllInclusive"
          name="instantBookingAllInclusive"
          value={formData.instantBookingAllInclusive}
          onChange={handleChange}
          className="peer bg-transparent h-8 rounded-sm text-gray-800 placeholder:text-xs placeholder:text-gray-400 ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600 w-1/2"
          placeholder="Price In USD"
          disabled
        />
        {errors.instantBookingAllInclusive && (
          <span className="text-red-500 text-xs">{errors.instantBookingAllInclusive}</span>
        )}
      </div>
    </div>
  </>
)}



          {/* Submit button */}
          <div className="text-center mt-4">
          <button
              // type="submit"
              onClick={toggleModel}
              className="py-2  mb-2 px-12 max-w-sm flex justify-center items-center text-[#07A6A9] border border-[#07A6A9] w-lg transition ease-in duration-200 text-center text-sm font-light rounded-sm"
            >
              Save And Add Another Procedure
            </button>
            {isModelOpen && (
  <Procedure toggleModel={toggleModel} handleFormSubmit={handleFormSubmit} handleFileChange={handleFileChange} handleChange={handleChange} errors={errors} setIsChecked={setIsChecked} isChecked={isChecked} formData={formData} />
)}
            <button
              type="submit"
              className="py-2 mt-2 px-12 max-w-sm flex justify-center items-center text-[#07A6A9] border border-[#07A6A9] w-lg transition ease-in duration-200 text-center text-sm font-light rounded-sm"
            >
              Save Progress & Add+ More Later
            </button>
          </div>
        </form>
        
        <button
              type="submit"
              onClick={handleSubmit}
              className="py-2 mt-3 px-4 max-w-md flex justify-center items-center bg-[#07A6A9] text-white w-full transition ease-in duration-200 text-center text-sm font-light rounded-sm"
            >
              Continue
            </button>
      </div>
    </>
  );
};

export default Procedures;
