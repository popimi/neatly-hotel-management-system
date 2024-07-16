import BookingHistoryCard from "../components/BookingHistory/BookingHistoryCard";
import BookingHistoryTitle from "../components/BookingHistory/BookingHistoryTitle";

function BookingHistoryPage() {
  return (
    <div className="w-[375px] ">
      <BookingHistoryTitle />
      <BookingHistoryCard />
    </div>
  );
}
export default BookingHistoryPage;
