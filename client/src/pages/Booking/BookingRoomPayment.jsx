import NavBar from "../../components/NavBar";
import { Payment } from "../../components/BookingRoom/BookingSteps";
import PaymentMethod from "../../components/BookingRoom/PaymentMethod";

function BookingRoomPayment (){
    return (
        <main>
           <Payment />
           <PaymentMethod />
        </main>
    );
};
export default BookingRoomPayment;