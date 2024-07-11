
import SearchBox from "../components/SearchResultPage/SearchBox";
import RoomResultCard from "../components/SearchResultPage/RoomResultCard";
import Footer from "../components/Footer";

function SearchResultPage() {
  return (
    <div className="w-full">
      
      <SearchBox />
      <RoomResultCard />
      <Footer />
    </div>
  );
}

export default SearchResultPage;
