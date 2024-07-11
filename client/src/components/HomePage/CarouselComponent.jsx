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
    <section className="relative w-full h-full">
      <div className="w-full h-full flex justify-center ">
        <div style={{backgroundImage:`url(${images[currentIndex]})`}} className="bg-cover bg-center w-[100dvw] lg:w-[50dvw] h-[70dvh] duration-500"></div>
          <button onClick={prevImage} className="absolute top-[50%] left-[10%] lg:left-[18%] -translate-x-0 translate-y-[-50%] w-10 h-10 lg:w-12 lg:h-12  rounded-full border-2 border-white lg:border-black text-white lg:text-black lg:text-xl font-bold">←</button>
          <button onClick={nextImage} className="absolute top-[50%] right-[10%] lg:right-[18%] -translate-x-0 translate-y-[-50%] w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white lg:border-black text-white lg:text-black lg:text-xl font-bold">→</button>
        
        
      </div>
    </section>
  );
}

export default Carousel;
