import RoomInformation from "../components/RoomDetailPage/RoomInformation";
import RoomInformationLg from "../components/RoomDetailPage/RoomInformationLg";
import CarouselPicture from "../components/RoomDetailPage/CarouselPicture";
import CarouselPictureLg from "../components/RoomDetailPage/CarouselPictureLg";
import OtherRooms from "../components/RoomDetailPage/OtherRooms";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/authentication";
import axios from "axios";

function RoomDetailPage() {
  // const location = useLocation();
  // const id = location.state;
  const { state, apiUrl } = useAuth();

  const param = useParams();
  const [roomDetail, setRoomDetail] = useState();

  const getRoomDetail = async () => {
    try {
      const result = await axios.get(`${apiUrl}/roomdetail/${param.id}`);
      setRoomDetail(result.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRoomDetail();
  }, []);

  return (
    <div className="w-full h-fit lg:bg-gray-100 lg:w-full lg:h-full">
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
