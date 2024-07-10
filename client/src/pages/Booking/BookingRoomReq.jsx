import NavBar from "../../components/NavBar";
import { SpecialRequest } from "../../components/BookingRoom/BookingSteps";
import StandardRequest from "../../components/BookingRoom/StandardRequest";

function BookingRoomReq (){
    return (
        <main className="box-border">
            <NavBar />
            <SpecialRequest />
            <StandardRequest />
        </main>
    );
};
export default BookingRoomReq;