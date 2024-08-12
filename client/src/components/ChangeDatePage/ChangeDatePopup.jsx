import React, { useState } from "react";

function ChangeDatePopup({ confirmChangeDate }) {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="w-[375px] h-[1000px]  flex justify-center  z-50  fixed bottom-[5px] left-[3px] bg-[rgba(0,0,0,0.6)]  min-[376px]:w-full xl:w-[631px] xl:h-[144p] xl:left-[500px] xl:bg-transparent">
      <div className="w-[339px] h-[265px] rounded bg-white relative top-[500px] xl:w-[631px] xl:h-[200px] ">
        <div className="w-[339px] h-[56px] border-b py-[8px] px-[16px] flex flex-row  justify-between items-center  xl:w-[631px] xl:h-[56px]">
          <p className="font-inter font-[600px] text-[20px] leading-[30px] text-black">
            Change Date
          </p>
          <button
            className=" text-gray-600 font-semibold font-mono text-[20px] flex  "
            onClick={handleClose}
          >
            x
          </button>
        </div>

        <div className="w-[339px] h-[264px] p-[16px] gap-[24px]  xl:w-[631px] xl:h-[144px] xl:p-[24px] xl:gap-[24px]">
          <p className="w-[307px] h-[96px] font-inter font-[400px] text-[16px] leading-[24px] xl:w-[583px] xl:h-[24px] xl:gap-[11px]">
            Are you sure want to change your check-in and check-out date?
          </p>

          <div className="w-[307px] h-[112px] flex flex-col gap-[16px] relative bottom-[30px] xl:w-[580px] xl:h-[110px] xl:gap-[16px] xl:flex xl:flex-row-reverse  xl:items-end">
            <button
              onClick={() => {
                confirmChangeDate();
                handleClose();
              }}
              className="w-[307px] h-[48px] py-[16px] px-[32px] gap-[10px] text-white bg-orange-600 flex items-center justify-center"
            >
              Yes, I want to change
            </button>

            <button
              className="w-[307px] h-[48px] rounded  border-[1px] font-sans font-[600px] text-[16px] leading-[16px] border-orange-500 text-orange-500 py-[16px] px-[32px] gap-[10px] flex items-center justify-center"
              onClick={handleClose}
            >
              No, I don't
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeDatePopup;
