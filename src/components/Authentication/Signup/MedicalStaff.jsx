import React, { useState } from "react";
import Medical from "./Modals/Medical";

const MedicalStaff = ({ moveTo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    file: null,
    name: "",
    category: "",
    bio: "",
  });
  const [modalFormData, setModalFormData] = useState({
    name: "",
    category: "",
    bio: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    category: "",
    bio: "",
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleModalInputChange = (e) => {
    const { name, value } = e.target;
    setModalFormData({
      ...modalFormData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      if (!formData.file || !formData.name || !formData.category || !formData.bio) {
        setErrors({
          name: !formData.name ? "Please enter a name." : "",
          category: !formData.category ? "Please select a category." : "",
          bio: !formData.bio ? "Please enter a bio." : "",
        });
       
        return;
      }
    }else{
      moveTo(8, formData);
    }
    // Submit form logic
    console.log("Form submitted:", formData);
    // You can call a function to save data or move to the next step here
    moveTo(8, formData);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!modalFormData.name || !modalFormData.category || !modalFormData.bio) {
      setErrors({
        name: !modalFormData.name ? "Please enter a name." : "",
        category: !modalFormData.category ? "Please select a category." : "",
        bio: !modalFormData.bio ? "Please enter a bio." : "",
      });
      return;
    }
    // Submit modal form logic
    console.log("Modal form submitted:", modalFormData);
    // You can call a function to save data here
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="max-w-full w-full">
        <div className="px-6 py-4">
          <h1 className="font-bold text-lg justify-center text-center">
            Add Medical Staff
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="items-center text-xs">
              <input
                id="remember-me"
                type="checkbox"
                className="mt-0.5 mr-1"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="remember-me" className="whitespace-nowrap">
                Do you want to add medical staff to your business profile?
              </label>
            </div>
            <div className="bg-white p-4 rounded-lg -mb-10">
              <div className="relative bg-inherit">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="small_size"
                >
                  Small file input
                </label>
                <input
                  className="w-72 h-8 mb-5 text-xs text-gray-900 border border-dashed border-gray-300 rounded-sm cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:placeholder-gray-400"
                  id="small_size"
                  type="file"
                  onChange={handleFileChange}
                  disabled={!isChecked}
                />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg -mb-6">
              <div className="relative bg-inherit">
                <input
                  type="text"
                  id="medical"
                  name="name"
                  className={`peer bg-transparent h-8 w-72 rounded-sm text-gray-700 placeholder-transparent ring-1 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none focus:border-rose-600 ${errors.name ? "border-red-500" : ""}`}
                  placeholder="Medical Practitioner Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={!isChecked}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg -mb-6">
              <div className="relative bg-inherit">
                <select
                  className={`w-72 h-8 justify-center items-center text-start rounded-sm border border-[#e0e0e0] bg-white py-1 px-2 text-xs font-light text-[#5e5e5e] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.category ? "border-red-500" : ""}`}
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  disabled={!isChecked}
                >
                  <option value="">Choose Medical Specialty</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Gynecology">Gynecology</option>
                </select>
                {errors.category && <p className="text-xs text-red-500 mt-1">{errors.category}</p>}
              </div>
            </div>
            <div className="bg-white p-4 mb-2 rounded-lg ">
              <div className="relative bg-inherit">
                <textarea
                  name="bio"
                  id="bio"
                  rows="4"
                  maxLength="256"
                  value={formData.bio}
                  onChange={handleInputChange}
                  disabled={!isChecked}
                  placeholder="Brief Bio"
                  className={`w-full rounded-sm p-2 bg-black/5 border border-solid border-black/10 font-medium text-xs ${errors.bio ? "border-red-500" : ""}`}
                ></textarea>
                {errors.bio && <p className="text-xs text-red-500 mt-1">{errors.bio}</p>}
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="py-2 mb-2 px-4 max-w-md flex justify-center items-center bg-[#07A6A9] text-white w-full transition ease-in duration-200 text-center text-sm font-light rounded-sm"
            >
              Continue
            </button>
            <button
              onClick={toggleModal}
              className="py-2 px-4 max-w-md flex justify-center items-center text-[#07A6A9] border border-[#07A6A9] w-full transition ease-in duration-200 text-center text-sm font-light rounded-sm"
            >
              Save and Add Another
            </button>
            <button
              onClick={() => moveTo(8)}
              className="py-2 px-4 max-w-md flex justify-center items-center text-[#07A6A9] w-full transition ease-in duration-200 text-center text-sm font-light rounded-sm"
            >
              Skip
            </button>
          </form>
          {isModalOpen && (
           <Medical toggleModal={toggleModal} handleModalSubmit={handleModalSubmit} handleModalInputChange={handleModalInputChange} modalFormData={modalFormData} errors={errors}/>
          )}
        </div>
      </div>
    </>
  );
};

export default MedicalStaff;
