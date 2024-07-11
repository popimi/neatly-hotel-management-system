import homepageImage from "../../assets/images/HomePage/homepageImage.jpeg";

function SearchForRoom() {
  return (
    <section id="search" className="box-border">
      <div
        style={{
          backgroundImage: `url(${homepageImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="bg-black/30 
          flex flex-col box-border justify-center items-center h-[calc(100dvh-48px)] lg:h-[calc(100dvh-100px)] px-6
          lg:p-24"
        >
          <div className="">
            <h1
              className="text-white text-pretty text-[calc(2rem+2dvw)]/[calc(40px+1dvh)] lg:text-[calc(4rem+1dvw)]/[calc(70px+1dvh)] font-bold text-center my-4 p-4
          lg:min-w-[800px] lg:max-w-[900px]"
            >
              A Best Place For Your Neatly Experience
            </h1>
            <form
              className="bg-white p-4 rounded-md m-auto flex flex-col box-border gap-4 mb-6 max-h-[396px] max-w-[375px]
          lg:flex-row lg:justify-center lg:items-center lg:p-8 lg:max-w-[1000px] lg:max-h-[196px]"
            >
              <label className="flex flex-col text-sm lg:w-1/4">
                Check In
                <input
                  type="date"
                  className="border-[0.5px] border-black/20 
                rounded-lg p-2 "
                ></input>
              </label>
              <label className="hidden lg:flex lg:self-center">-</label>
              <label className="flex flex-col text-sm lg:w-1/4">
                Check Out
                <input
                  type="date"
                  className="border-[0.5px] border-black/20 
                rounded-lg p-2 "
                ></input>
              </label>
              <label className="flex flex-col text-sm lg:w-1/4">
                Rooms & Guests
                <select
                  className="border-[0.5px] border-black/20 
                rounded-lg p-2 "
                >
                  <option value="">
                    1 room, 2 guests
                  </option>
                </select>
              </label>
              <label className="flex flex-col">
                <span className="text-transparent">button</span>
                <button className="h-9 mb-1 rounded-md bg-orange-600 text-white lg:px-10">
                  Search
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchForRoom;
