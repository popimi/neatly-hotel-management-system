import SearchBox from "../components/SearchResultPage/SearchBox";
import RoomResultCard from "../components/SearchResultPage/RoomResultCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SearchResultPage() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchKey, setSearchKey] = useState([]);
  const location = useLocation();
  const data = location.state;
  

  return (
    <div className="w-full">
      <SearchBox
        setSearchResult={setSearchResult}
        setSearchKey={setSearchKey}
      />
      <RoomResultCard data={data} searchResult={searchResult} searchKey={searchKey} />
      <Footer />
    </div>
  );
}

export default SearchResultPage;
