import React, { useState } from 'react';
export const ProgressBar = ({ step }) => {
  const steps = [1, 2, 3, 4, 5];

  return (
      <div style={{ height: "5rem" }} className="progress z-50 relative w-full max-w-[82rem] bg-transparent ml-3 flex justify-between">
      {steps.map((s, index) => (
        <div key={s} className={`relative z-50 ${index < steps.length - 1 ? 'after:content-[' + (s === step ? '#000' : 'gray-300') + '] after:absolute after:h-[2px] after:w-full after:bottom-1/2 after:left-1/2 after:transform after:-translate-y-1/2 after:-translate-x-1/2' : ''}`}>
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              s === step ? 'bg-[#000] text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            <span className="text-3xl cursor-pointer">{s}</span>
          </div>
        </div>
      ))}
      <div style={{pointerEvents: 'none'}} className="absolute z-0 top-[2.4rem] border-[2px] border-black w-full"></div>
    </div>
  );
};
const ForgotPassword = () => {
  const [step, setStep] = useState(1);

  const handleButtonClick = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  // Calculate the percentage based on the current step
  const progressPercentage = ((step - 1) / 4) * 100;

  return (
    <div>
      {/* Your form content */}
      <button onClick={handleButtonClick}>Continue</button>
      <ProgressBar step={step} />
    </div>
  );
};

export default ForgotPassword;
