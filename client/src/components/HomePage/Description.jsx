import Carousel from "./CarouselComponent";

function Description() {
  return (
    <section id="description">
      <div className="box-border flex flex-col gap-10 text-pretty my-10 h-fit">
        <div>
          <h1 className="p-5 text-[3rem]/[5rem] lg:text-[6rem]/[8rem] py-6 font-bold lg:pl-[160px]">
            Neatly Hotel
          </h1>
          <p className="p-5 font-[400] text-pretty text-[1rem]/[1.5rem] lg:text-[1.5rem]/[3rem] lg:pl-[290px] lg:w-[90dvw]">
            Set in Bangkok, Thailand. Neatly Hotel offers 5-star accommodation
            with an outdoor pool, kids' club, sports facilities and a fitness
            centre. There is also a spa, an indoor pool and saunas.<br/> All units at
            the hotel are equipped with a seating area, a flat-screen TV with
            satellite channels, a dining area and a private bathroom with free
            toiletries, a bathtub and a hairdryer. Every room in Neatly Hotel
            features a furnished balcony. Some rooms are equipped with a coffee
            machine.<br/> Free WiFi and entertainment facilities are available at
            property and also rentals are provided to explore the area.
          </p>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default Description;
