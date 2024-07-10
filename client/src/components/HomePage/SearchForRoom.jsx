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
          flex flex-col box-border justify-center items-center max-h-[764px] lg:max-h-screen px-6
          lg:p-24"
        >
          <div>
            <h1
              className="text-white text-pretty text-[2rem]/[42px] lg:text-[4rem]/[70px] font-bold text-center my-4 p-4
          lg:min-w-[800px] lg:max-w-[900px]"
            >
              A Best Place For Your Neatly Experience
            </h1>
            <form
              className="bg-white p-4 w-full rounded-md flex flex-col box-border gap-4 mb-6 max-h-[396px]
          lg:flex-row lg:justify-center lg:items-end lg:p-8 lg:max-w-[1000px]"
            >
              <label className="flex flex-col text-sm lg:w-1/4">
                Check In
                <input
                  type="date"
                  className="border-[0.5px] border-black/20 
                rounded-lg p-3 focus:ring-1 focus:ring-black/20"
                ></input>
              </label>
              <label className="hidden sm:flex sm:self-center">-</label>
              <label className="flex flex-col text-sm lg:w-1/4">
                Check Out
                <input
                  type="date"
                  className="border-[0.5px] border-black/20 
                rounded-lg p-3 focus:ring-1 focus:ring-black/20"
                ></input>
              </label>
              <label className="flex flex-col text-sm lg:w-1/4">
                Rooms & Guests
                {/* <select
                  className="select select-bordered w-full focus:border-orange-500
              "
                >
                  <option disabled selected>
                    1 room, 2 guests
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select> */}
              </label>
              <button className="btn bg-orange-600 text-white sm:px-5 lg:ml-6 lg:px-10">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchForRoom;
