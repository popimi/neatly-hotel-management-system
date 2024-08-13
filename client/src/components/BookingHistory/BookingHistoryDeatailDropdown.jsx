import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authentication";
import axios from "axios";

function BookingHistoryDetailDropdown({ item }) {
  const { apiUrl } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const [formattedLast4Digits, setFormattedLast4Digits] = useState("");

  const formatNumber = (number) => {
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const get4Digits = async () => {
    const paymentMethodId = item.payment_method_id;

    if (!paymentMethodId) {
      console.error("Payment Method ID is missing");
      return;
    }

    try {
      const result = await axios.get(
        `${apiUrl}/stripe/getPaymentMethod/${paymentMethodId}`
      );
      const last4 = result.data.card.last4;
      setFormattedLast4Digits(`*${last4.slice(-3)}`);
    } catch (error) {
      console.error({ Error: error.message });
    }
  };

  useEffect(() => {
    if (isOpen) {
      get4Digits();
    }
  }, [isOpen]);

  return (
    <div className="mt-[24px]">
      <details
        onToggle={() => setIsOpen(!isOpen)}
        className="w-[343px] h-[56px] rounded flex select-none bg-gray-200 open:bg-gray-200 open:w-[343px] open:h-full open:rounded xl:w-[715px] xl:h-[56px] xl:open:w-[715px] "
      >
        <summary className="p-[16px] font-sans font-semibold text-[16px] leading-[16px] text-gray-900 ">
          Booking Detail
        </summary>

        <div className="p-[16px] font-inter font-normal text-[16px] leading-[24px] text-gray-700  xl:w-[715px] ">
          <span>
            {" "}
            {item.guests} Guests {item.night_reserved} Night
            {item.night_reserved > 1 ? "s" : null}
          </span>
          <br></br>
          <br></br>
          <span className="flex justify-between">
            Payment success via{" "}
            <span className="font-semibold ">
              Credit Card- {formattedLast4Digits}
            </span>
          </span>
          <br></br>
          <span className="flex justify-between">
            {item.type}{" "}
            <span className="font-semibold text-gray-900">
              {item.promotion_status
                ? formatNumber(
                    Number(item.price_promotion) * item.night_reserved
                  )
                : formatNumber(item.price_per_night * item.night_reserved)}
            </span>
          </span>

          {item.special_req.map((item, index) => {
            return (
              <span key={index} className="flex justify-between">
                <br></br>
                {item.key}
                <span className="font-semibold text-gray-900">
                  <br></br>
                  {formatNumber(item.value)}
                </span>
              </span>
            );
          })}

          <br></br>
          <span className="flex justify-between">
            Promotion Code{" "}
            <span className="font-semibold text-gray-900">0.00</span>
          </span>
          <br></br>

          <div className="w-[311px] h-[46px] border-t xl:w-[695px]  ">
            <br></br>
            <span className="flex justify-between ">
              Total{" "}
              <span className="font-semibold text-[20px] leading-[30px] text-gray-900">
                THB {formatNumber(item.amount)}
              </span>
            </span>
          </div>
        </div>

        <div className="w-[343px] h-[100px] p-[16px] gap-[8px] font-inter  text-[16px] leading-[24px] text-gray-700  bg-gray-300 xl:w-[715px] xl:h-[88px] xl:py-[16px] xl:px-[24px]">
          <p className="font-semibold">Additional Request</p>
          <p>{item.additional_req}</p>
        </div>
      </details>
    </div>
  );
}

export default BookingHistoryDetailDropdown;
