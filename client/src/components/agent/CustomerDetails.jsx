import arrow from "../../assets/icons/CustomerBookingDetail/arrow-left.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CutomerDetail() {
  const [customer, setCustomer] = useState([]);
  const [getFourDigits, setGetFourDigits] = useState();
  const [special, setSpecial] = useState([]);
  const [checkIn, setCheckin] = useState("");
  const [checkOut, setCheckout] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const { apiUrl } = useAuth();
  const params = useParams();

  const getDigits = async () => {
    
    try {
      const paymentMethodId = customer[0].payment_method_id;
      const paymentDetail = await axios.get(
        `${apiUrl}/stripe/getPaymentMethod/${paymentMethodId}`
      );
      const fourDigits = paymentDetail.data.card.last4;
      setGetFourDigits(`*${fourDigits.slice(-3)}`);
      console.log(getFourDigits);
      
    } catch (error) {
      console.error({ Error: error.message });
    }
  };

  const customerDetailById = async () => {
    let result;
    try {
      result = await axios.get(
        `${apiUrl}/admin/customerdetailby/${params.booking_id}`
      );
      setCustomer(result.data.data);
      setSpecial(result.data.data[0].special_req);
      getDigits();
    } catch (e) {
      console.error(e.message);
    }
  };

  const formatDAte = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString();
  };

  useEffect(() => {
    customerDetailById();
  }, []);

  const formatNumber = (number) => {
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <main className="flex flex-1 flex-col bg-gray-100 ">
      {customer.map((customers, index) => {
        return (
          <div key={index}>
            <nav className="flex items-center bg-white h-[80px] py-[16px] px-[60px] gap-[16px]">
              <Link to={"/"}>
                <img
                  src={arrow}
                  alt="arrow-left "
                  className="w-[20px] h-[20px] mt-1"
                />
              </Link>
              <h5>
                {customers.firstname} {customers.lastname}{" "}
                <span className="body-1 ">{customers.type} </span>
              </h5>
            </nav>
            <section className="bg-gray-100  p-10" key={index}>
              <div className="">
                <div className="bg-white  h-[1388px] gap-[40px] pt-[40px] pr-[80px] pb-[60px] pl-[80px]">
                  <div className="w-[880px] h-[58px] gap-[4px] mb-5">
                    <h5 className="text-gray-600">Customer Name</h5>
                    <p className="body-1 font-inter">
                      {customers.firstname} {customers.lastname}
                    </p>
                  </div>
                  <div className="w-[880px] h-[58px] gap-[4px] mb-5">
                    <h5 className="text-gray-600">Guest(s)</h5>
                    <p className="body-1 font-inter">{customers.guests}</p>
                  </div>
                  <div className="w-[880px] h-[58px] gap-[4px] mb-5">
                    <h5 className="text-gray-600">Room type</h5>
                    <p className="body-1 font-inter">{customers.type}</p>
                  </div>
                  <div className="w-[880px] h-[58px] gap-[4px] mb-5">
                    <h5 className="text-gray-600">Amount</h5>
                    <p className="body-1 font-inter">1 room</p>
                  </div>
                  <div className="w-[880px] h-[58px] gap-[4px] mb-5">
                    <h5 className="text-gray-600">Bed type</h5>
                    <p className="body-1 font-inter">{customers.bed_type}</p>
                  </div>
                  <div className="w-[880px] h-[58px] gap-[4px] mb-5">
                    <h5 className="text-gray-600">Check-in</h5>
                    <p className="body-1 font-inter">
                      {customers.formatted_date}
                    </p>
                  </div>
                  <div className="w-[880px] h-[58px] gap-[4px] mb-5">
                    <h5 className="text-gray-600">Check-out</h5>
                    <p className="body-1 font-inter">
                      {customers.formatted_date_out}
                    </p>
                  </div>
                  <div className="w-[880px] h-[58px] gap-[4px] mb-5">
                    <h5 className="text-gray-600">Stay(total)</h5>
                    <p className="body-1 font-inter">
                      {customers.night_reserved} night(s)
                    </p>
                  </div>
                  <div className="w-[880px] h-[58px] gap-[4px] mb-5">
                    <h5 className="text-gray-600">Booking date</h5>
                    <p className="body-1 font-inter">
                      {customers.formatted_booking_date}
                    </p>
                  </div>
                  <div className="bg-gray-100  rounded-[4px] min-h-[278px] mb-10 pt-[16px] pr-[24px] pb-[16px] pl-[24px]">
                    <div className="flex justify-end  h-[40px] pb-[16px] gap-[16px]">
                      <div>
                        <p className="body-1 text-gray-600">
                          Payment success via{" "}
                          <span className="font-inter font-[600] text-gray-600">
                            {" "}
                            Credit Card - {getFourDigits}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between pt-[12px] pb-[12px] gap-[16px]">
                      <p className="body-1 font-inter text-gray-900">
                        {customers.type}
                      </p>
                      <p className="body-1 font-inter text-gray-900 font-semibold">
                        {customers.price_promotion
                          ? formatNumber(Number(customers.price_promotion*customers.night_reserved))
                          : formatNumber(customers.price_per_night*customers.night_reserved)}
                      </p>
                    </div>

                    {special.map((v, i) => {
                      return (
                        <div
                          key={i}
                          className="flex justify-between pt-[12px] pb-[12px] gap-[16px]"
                        >
                          <p className="body-1 font-inter text-gray-900">
                            {v.key}
                          </p>
                          <p className="body-1 font-inter text-gray-900 font-semibold">
                            {formatNumber(v.value)}
                          </p>
                        </div>
                      );
                    })}

                    <div className="flex justify-between  pt-[12px] pb-[12px] gap-[16px]">
                      <p className="body-1 font-inter text-gray-900">
                        Promotion Code
                      </p>
                      <p className="body-1 font-inter text-gray-900 font-semibold">
                        0
                      </p>
                    </div>
                    <hr />
                    <div className="flex justify-between  pt-[24px]">
                      <div>
                        <p className="body-1 font-inter">Total</p>
                      </div>
                      <div>
                        <p id="number" className="body-1 font-inter font-bold">
                          THB {formatNumber(customers.amount)}
                        </p>
                      </div>
                    </div>
                  </div>
                  {customers.additional_req && (
                    <div className="bg-gray-300 rounded-[4px] h-[88px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[8px]">
                      <h5 className="text-gray-700 ">Additional Request</h5>
                      <p className="body-1">{customers.additional_req}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </main>
  );
}
export default CutomerDetail;
