import Header from "../components/RoomDetailPage/Header";
import RoomInformation from "../components/RoomDetailPage/RoomInformation";
import CarouselPicture from "../components/RoomDetailPage/CarouselPicture";
import OtherRooms from "../components/RoomDetailPage/OtherRooms";
import Footer from "../components/RoomDetailPage/Footer";

function RoomDetailPage() {
  return (
    <div className="w-[375px] h-[2163px]">
      <Header />
      <CarouselPicture />
      <RoomInformation />
      <OtherRooms />
      <Footer />
    </div>
  );
}

export default RoomDetailPage;
