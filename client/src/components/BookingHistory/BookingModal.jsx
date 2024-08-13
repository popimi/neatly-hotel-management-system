import React from "react";

const BookingModal = ({ bookingDetail }) => {
  console.log(bookingDetail);
  return (
    <dialog id="my_modal_3" className="modal rounded-sm">
      <div className="modal-box flex gap-2 flex-col h-[50%] overflow-y-scroll">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3>{bookingDetail.type}</h3>
        <img src={bookingDetail.main_image} alt="" />
        <h3 className="font-bold text-lg">{bookingDetail.bed_type}</h3>
        <p className="body-2">
          {bookingDetail.guests} Person | {bookingDetail.bed_type} |{" "}
          {bookingDetail.size} sqm
        </p>
        <p className="body-1">Room Amanities</p>
        {bookingDetail?.amanity &&
          bookingDetail?.amanity.map((value, index) => {
            return (
              <li>
                <ul>{value}</ul>
              </li>
            );
          })}
      </div>
    </dialog>
  );
};

export default BookingModal;
