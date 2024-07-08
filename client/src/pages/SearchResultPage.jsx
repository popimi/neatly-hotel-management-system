import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import RoomResultCard from "../components/RoomResultCard";
import Footer from "../components/Footer";

function SearchResultPage() {
  return (
    <div className="w-[375px] h-[3744px] ">
      <Header />
      <SearchBox />
      <RoomResultCard />
      <Footer />
    </div>
  );
}

export default SearchResultPage;
