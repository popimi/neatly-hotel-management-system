import BookingHistoryCard from "../components/BookingHistory/BookingHistoryCard";
import BookingHistoryTitle from "../components/BookingHistory/BookingHistoryTitle";
import Footer from "../components/Footer";
function BookingHistoryPage() {
  return (
    <div className="w-full max-[1279px]:flex max-[1279px]:flex-col max-[1279px]:items-center bg-gray-100">
      <BookingHistoryTitle />
      <BookingHistoryCard />
      <Footer/>
    </div>
  );
}
export default BookingHistoryPage;
