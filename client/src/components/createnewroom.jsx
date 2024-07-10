function CreateNewRoom() {
  return (
    <content className="flex flex-1 flex-col bg-gray-100 ">
      <nav className="flex items-center justify-between bg-white w-[1200px] h-[80px] py-[16px] px-[60px] ">
        <div>
          <h5>Create New Room</h5>
        </div>
        <div className="flex ">
          <button
            className="flex items-center button-secondary  text-orange-500 align-middle w-[116px] h-[48px] 
            px-[32px] py-[16px] 
            border border-1 border-orange-500 rounded mr-5"
          >
            Cancel
          </button>
          <button
            className="flex items-center align-middle button-primary w-[116px] h-[48px] 
            px-[32px] py-[16px] border border-1"
          >
            Create
          </button>
        </div>
      </nav>
      {/* <nav className="w-full">
          <div className=" flex bg-base-100 ">
            <div className="flex-1 ">
              <p className=" text-xl font-semibold  ">
                Kate Cho <span className="body-1">Premier Sea View</span>
              </p>
            </div>
          </div>
        </nav> */}
      <div className="bg-gray-100  p-10">
        <body className="">
          <main className="bg-white w-[1080px] h-[1388px] gap-[40px] pt-[40px] pr-[80px] pb-[60px] pl-[80px]">
            <div className="w-[880px] h-[58px] gap-[4px] mb-5">
              <h5 className="text-gray-600">Basic Information</h5>
            </div>
            <div className="w-[880px] h-[58px] gap-[4px] mb-5">
              <form>
                <div className=" flex ">
                <div>
                  <label className="body-1 font-inter ">
                    Room type*<br/>
                    <input className="w-[440px] h-[48px] gap-[4px] mb-5 border border-1 px-[16px] py-[12px] mr-5" type="text" />
                  </label>
                </div>
                <div>
                  <label >
                    Bed type *<br/>
                    <input className="w-[440px] h-[48px] gap-[4px] mb-5 border border-1 px-[16px] py-[12px]"  />
                  </label>
                </div>
                </div>
              </form>
            </div>
            <div>
            <div className="w-[880px] h-[58px] gap-[4px] mb-5">
              <h5 className="text-gray-600">Room Image</h5>
              <p className="body-1 font-inter">Superior Garden View Room</p>
            </div>
            </div>
           
            
            
          </main>
        </body>
      </div>
    </content>
  );
}
export default CreateNewRoom;
