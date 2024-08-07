import SearchBox from "../components/SearchResultPage/SearchBox";
import RoomResultCard from "../components/SearchResultPage/RoomResultCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



function SearchResultPage() {
  
  const location = useLocation();
  const data = location.state;
  
  return (
    <div className="w-full">
      <SearchBox />
      <RoomResultCard data={data} />
      <Footer />
    </div>
  );
}

export default SearchResultPage;
