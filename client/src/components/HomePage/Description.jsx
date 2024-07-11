import homepageImage from '../../assets/images/HomePage/homepageImage.jpeg';
import superiorGardenView from '../../assets/images/HomePage/superiorGardenView.jpeg';
import deluxe from '../../assets/images/HomePage/deluxe.jpeg';
import premierSeaView from '../../assets/images/HomePage/premierSeaView.jpeg';
import suite from '../../assets/images/HomePage/suite.jpeg';
import superior from '../../assets/images/HomePage/superior.jpeg';
import supreme from '../../assets/images/HomePage/supreme.jpeg';

function Description() {

  return (
    <section id='description' className="flex flex-col box-border text-pretty gap-5 p-5 sm:py-20">
      <h1 className="text-5xl py-8 font-bold">Neatly Hotel</h1>
      <h5 className='font-[400] text-pretty text-[1.025rem] sm:pl-[9.37rem] md:pr-[5rem] lg:pr-[10rem] sm:pb-20'>
        Set in Bangkok, Thailand. Neatly Hotel offers 5-star accommodation with
        an outdoor pool, kids' club, sports facilities and a fitness centre.
        There is also a spa, an indoor pool and saunas.
        All units at the hotel are equipped with a seating area, a
        flat-screen TV with satellite channels, a dining area and a private
        bathroom with free toiletries, a bathtub and a hairdryer. Every room in
        Neatly Hotel features a furnished balcony. Some rooms are equipped with
        a coffee machine.
        Free WiFi and entertainment facilities are available at property
        and also rentals are provided to explore the area.
      </h5>
      <div className="self-center sm:pb-10">
        <div className="carousel w-full space-x-3 p-4">
          <div id="slide1" className="carousel-item relative w-full overflow-hidden">
            <img
              src={`${homepageImage}`}
              className="w-full max-h-[325px] max-w-[640px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide7" className="btn btn-circle bg-transparent text-slate-500">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-transparent text-slate-500">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative">
            <img
              src={`${superiorGardenView}`}
              className="w-full max-h-[325px] max-w-[640px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle bg-transparent text-slate-500">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-transparent text-slate-500">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={`${deluxe}`}
              className="w-full max-h-[325px] max-w-[640px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle bg-transparent text-slate-500">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle bg-transparent text-slate-500">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src={`${premierSeaView}`}
              className="w-full max-h-[325px] max-w-[640px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle bg-transparent text-slate-500">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle bg-transparent text-slate-500">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img
              src={`${suite}`}
              className="w-full max-h-[325px] max-w-[640px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle bg-transparent text-slate-500">
                ❮
              </a>
              <a href="#slide6" className="btn btn-circle bg-transparent text-slate-500">
                ❯
              </a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <img
              src={`${superior}`}
              className="w-full max-h-[325px] max-w-[640px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide5" className="btn btn-circle bg-transparent text-slate-500">
                ❮
              </a>
              <a href="#slide7" className="btn btn-circle bg-transparent text-slate-500">
                ❯
              </a>
            </div>
          </div>
          <div id="slide7" className="carousel-item relative w-full">
            <img
              src={`${supreme}`}
              className="w-full max-h-[325px] max-w-[640px]"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide6" className="btn btn-circle bg-transparent text-slate-500">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle bg-transparent text-slate-500">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;