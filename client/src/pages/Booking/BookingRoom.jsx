import NavBar from "../../components/NavBar";
import { BasicInfo } from "../../components/BookingRoom/BookingSteps";
import BasicInformation from "../../components/BookingRoom/BasicInformation";
import { useAuth } from "../../contexts/authentication";
import { LoginPage } from "../LoginPage";

function BookingRoom() {
 
  return (
    <main className="box-border">
      <BasicInfo />
      <BasicInformation />
    </main> 
);
}
export default BookingRoom;
