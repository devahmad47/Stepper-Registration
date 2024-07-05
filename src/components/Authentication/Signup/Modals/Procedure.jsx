import React from 'react'

const Procedure = ({handleFormSubmit,handleFileChange,handleChange,errors,setIsChecked,formData,isChecked,toggleModel}) => {
  return (
    <>
         <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-400/50 bg-opacity-5 backdrop-filter backdrop-blur-sm">
      <div className="bg-white border rounded-lg shadow relative max-w-lg w-full">
        <div className="flex justify-between items-center p-2 bg-[#07A6A9] text-white w-full rounded-t-lg">
          <h1 className="text-lg font-custom-25 font-semibold">
            Add Procedure
          </h1>
          <button
            type="button"
            className="bg-transparent text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center"
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
        <form className="overflow-y-auto max-h-72" onSubmit={handleFormSubmit}>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="peer bg-transparent h-10 w-full rounded-sm text-gray-800 placeholder-gray-400 ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder=""
              />
              <label
                htmlFor="category"
                className="absolute left-2 -top-2 text-xs text-gray-500 bg-white px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
              >
                Choose Category
              </label>
              {errors.category && <span className="text-red-500 text-xs">{errors.category}</span>}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <input
                type="text"
                id="sub"
                name="sub"
                value={formData.sub}
                onChange={handleChange}
                className="peer bg-transparent h-10 w-full rounded-sm text-gray-800 placeholder-gray-400 ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder=""
              />
              <label
                htmlFor="sub"
                className="absolute left-2 -top-2 text-xs text-gray-500 bg-white px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
              >
                Choose Sub Category
              </label>
              {errors.sub && <span className="text-red-500 text-xs">{errors.sub}</span>}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <textarea
                name="bio"
                id="bio"
                rows="4"
                maxLength="256"
                value={formData.bio}
                onChange={handleChange}
                required
                placeholder="Brief Bio"
                className="w-full rounded-sm p-2 bg-gray-100 border border-gray-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
              ></textarea>
              {errors.bio && <span className="text-red-500 text-xs">{errors.bio}</span>}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <div className="rounded-md border border-dashed border-gray-400 bg-gray-50 p-4 shadow-md w-36">
                <label htmlFor="upload" className="flex flex-col items-center gap-2 cursor-pointer">
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
                  <span className="text-gray-600 text-xs font-sm">Add img/Video</span>
                </label>
                <input
                  id="upload"
                  type="file"
                  accept="image/png, image/jpg, video/mp4"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              {errors.upload && <span className="text-red-500 text-xs">{errors.upload}</span>}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <div className="-mx-3 flex flex-wrap">
                <div className="bg-white p-4 rounded-lg -mb-4 w-full px-3 sm:w-1/2">
                  <div className="relative bg-inherit">
                    <input
                      type="text"
                      id="min2"
                      name="min2"
                      value={formData.min2}
                      onChange={handleChange}
                      className="peer bg-transparent h-8 w-full rounded-sm text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                      placeholder="Minimum Price USD"
                    />
                    <label
                      htmlFor="min2"
                      className="absolute cursor-text left-0 text-xs text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                    >
                      Min Price in USD
                    </label>
                    {errors.min2 && <span className="text-red-500 text-xs">{errors.min2}</span>}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg -mb-4 w-full px-3 sm:w-1/2">
                  <div className="relative bg-inherit">
                    <input
                      type="text"
                      id="max2"
                      name="max2"
                      value={formData.max2}
                      onChange={handleChange}
                      className="peer bg-transparent h-8 w-full rounded-sm text-gray-800 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                      placeholder="Max Price USD"
                    />
                    <label
                      htmlFor="max2"
                      className="absolute cursor-text left-0 text-xs text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
                    >
                      Max Price in USD
                    </label>
                    {errors.max2 && <span className="text-red-500 text-xs">{errors.max2}</span>}
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
                value={formData.inclusive}
                onChange={handleChange}
                className="peer bg-transparent h-10 w-full rounded-sm text-gray-800 placeholder-gray-400 ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder=""
              />
              <label
                htmlFor="inclusive"
                className="absolute left-2 -top-2 text-xs text-gray-500 bg-white px-1 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-xs transition-all"
              >
                All Inclusive Price
              </label>
              {errors.inclusive && <span className="text-red-500 text-xs">{errors.inclusive}</span>}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="relative bg-inherit">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center">
                  <input
                    id="myCheckbox"
                    type="checkbox"
                    className="h-8 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                </div>
                <input
                  id="myInput"
                  type="text"
                  value={formData.instantBooking}
                  onChange={handleChange}
                  className={`h-12 border border-gray-400 flex-1 ${isChecked ? "" : "opacity-50 cursor-not-allowed"}`}
                  disabled={!isChecked}
                  placeholder={isChecked ? "Instant Booking" : "Instant Booking"}
                />
                {errors.instantBooking && <span className="text-red-500 text-xs">{errors.instantBooking}</span>}
              </div>
              <div className="flex mt-2 items-center">
                <div className="w-10 h-10 flex items-center justify-center">
                  <input
                    id="Checkbox"
                    type="checkbox"
                    className="checkbox h-8 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                </div>
                <input
                  id="Input"
                  type="text"
                  value={formData.instantBookingFixedPrice}
                  onChange={handleChange}
                  className={`h-12 border border-gray-400 flex-1 ${isChecked ? "" : "opacity-50 cursor-not-allowed"}`}
                  disabled={!isChecked}
                  placeholder={isChecked ? "Instant Booking Fixed Price for All" : "Instant Booking Fixed Price for All"}
                />
                {errors.instantBookingFixedPrice && <span className="text-red-500 text-xs">{errors.instantBookingFixedPrice}</span>}
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={toggleModel}
            className="py-2 px-4 max-w-lg w-full mt-2 flex justify-center items-center bg-[#07A6A9] text-white transition ease-in duration-200 text-center text-sm font-light rounded-sm"
          >
            Add
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Procedure