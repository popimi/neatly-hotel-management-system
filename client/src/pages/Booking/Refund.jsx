import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";
import { useState } from "react";
import ValidCustomer from "../Alert";

function Refund() {
  const { apiUrl } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const bookingDetail = [location.state];
  const { id } = useParams();
  const paymentIntentId = bookingDetail[0].payment_intent_id;
  const [isOpen, setIsOpen] = useState(false);
  const [alertinfo, setAlertInfo] = useState({ message: "", type: "" });

  let result;

  const formatNumber = (number) => {
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleRefundClick = async (id) => {
    setAlertInfo({ message: "Refund Successfully", type: "alert-success" });
    setIsOpen(true);
    try {
      result = await axios.post(`${apiUrl}/stripe/refund/${id}`, {
        paymentIntentId,
      });

      if (result) {
        setIsOpen(false);
      }
      navigate(`/refund/${id}/requestrefund`, { state: bookingDetail });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleCancel = () => {
    navigate("/bookinghistory");
  };

  return (
    <main className="bg-gray-100">
      {isOpen && <ValidCustomer alert={alertinfo} />}
      <section className="pt-5 w-[100dvw] h-[calc(100dvh-48px)] lg:h-[calc(100dvh-100px)] flex flex-col items-center">
        <h3 className="text-green-700 p-5 self-center">Request a Refund</h3>
        <section className="w-full h-fit bg-gray-100">
          {bookingDetail.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-5 lg:flex-row w-full h-fit"
              >
                <figure className="w-full h-[50dvh] lg:w-[30%] lg:h-[250px]">
                  <img
                    src={item.main_image}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="flex flex-col w-full lg:w-[60%] gap-5">
                  <div className="lg:flex lg:flex-row items-center justify-between">
                    <p className="p-5 pb-1 font-inter font-semibold text-[3rem]">
                      {item.type}
                    </p>
                    <p className="p-5 pt-1 text-[1rem]">
                      Booking date: {item.formatted_date_booking}
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between">
                    <div>
                      <p className="px-5 text-[1rem]">
                        {item.formatted_date_in} - {item.formatted_date_out}
                      </p>
                      <p className="px-5 text-[1rem]">{item.guests} Guests</p>
                    </div>
                    <div>
                      <p className="p-5 pb-1 text-[1rem]">Total Refund</p>
                      <p className="p-5 pt-1 font-bold font-inter text-xl text-[1rem]">
                        THB {formatNumber(item.amount)}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <section className="flex flex-col lg:flex-row w-full bg-gray-100 lg:p-8 lg:justify-between">
          <button
            onClick={() => handleRefundClick(bookingDetail[0].booking_id)}
            className="button-primary w-full lg:order-2 lg:w-[40%]"
          >
            cancel and refund this booking
          </button>
          <button
            onClick={() => {
              handleCancel;
            }}
            className="button-ghost lg:order-1"
          >
            cancel
          </button>
        </section>
      </section>
    </main>
  );
}

export default Refund;
