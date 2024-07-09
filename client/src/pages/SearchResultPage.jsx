import Header from "../components/SearchResultPage/Header";
import SearchBox from "../components/SearchResultPage/SearchBox";
import RoomResultCard from "../components/SearchResultPage/RoomResultCard";
import Footer from "../components/SearchResultPage/Footer";

function SearchResultPage() {
  return (
    <div className="w-[375px] ">
      <Header />
      <SearchBox />
      <RoomResultCard />
      <Footer />
    </div>
  );
}

export default SearchResultPage;
