import React, { useState } from "react";

const Procedures = ({ moveTo }) => {
  const [isChecked, setIsChecked] = useState(false);

  const [isModelOpen, setIsModelOpen] = useState(false);
  const toggleModel = () => {
    setIsModelOpen(!isModelOpen);
  };
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
    } else {
      console.log("Form data is invalid:", errors);
    }
  };

  return (
    <>
      <div className="px-6 py-4">
        <p className="text-gray-700 mb-2 text-center text-xs text-custom-10">
          Let's set up the procedures your clinic provides! We will add these
          one at a time so let's add the first procedure here
        </p>
        <form className="p-0 m-0 overflow-y-auto max-h-40">
          <div className="bg-white p-4 rounded-lg -mb-6">
            <div className="relative bg-inherit">
              <select
                className="w-72 h-8 justify-center items-center text-start rounded-sm border border-[#e0e0e0] bg-white py-1 px-2 text-xs font-light text-[#5e5e5e] outline-none focus:border-[#6A64F1] focus:shadow-md"
                name="category"
              >
                <option value="" className="text-[#D5CED2]">
                  Choose Medical Specialty
                </option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Gynecology">Gynecology</option>
                <option value="Orthopedics">Orthopedics</option>
              </select>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg -mb-4">
            <div className="relative bg-inherit">
              <select
                className="w-72 h-8 justify-center items-center text-start rounded-sm border border-[#e0e0e0] bg-white py-1 px-2 text-xs font-light text-[#5e5e5e] outline-none focus:border-[#6A64F1] focus:shadow-md"
                name="subCategory"
              >
                <option value="" className="text-[#D5CED2]">
                  Choose Medical Specialty
                </option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Gynecology">Gynecology</option>
                <option value="Orthopedics">Orthopedics</option>
              </select>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <textarea
                name="bio"
                id="bio"
                rows="3"
                maxLength="256"
                required
                placeholder="Brief Bio"
                className="w-full rounded-sm p-2 bg-gray-100 border border-gray-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
              ></textarea>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <div class="rounded-md border border-dashed border-gray-400 bg-gray-50 p-4 shadow-md w-36">
                <label
                  for="upload"
                  class="flex flex-col items-center gap-2 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10 fill-white stroke-gray-700"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span class="text-gray-600 text-xs font-sm">
                    Add img/Video
                  </span>
                </label>
                <input
                  id="upload"
                  type="file"
                  accept="png,jpg,mp4"
                  class="hidden"
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <div class="">
                <label class=" block text-xs font-bold text-[#07074D] sm:text-md">
                  Procedure Only:
                </label>
                <div class="-mx-3 flex flex-wrap">
                  <div class="bg-white p-4 rounded-lg -mb-8 w-full px-3 sm:w-1/2">
                    <div class="relative bg-inherit">
                      <input
                        type="text"
                        id="min"
                        name="min"
                        class="peer bg-transparent h-8 w-full rounded-sm text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        placeholder="Minimum Price USD"
                      />
                      <label
                        for="min"
                        class="absolute cursor-text left-0 text-xs text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                      >
                        Min Price in USD
                      </label>
                    </div>
                  </div>
                  <div class="bg-white p-4 rounded-lg -mb-8 w-full px-3 sm:w-1/2">
                    <div class="relative bg-inherit">
                      <input
                        type="text"
                        id="max"
                        name="max"
                        class="peer bg-transparent h-8 w-full rounded-sm text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        placeholder="Max Price USD"
                      />
                      <label
                        for="max"
                        class="absolute cursor-text left-0 text-xs text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                      >
                        Max Price in USD
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <div class="mb-5 ">
                <label class=" block text-xs font-bold text-[#07074D] sm:text-md">
                  All Inclusive Price in USD:
                </label>
                <div class="-mx-3 flex flex-wrap">
                  <div class="bg-white p-4 rounded-lg -mb-4 w-full px-3 sm:w-1/2">
                    <div class="relative bg-inherit">
                      <input
                        type="text"
                        id="min2"
                        name="min2"
                        class="peer bg-transparent h-8 w-full rounded-sm text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        placeholder="Minimum Price USD"
                      />
                      <label
                        for="min2"
                        class="absolute cursor-text left-0 text-xs text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                      >
                        Min Price in USD
                      </label>
                    </div>
                  </div>
                  <div class="bg-white p-4 rounded-lg -mb-4 w-full px-3 sm:w-1/2">
                    <div class="relative bg-inherit">
                      <input
                        type="text"
                        id="max2"
                        name="max2"
                        class="peer bg-transparent h-8 w-full rounded-sm text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        placeholder="Max Price USD"
                      />
                      <label
                        for="max2"
                        class="absolute cursor-text left-0 text-xs text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                      >
                        Max Price in USD
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <div class="flex">
                {/* <!-- First Question section --> */}
                <div class="flex items-center justify-end flex-grow">
                  <div class="ms-2 text-sm">
                    <p class="text-xs font-normal text-gray-900 dark:text-gray-900">
                      Do you want to include an instant booking fixed price for
                      this procedure?
                    </p>
                  </div>
                </div>

                {/* <!-- Second radio button section --> */}
                <div class="flex items-center justify-end flex-grow">
                  <div class="flex items-center h-5">
                    <input
                      id="yes"
                      type="radio"
                      name="radioCheck"
                      value="yes"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 0 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div class="ms-2 mr-1 text-sm">
                    <label
                      for="yes"
                      class="font-medium text-gray-900 dark:text-gray-900"
                    >
                      Yes
                    </label>
                  </div>
                </div>

                {/* <!-- Third radio button section --> */}
                <div class="flex items-center justify-end flex-grow">
                  <div class="flex items-center h-5">
                    <input
                      id="no"
                      type="radio"
                      name="radioCheck"
                      value="no"
                      class="w-4 h-4  bg-gray-100 border-gray-300  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div class="ms-2 text-sm">
                    <label
                      for="no"
                      class="font-medium text-gray-900 dark:text-gray-900"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <div class="flex">
                <div class="flex items-center justify-end flex-grow">
                  <div class="ms-2 text-sm">
                    <p class="text-xs font-normal text-gray-900 dark:text-gray-900">
                      Instant Booking Fixed Price for Procedure Only:
                    </p>
                  </div>
                </div>
                <div class="bg-white p-4 rounded-lg -mb-10 w-full px-3 sm:w-2/2">
                  <div class="relative bg-inherit">
                    <input
                      type="text"
                      id="min3"
                      name="min3"
                      class="peer bg-transparent h-8 w-full rounded-sm text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                      placeholder="Price in USD"
                    />
                    <label
                      for="min3"
                      class="absolute cursor-text left-0 text-xs text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                    >
                      Price in USD
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <div class="flex">
                <div class="flex items-center justify-end flex-grow">
                  <div class="ms-2 text-xs">
                    <p class="text-xs font-xs text-gray-900 dark:text-gray-900">
                      Instant Booking Fixed Price for All Inclusive Package:
                    </p>
                  </div>
                </div>
                <div class="bg-white p-4 rounded-lg -mb-8 w-full px-3 sm:w-2/2">
                  <div class="relative bg-inherit">
                    <input
                      type="text"
                      id="max3"
                      name="max3"
                      class="peer bg-transparent h-8 w-full rounded-sm text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                      placeholder="Price in USD"
                    />
                    <label
                      for="max3"
                      class="absolute cursor-text left-0 text-xs text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                    >
                      Price in USD
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white p-2 rounded-lg">
            <div class="relative bg-inherit"></div>
            <button className="py-2 px-4 mt-2 max-w-md flex justify-center items-center text-[#07A6A9] border border-[#07A6A9] w-full transition ease-in duration-200 text-center text-sm font-light rounded-sm">
              Save And Add+ Another Procedure
            </button>
          </div>
          <div class="bg-white p-2 rounded-lg ">
            <div class="relative bg-inherit"></div>
            <button
              onClick={toggleModel}
              className="py-2 px-4 max-w-md flex justify-center items-center text-[#07A6A9] border border-[#07A6A9] w-full transition ease-in duration-200 text-center text-sm font-light rounded-sm"
            >
              Save Progress And Add More Later
            </button>
            
            {/* modal */}
            {isModelOpen && (
              <>
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-400/50 bg-opacity-5 backdrop-filter backdrop-blur-sm">
                  <div className="bg-white border rounded-lg shadow relative max-w-lg w-full">
                    <div className="flex justify-end p-2 bg-[#07A6A9] text-white w-full rounded-t-lg">
                      <h1 className="text-lg font-custom-25 font-semibold">
                        Add Procedure
                      </h1>
                      <button
                        type="button"
                        className=" bg-transparent  text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={toggleModel}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <form className="overflow-y-auto max-h-72">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="relative bg-inherit">
                          <input
                            type="text"
                            id="category"
                            name="category"
                            className="peer bg-transparent h-10 w-full rounded-sm text-gray-800 placeholder-gray-400 ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                            placeholder=""
                          />
                          <label
                            htmlFor="category"
                            className="absolute left-2 -top-2 text-xs text-gray-500 bg-white px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                          >
                            Choose Category
                          </label>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="relative bg-inherit">
                          <input
                            type="text"
                            id="sub"
                            name="sub"
                            className="peer bg-transparent h-10 w-full rounded-sm text-gray-800 placeholder-gray-400 ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                            placeholder=""
                          />
                          <label
                            htmlFor="sub"
                            className="absolute left-2 -top-2 text-xs text-gray-500 bg-white px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                          >
                            Choose Sub Category
                          </label>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg">
                        <div className="relative bg-inherit">
                          <textarea
                            name="bio"
                            id="bio"
                            rows="4"
                            maxLength="256"
                            required
                            placeholder="Brief Bio"
                            className="w-full rounded-sm p-2 bg-gray-100 border border-gray-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                          ></textarea>
                          <div className="bg-white p-4 rounded-lg">
                            <div className="relative bg-inherit">
                              <div class="rounded-md border border-dashed border-gray-400 bg-gray-50 p-4 shadow-md w-36">
                                <label
                                  for="upload"
                                  class="flex flex-col items-center gap-2 cursor-pointer"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-10 w-10 fill-white stroke-gray-700"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                  </svg>
                                  <span class="text-gray-600 text-xs font-sm">
                                    Add img/Video
                                  </span>
                                </label>
                                <input
                                  id="upload"
                                  type="file"
                                  accept="png,jpg,mp4"
                                  class="hidden"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <div className="relative bg-inherit">
                              <div class="-mx-3 flex flex-wrap">
                                <div class="bg-white p-4 rounded-lg -mb-4 w-full px-3 sm:w-1/2">
                                  <div class="relative bg-inherit">
                                    <input
                                      type="text"
                                      id="min2"
                                      name="min2"
                                      class="peer bg-transparent h-8 w-full rounded-sm text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                      placeholder="Minimum Price USD"
                                    />
                                    <label
                                      for="min2"
                                      class="absolute cursor-text left-0 text-xs text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                                    >
                                      Min Price in USD
                                    </label>
                                  </div>
                                </div>
                                <div class="bg-white p-4 rounded-lg -mb-4 w-full px-3 sm:w-1/2">
                                  <div class="relative bg-inherit">
                                    <input
                                      type="text"
                                      id="max2"
                                      name="max2"
                                      class="peer bg-transparent h-8 w-full rounded-sm text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                      placeholder="Max Price USD"
                                    />
                                    <label
                                      for="max2"
                                      class="absolute cursor-text left-0 text-xs text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                                    >
                                      Max Price in USD
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <div className="relative bg-inherit">
                              <input
                                type="text"
                                id="inclusive"
                                name="inclusive"
                                className="peer bg-transparent h-10 w-full rounded-sm text-gray-800 placeholder-gray-400 ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                placeholder=""
                              />
                              <label
                                htmlFor="inclusive"
                                className="absolute left-2 -top-2 text-xs text-gray-500 bg-white px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                              >
                                All Inclusive Price
                              </label>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <div className="relative bg-inherit">
                              <div className="flex items-center">
                                <div className="w-10 h-10 flex items-center justify-center">
                                  <input
                                    id="myCheckbox"
                                    type="checkbox"
                                    className=" h-8 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    checked={isChecked}
                                    onChange={(e) =>
                                      setIsChecked(e.target.checked)
                                    }
                                  />
                                </div>
                                <input
                                  id="myInput"
                                  type="text"
                                  className={`h-12 border border-gray-400 flex-1 ${
                                    isChecked
                                      ? ""
                                      : "opacity-50 cursor-not-allowed"
                                  }`}
                                  disabled={!isChecked}
                                  placeholder={
                                    isChecked
                                      ? " Instant Booking "
                                      : " Instant Booking"
                                  }
                                />
                              </div>
                              <div className="flex mt-2 items-center">
                                <div className="w-10 h-10 flex items-center justify-center">
                                  <input
                                    id="Checkbox"
                                    type="checkbox"
                                    className="checkbox h-8 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    checked={isChecked}
                                    onChange={(e) =>
                                      setIsChecked(e.target.checked)
                                    }
                                  />
                                </div>
                                <input
                                  id="Input"
                                  type="text"
                                  className={` h-12 border border-gray-400 flex-1 ${
                                    isChecked
                                      ? ""
                                      : "opacity-50 cursor-not-allowed"
                                  }`}
                                  disabled={!isChecked}
                                  placeholder={
                                    isChecked
                                      ? " Instant Booking fix Price for All"
                                      : "  Instant Booking fix Price for All"
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={toggleModel}
                          className="py-2 px-4 max-w-lg w-full mt-2 flex justify-center items-center bg-[#07A6A9] text-white transition ease-in duration-200 text-center text-sm font-light rounded-sm"
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
      <div class="bg-white p-4 rounded-lg mt-2">
        <div class="relative bg-inherit"></div>
        <button
          onClick={() => moveTo(6)}
          className="py-2 px-4 max-w-md flex justify-center items-center bg-[#07A6A9] text-white w-full transition ease-in duration-200 text-center text-sm font-light rounded-sm"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default Procedures;
