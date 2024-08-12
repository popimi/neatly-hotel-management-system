import { useNavigate } from "react-router-dom";


function BookingHistoryCancelAndRefundAlertBox({
  openCancel,
  setOpenCancel,
  item,
}) {

  const handleClose = () => {
    setOpenCancel(!openCancel);
  };

  const navigate = useNavigate();

  const handleRefund = () => {
    navigate(`/refund/${item.booking_id}`, { state: item });
  };

  return (
    <div className="w-[375px] h-[500px]  flex justify-center z-50  fixed bottom-[300px] left-[3px] ">
      <div className="w-[339px] h-[288px] rounded bg-white relative top-[246px] ">
        <div className="w-[339px] h-[56px] border-b py-[8px] px-[16px] flex flex-row  justify-between items-center">
          <p className="font-inter font-semibold text-[20px] leading-[30px] text-black">
            Cancel Booking
          </p>

          <button
            onClick={handleClose}
            className=" text-gray-600 font-semibold font-mono text-[20px] flex  "
          >
            x
          </button>
        </div>

        <div className="w-[339px] h-[232px] p-[16px] gap-[24px]">
          <p className="w-[307px] h-[48px] font-inter font-[400px] text-[16px] leading-[24px]">
            Are you sure you would like to cancel this booking?
          </p>
          <br></br>

          <div className="w-[307px] h-[128px] flex flex-col gap-[16px]">
            <button
              className="w-[307px] h-[48px] py-[16px] px-[32px] gap-[10px] text-white bg-orange-600 flex items-center justify-center"
              onClick={handleClose}
            >
              No, Don't Cancel
            </button>
            <button
              onClick={handleRefund}
              className="w-[307px] h-[64px] rounded  border-[1px] font-sans font-[600px] text-[16px] leading-[16px] border-orange-500 text-orange-500 py-[16px] px-[32px] gap-[10px] flex items-center justify-center"
            >
              Yes, I want to cancel and request refund
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingHistoryCancelAndRefundAlertBox;
