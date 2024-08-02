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
    <section className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out w-fit"
        style={{
          transform: `translateX(-${currentIndex * (100/images.length)}%)`,
        }}
      >
        {images.map((image, index) => {
          return (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center  mx-2"
              >
                <figure>
                  <img src={image} className="w-[180px] h-[225px] sm:w-[220px] sm:h-[275px] md:w-[300px] md:h-[375px] lg:w-[400px] lg:h-[500px] object-cover"/>
                </figure>
              </div>
          );
        })}
      </div>
      <button
        onClick={prevImage}
        className="absolute top-[50%] left-[10%] 
        -translate-x-0 translate-y-[-50%] 
        w-10 h-10 lg:w-12 lg:h-12  
        rounded-full text-black lg:text-xl font-bold"
      >
        ←
      </button>
      <button
        onClick={nextImage}
        className="absolute top-[50%] right-[10%]
        -translate-x-0 translate-y-[-50%] 
        w-10 h-10 lg:w-12 lg:h-12 
        rounded-full text-black lg:text-xl font-bold"
      >
        →
      </button>
    </section>
  );
}

export default Carousel;
