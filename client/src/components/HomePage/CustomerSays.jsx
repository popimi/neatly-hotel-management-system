function CustomerSays() {
  return (
    <section className="bg-green-100 flex flex-col items-center p-5 mt-5 sm:p-10">
      <h1 className="text-5xl font-bold text-center p-5 pt-6 sm:py-10">
        Our Customer Says
      </h1>
      <div className="carousel w-full">
        <div
          id="item1"
          className="carousel-item w-full flex flex-col items-center"
        >
          <div className="flex flex-row justify-center gap-5 sm:py-10">
            <a
              href="#item3"
              className="w-7 lg:w-10 h-7 lg:h-10 hidden sm:flex items-center justify-center text-orange-500  text-sm lg:text-xl  font-bold border border-orange-500 rounded-full"
            >
              ←
            </a>
            <p className="text-center text-pretty sm:font-bold sm:text-[0.75rem] lg:text-[1rem] sm:w-4/5 lg:w-2/3">
              "lorem ipsum dolor sit amet minim mollit non deserunt ullamco est
              sit aliqua dolor do amet sint, velit official consequat duis enim
              velit mollit, exercitation minim amet consequat sunt."
            </p>
            <a
              href="#item2"
              className="w-7 lg:w-10 h-7 lg:h-10 hidden sm:flex items-center justify-center text-orange-500 text-sm lg:text-xl font-bold border border-orange-500 rounded-full"
            >
              →
            </a>
          </div>
          <div className="flex flex-row justify-center items-center gap-5 py-5">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <p className="text-black/30">John Snow</p>
          </div>
          <div className="flex w-full justify-center gap-4 py-3">
            <a href="#item1" className="w-3 h-3 rounded-full bg-black/30"></a>
            <a
              href="#item2"
              className="w-3 h-3 rounded-full hover:bg-black/30 bg-black/10"
            ></a>
            <a
              href="#item3"
              className="w-3 h-3 rounded-full hover:bg-black/30 bg-black/10"
            ></a>
          </div>
          <div className="flex flex-row self-center gap-10 w-fit py-3">
            <a
              href="#item3"
              className="w-14 h-14 flex sm:hidden items-center justify-center text-orange-500  text-2xl font-bold border border-orange-500 rounded-full"
            >
              ←
            </a>
            <a
              href="#item2"
              className="w-14 h-14 flex sm:hidden items-center justify-center text-orange-500 text-2xl font-bold border border-orange-500 rounded-full"
            >
              →
            </a>
          </div>
        </div>
        <div
          id="item2"
          className="carousel-item w-full flex flex-col items-center"
        >
          <div className="flex flex-row justify-center gap-5 sm:py-10">
            <a
              href="#item1"
              className="w-7 lg:w-10 h-7 lg:h-10 hidden sm:flex items-center justify-center text-orange-500  text-sm lg:text-xl  font-bold border border-orange-500 rounded-full"
            >
              ←
            </a>
            <p className="text-center text-pretty sm:font-bold sm:text-[0.75rem] lg:text-[1rem] sm:w-4/5 lg:w-2/3">
              "lorem ipsum dolor sit amet minim mollit non deserunt ullamco est
              sit aliqua dolor do amet sint, velit official consequat duis enim
              velit mollit, exercitation minim amet consequat sunt."
            </p>
            <a
              href="#item3"
              className="w-7 lg:w-10 h-7 lg:h-10 hidden sm:flex items-center justify-center text-orange-500 text-sm lg:text-xl font-bold border border-orange-500 rounded-full"
            >
              →
            </a>
          </div>
          <div className="flex flex-row justify-center items-center gap-5 py-5">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <p className="text-black/30">Taylor Swift</p>
          </div>
          <div className="flex w-full justify-center gap-4 py-3">
            <a href="#item1" className="w-3 h-3 rounded-full hover:bg-black/30 bg-black/10"></a>
            <a
              href="#item2"
              className="w-3 h-3 rounded-full bg-black/30"
            ></a>
            <a
              href="#item3"
              className="w-3 h-3 rounded-full hover:bg-black/30 bg-black/10"
            ></a>
          </div>
          <div className="flex flex-row self-center gap-10 w-fit py-3">
            <a
              href="#item1"
              className="w-14 h-14 flex sm:hidden items-center justify-center text-orange-500  text-2xl font-bold border border-orange-500 rounded-full"
            >
              ←
            </a>
            <a
              href="#item3"
              className="w-14 h-14 flex sm:hidden items-center justify-center text-orange-500 text-2xl font-bold border border-orange-500 rounded-full"
            >
              →
            </a>
          </div>
        </div>
        <div
          id="item3"
          className="carousel-item w-full flex flex-col items-center"
        >
          <div className="flex flex-row justify-center gap-5 sm:py-10">
            <a
              href="#item2"
              className="w-7 lg:w-10 h-7 lg:h-10 hidden sm:flex items-center justify-center text-orange-500  text-sm lg:text-xl  font-bold border border-orange-500 rounded-full"
            >
              ←
            </a>
            <p className="text-center text-pretty sm:font-bold sm:text-[0.75rem] lg:text-[1rem] sm:w-4/5 lg:w-2/3">
              "lorem ipsum dolor sit amet minim mollit non deserunt ullamco est
              sit aliqua dolor do amet sint, velit official consequat duis enim
              velit mollit, exercitation minim amet consequat sunt."
            </p>
            <a
              href="#item1"
              className="w-7 lg:w-10 h-7 lg:h-10 hidden sm:flex items-center justify-center text-orange-500 text-sm lg:text-xl font-bold border border-orange-500 rounded-full"
            >
              →
            </a>
          </div>
          <div className="flex flex-row justify-center items-center gap-5 py-5">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <p className="text-black/30">Sawano Hiroyuki</p>
          </div>
          <div className="flex w-full justify-center gap-4 py-3">
            <a href="#item1" className="w-3 h-3 rounded-full hover:bg-black/30 bg-black/10"></a>
            <a
              href="#item2"
              className="w-3 h-3 rounded-full hover:bg-black/30 bg-black/10"
            ></a>
            <a
              href="#item3"
              className="w-3 h-3 rounded-full bg-black/30"
            ></a>
          </div>
          <div className="flex flex-row self-center gap-10 w-fit py-3">
            <a
              href="#item2"
              className="w-14 h-14 flex sm:hidden items-center justify-center text-orange-500  text-2xl font-bold border border-orange-500 rounded-full"
            >
              ←
            </a>
            <a
              href="#item1"
              className="w-14 h-14 flex sm:hidden items-center justify-center text-orange-500 text-2xl font-bold border border-orange-500 rounded-full"
            >
              →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerSays;
