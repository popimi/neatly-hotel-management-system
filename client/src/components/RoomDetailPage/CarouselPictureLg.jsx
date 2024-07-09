function CarouselPictureLg() {
  return (
    <div className="hidden lg:flex lg:w-[1440px] lg:h-[581px] lg:mt-[80px] lg:bg-green-200 ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
export default CarouselPictureLg;
