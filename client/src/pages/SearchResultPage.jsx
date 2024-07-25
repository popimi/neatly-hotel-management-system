import SearchBox from "../components/SearchResultPage/SearchBox";
import RoomResultCard from "../components/SearchResultPage/RoomResultCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";



function SearchResultPage() {
  

  const getLocalSearchData  = localStorage.getItem("searchResult")
  const getLocalDataObject = JSON.parse(getLocalSearchData)

  
  useEffect(()=>{
   console.log(getLocalDataObject);
  },[getLocalDataObject])
  
  

  return (
    <div className="w-full">
      <SearchBox />
      <RoomResultCard localData={getLocalDataObject}/>
      <Footer />
    </div>
  );
}

export default SearchResultPage;
