import Header from "../components/RoomDetailPage/Header";
import RoomInformation from "../components/RoomDetailPage/RoomInformation";
import RoomInformationLg from "../components/RoomDetailPage/RoomInformationLg";
import CarouselPicture from "../components/RoomDetailPage/CarouselPicture";
import CarouselPictureLg from "../components/RoomDetailPage/CarouselPictureLg";
import OtherRooms from "../components/RoomDetailPage/OtherRooms";
import Footer from "../components/RoomDetailPage/Footer";

function RoomDetailPage() {
  return (
    <div className="w-[375px] h-[2163px] lg:bg-gray-100 lg:w-[1440px] lg:h-full">
      <Header />
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
