import homepageImage from "../../assets/images/HomePage/homepageImage.jpeg";
import superiorGardenView from "../../assets/images/HomePage/superiorGardenView.jpeg";
import deluxe from "../../assets/images/HomePage/deluxe.jpeg";
import premierSeaView from "../../assets/images/HomePage/premierSeaView.jpeg";
import suite from "../../assets/images/HomePage/suite.jpeg";
import superior from "../../assets/images/HomePage/superior.jpeg";
import supreme from "../../assets/images/HomePage/supreme.jpeg";
import { useState } from "react";

function Carousel() {
  const images = [
    homepageImage,
    superiorGardenView,
    deluxe,
    premierSeaView,
    suite,
    superior,
    supreme,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevImage = () => {
    const isFirstImage = currentIndex == 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const isLastImage = currentIndex == images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="bg-yellow-400 h-full">
      
    </section>
  );
}

export default Carousel;
