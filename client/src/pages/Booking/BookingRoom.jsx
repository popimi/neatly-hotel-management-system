import NavBar from "../../components/NavBar";
import { BasicInfo } from "../../components/BookingRoom/BookingSteps";
import BasicInformation from "../../components/BookingRoom/BasicInformation";

function BookingRoom() {
  return (
    <main className="box-border">
      <NavBar />
      <BasicInfo />
      <BasicInformation />
    </main>
  );
}
export default BookingRoom;
