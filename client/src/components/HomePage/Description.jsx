import Carousel from "./CarouselComponent";

function Description() {
  return (
    <section id="description" className="py-5 my-5 h-fit">
      <div className="box-border flex flex-col justify-between gap-10 text-pretty h-full">
        <div className="h-[40%] border border-red">
          <div>
            <h3 className="p-5 lg:text-[60px] font-bold lg:pl-[160px]">
              Neatly Hotel
            </h3>
          </div>
          <div>
            <p className="p-5 font-[400] text-pretty text-[12px]/[16px] lg:text-[16px]/[20px] xl:text-[24px]/[28px] lg:pl-[290px] lg:w-[85dvw]">
              Set in Bangkok, Thailand. Neatly Hotel offers 5-star accommodation
              with an outdoor pool, kids' club, sports facilities and a fitness
              centre. There is also a spa, an indoor pool and saunas.
              <br /> All units at the hotel are equipped with a seating area, a
              flat-screen TV with satellite channels, a dining area and a
              private bathroom with free toiletries, a bathtub and a hairdryer.
              Every room in Neatly Hotel features a furnished balcony. Some
              rooms are equipped with a coffee machine.
              <br /> Free WiFi and entertainment facilities are available at
              property and also rentals are provided to explore the area.
            </p>
          </div>
        </div>
        <div className="h-fit border border-green-600">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default Description;
