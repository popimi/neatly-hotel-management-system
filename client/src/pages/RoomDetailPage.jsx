
import RoomInformation from "../components/RoomDetailPage/RoomInformation";
import RoomInformationLg from "../components/RoomDetailPage/RoomInformationLg";
import CarouselPicture from "../components/RoomDetailPage/CarouselPicture";
import CarouselPictureLg from "../components/RoomDetailPage/CarouselPictureLg";
import OtherRooms from "../components/RoomDetailPage/OtherRooms";
import Footer from "../components/Footer";

function RoomDetailPage() {
  return (
    <div className="w-[375px] h-full lg:bg-gray-100 lg:w-[1440px] lg:h-full">
      
      <CarouselPicture />
      <CarouselPictureLg />
      <RoomInformation />
      <RoomInformationLg />
      <OtherRooms />
      <Footer />
    </div>
  );
}

export default RoomDetailPage;
