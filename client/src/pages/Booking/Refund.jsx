import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";
import { useState } from "react";

function Refund() {
  const { apiUrl } = useAuth();

  
  const navigate = useNavigate();
  const location = useLocation();
  const bookingDetail = [location.state];
  const { id } = useParams();
  const paymentIntentId = bookingDetail[0].payment_intent_id;
  const [isOpen, setIsOpen] = useState(false);

  let result;

  const formatNumber = (number) => {
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleRefundClick = async (id) => {
    setIsOpen(true);
    try {
      result = await axios.post(`${apiUrl}/stripe/refund/${id}`, {
        paymentIntentId,
      });
      if (result) {
        setIsOpen(false);
      }
      navigate(`/refund/${id}/requestrefund`,{state: bookingDetail});
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCancel = () => {
    navigate('/bookinghistory')
  }

  return (
    <main className="bg-gray-100">
      <section className="pt-5 w-100dvw h-[calc(100dvh-48px)] xl:h-[calc(100dvh-100px)] flex flex-col items-center">
        <h3 className="text-green-700 p-5 self-center">Request a Refund</h3>
        <section className="w-full h-fit bg-gray-100">
          {bookingDetail.map((item, index) => {
            return (
              <div key={index} className="flex flex-col w-full h-fit ">
                <figure className="w-full h-[250px]">
                  <img
                    src={item.main_image}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <p className="p-5 pb-0 font-inter font-semibold text-[2rem]">
                  {item.type}
                </p>
                <p className="p-5 pt-0">
                  Booking date: {item.formatted_date_booking}
                </p>
                <p className="px-5">
                  {item.formatted_date_in} - {item.formatted_date_out}
                </p>
                <p className="px-5">{item.guests} Guests</p>
                <p className="p-5 pb-0">Total Refund</p>
                <p className="p-5 pt-0 font-bold font-inter text-xl">
                  THB {formatNumber(item.amount)}{" "}
                </p>
              </div>
            );
          })}
        </section>
        <section className="flex flex-col w-full bg-gray-100">
          <button
            onClick={() => handleRefundClick(bookingDetail[0].booking_id)}
            className="button-primary m-3 w-full "
          >
            cancel and refund this booking
          </button>
          <button onClick={()=>{handleCancel}} className="button-ghost m-3">cancel</button>
        </section>
        {isOpen && (
          <div className="w-screen h-screen flex justify-center items-center z-50 fixed top-0 left-0 bg-black/15">
            <div className="bg-orange-600 w-[50dvw] h-[25dvh] flex items-center justify-center text-center rounded-md">
              <h3 className="text-green-200"> Refund Successfully!</h3>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Refund;
