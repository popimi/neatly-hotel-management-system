import RoomInformation from "../components/RoomDetailPage/RoomInformation";
import RoomInformationLg from "../components/RoomDetailPage/RoomInformationLg";
import CarouselPicture from "../components/RoomDetailPage/CarouselPicture";
import CarouselPictureLg from "../components/RoomDetailPage/CarouselPictureLg";
import OtherRooms from "../components/RoomDetailPage/OtherRooms";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function RoomDetailPage() {

  const location = useLocation();
  const roomDetail = location.state;

  return (
    <div className="w-full h-full lg:bg-gray-100 lg:w-full lg:h-full">
      <CarouselPicture />
      <CarouselPictureLg />
      <RoomInformation roomDetail={roomDetail} />
      <RoomInformationLg roomDetail={roomDetail} />
      <OtherRooms />
      <Footer />
    </div>
  );
}

export default RoomDetailPage;
