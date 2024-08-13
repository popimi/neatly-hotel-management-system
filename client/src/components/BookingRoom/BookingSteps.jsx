import React from "react";

export const BookingSteps = ({ bookingStep, step, textStep }) => {
  //color for step
  const steps = {
    prev: [" bg-orange-200 text-orange-500", "text-black"],
    curr: ["bg-orange-500 text-white", "text-orange-500"],
    next: ["bg-slate-200 text-slate-400", "text-slate-400"],
  };
  return (
    <div>
      <div className="flex flex-row items-center gap-5">
        <div
          className={`flex justify-center items-center w-14 h-12 rounded-md text-center text-4xl font-bold ${
            step > bookingStep
              ? steps.next[0]
              : step == bookingStep
              ? steps.curr[0]
              : steps.prev[0]
          }`}
        >
          {step}
        </div>
        <p
          className={`font-bold text-[1.1rem] text-black ${
            step > bookingStep
              ? steps.next[1]
              : step == bookingStep
              ? steps.curr[1]
              : steps.prev[1]
          }`}
        >
          {textStep}
        </p>
      </div>
    </div>
  );
};
