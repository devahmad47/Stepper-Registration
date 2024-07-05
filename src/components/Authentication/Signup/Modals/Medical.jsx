import React from 'react'

const Medical = ({toggleModal,handleModalSubmit,handleModalInputChange,modalFormData,errors}) => {
  return (
    <>
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-400/50 bg-opacity-5 backdrop-filter backdrop-blur-sm">
                <div className="bg-white border rounded-lg shadow relative max-w-lg w-full">
                  <div className="flex justify-end p-2 bg-[#07A6A9] text-white w-full rounded-t-lg">
                    <h1 className="text-lg font-semibold">Add Medical Staff</h1>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                      onClick={toggleModal}
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
                  <form onSubmit={handleModalSubmit}>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="relative bg-inherit">
                        <input
                          type="text"
                          id="modal-medical"
                          name="name"
                          required
                          className={`peer bg-transparent h-8 w-full rounded-sm text-gray-800 placeholder-gray-400 ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600 ${errors.name ? "border-red-500" : ""}`}
                          placeholder="Medical Practitioner"
                          value={modalFormData.name}
                          onChange={handleModalInputChange}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="relative bg-inherit">
                        <select
                          className={`w-full h-8 justify-center items-center text-start rounded-sm border border-[#e0e0e0] bg-white py-1 px-2 text-xs font-light text-[#5e5e5e] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.category ? "border-red-500" : ""}`}
                          name="category"
                          value={modalFormData.category}
                          onChange={handleModalInputChange}
                        >
                          <option value="">Choose Medical Specialty</option>
                          <option value="Orthopedics">Orthopedics</option>
                          <option value="Gynecology">Gynecology</option>
                        </select>
                        {errors.category && <p className="text-xs text-red-500 mt-1">{errors.category}</p>}
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="relative bg-inherit">
                        <textarea
                          name="bio"
                          id="modal-bio"
                          rows="4"
                          maxLength="256"
                          required
                          value={modalFormData.bio}
                          onChange={handleModalInputChange}
                          placeholder="Brief Bio"
                          className={`w-full rounded-sm p-2 bg-gray-100 border border-gray-300 focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600 ${errors.bio ? "border-red-500" : ""}`}
                        ></textarea>
                        {errors.bio && <p className="text-xs text-red-500 mt-1">{errors.bio}</p>}
                      </div>
                      <button
                        type="submit"
                        className="py-2 px-4 max-w-lg w-full mt-2 flex justify-center items-center bg-[#07A6A9] text-white transition ease-in duration-200 text-center text-sm font-light rounded-sm"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
    </>
  )
}

export default Medical
