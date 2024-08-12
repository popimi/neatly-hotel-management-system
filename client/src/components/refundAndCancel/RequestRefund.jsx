import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
import { useEffect, useState } from "react";
import axios from "axios";

function RequestRefund() {
  const { apiUrl } = useAuth();
  const location = useLocation();
  
  if (!location.state || !location.state[0]) {
    return <p>Invalid request</p>;
  }
  
  const navigate = useNavigate();
  const details = location.state[0];
  const bookingId = details.booking_id;
  const [refundDetail, setRefundDetail] = useState(null);

  const formatNumber = (number) => {
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const getRefundDetail = async () => {
    try {
      const result = await axios.post(`${apiUrl}/stripe/refundDetail`, {
        bookingId,
      });
      setRefundDetail(result.data.refundQueryProcess.rows[0]);
    } catch (error) {
      console.error(error.message); 
    }
  };

  const handleNavigate = ()=>{
    navigate('/')
  }

  useEffect(() => {
    getRefundDetail();
  }, [bookingId]); 

  return (
    <main className="min-h-[calc(100dvh-48px)]">
      <section className="bg-green-800 flex flex-col px-5 py-10 gap-5">
        <h3 className="text-white text-center">
          Your Request has been Submitted
        </h3>
        <p className="text-green-300 text-center">
          The cancellation is complete.
          <br /> You will receive an email with a detail and refund within 48
          hours.
        </p>
      </section>
      <section className="bg-green-700 flex flex-col">
        <div className="bg-green-600 m-5 p-5 text-white">
          <p>{details.type}</p>
          <p>
            {details.formatted_date_in} - {details.formatted_date_out}
          </p>
          <p>{details.guests} Guests</p>
          <br />
          <p className="text-green-400">
            Booking Date: {details.formatted_date_booking}
          </p>
          <p className="text-green-400">
            Cancellation Date: {refundDetail ? refundDetail.formatted_updated_at : 'Loading...'}
          </p>
        </div>
        <div className="flex flex-row justify-between border-t border-t-green-500 text-white p-5 m-5">
          <p>Total Refund</p>
          <p>THB {refundDetail ? formatNumber(details.amount) : 'Loading...'}</p>
        </div>
      </section>
      <section className="flex justify-center p-5 m-5">
        <button onClick={handleNavigate} className="button-primary">Back to Home</button>
      </section>
    </main>
  );
}

export default RequestRefund;
