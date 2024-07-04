import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import flag from "../../../Assests/flag.png";
import About from "./StepperFrom";
import Contact from "./Contact";
import Basic from "./Basic";
import Language from "./Language";
import Procedures from "./Procedures";
import Summary from "./Summary";
import MedicalStaff from "./MedicalStaff";
import Location from "./Location";
import { useNavigate } from "react-router-dom";
const Singup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate("/login");
    }
  };
  const handelmove = (newstep, data) => {
    setFormData({ ...formData, ...data });
    setStep(newstep);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <About onNext={handelmove} />;
      case 2:
        return <Contact onNext={handelmove} onPrevious={handlePrevious} />;
      case 3:
        return <Basic onNext={handelmove} onPrevious={handlePrevious} />;
      case 4:
        return <Language onNext={handelmove} onPrevious={handlePrevious} />;
      case 5:
        return <Procedures onPrevious={handlePrevious} moveTo={handelmove} />;
      case 6:
        return <Summary onPrevious={handlePrevious} moveTo={handelmove} />;
      case 7:
        return <MedicalStaff onPrevious={handlePrevious} moveTo={handelmove} />;
      case 8:
        return <Location onPrevious={handlePrevious} moveTo={handelmove} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div class="flex justify-center px-3 py-3">
        <div class="max-w-sm rounded overflow-hidden shadow-lg ">
          <div className="flex border-b border-gray-700 justify-between items-center my-3 relative w-full">
            <div className="absolute left-0">
              <button onClick={handlePrevious} className="btn ms-2 py-3">
                <BiArrowBack />
              </button>
            </div>
            <div className="flex-grow items-center text-center mx-10">
              <div className="w-xs max-w-xs bg-gray-200 h-2 rounded-md overflow-hidden mx-14">
                <div
                  className={`bg-[#07A6A9] h-full transition-all duration-300 ease-in-out ${
                    step === 1
                      ? "w-[12%]"
                      : step === 2
                      ? "w-[24%]"
                      : step === 3
                      ? "w-[36%]"
                      : step === 4
                      ? "w-[48%]"
                      : step === 5
                      ? "w-[60%]"
                      : step === 6
                      ? "w-[72%]"
                      : step === 7
                      ? "w-[84%]"
                      : step === 8
                      ? "w-[100%]"
                      : "w-[100%]"
                  }`}
                ></div>
              </div>
            </div>
            <div className="w-[40px] mr-1">
              <img src={flag} alt="Sunset in the mountains" />
            </div>
          </div>

          {renderStep()}
        </div>
      </div>
    </>
  );
};

export default Singup;
