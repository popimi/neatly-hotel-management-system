import BookingDetail from "./BookingDetail";

function StandardRequest() {
  return (
    <section className="box-border lg:pb-10 lg:flex lg:flex-row lg:justify-evenly lg:px-[160px] lg:gap-10 bg-slate-100">
      <div className="flex flex-col bg-white lg:w-[calc(50vw-80px)]">
        <form className="flex flex-col p-5 gap-5 text-slate-400">
          <div>
            <h5 className="text-slate-400 lg:text-black">Standard Request</h5>
            <p>
              These requests are not confirmed (Depend on the available room)
            </p>
          </div>
          <label className="flex flex-row gap-3 items-center">
            <input type="checkbox" className="peer w-5 h-5 accent-orange-500" />
            <p className="peer-checked:text-black">Early check-in</p>
          </label>
          <label className="flex flex-row gap-3 items-center">
            <input type="checkbox" className="peer w-5 h-5 accent-orange-500" />
            <p className="peer-checked:text-black">Late check-out</p>
          </label>
          <div className="flex  gap-3 items-center">
            <input type="checkbox" className="peer w-5 h-5 accent-orange-500" />
            <p className="peer-checked:text-black">Non-smoking room</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input type="checkbox" className="peer w-5 h-5 accent-orange-500" />
            <p className="peer-checked:text-black">A room on the high floor</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input type="checkbox" className="peer w-5 h-5 accent-orange-500" />
            <p className="peer-checked:text-black">A quiet room</p>
          </div>
          <div>
            <h5 className="text-slate-400 lg:text-black">Special Request</h5>
            <p className="peer-checked:text-black">Additonal change may apply</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input type="checkbox" className="peer w-5 h-5 accent-orange-500" />
            <p className="peer-checked:text-black">Baby cot (+THB 400)</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input type="checkbox" className="peer w-5 h-5 accent-orange-500" />
            <p className="peer-checked:text-black">Airport Transfer (+THB 200)</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input type="checkbox" className="peer w-5 h-5 accent-orange-500" />
            <p className="peer-checked:text-black">Extra bed (+THB 500)</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input type="checkbox" className="peer w-5 h-5 accent-orange-500" />
            <p className="peer-checked:text-black">Extra pillow (+THB 100)</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input type="checkbox" className="peer w-5 h-5 accent-orange-500" />
            <p className="peer-checked:text-black">Phone chargers and adapters (+THB 100)</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input type="checkbox" className="peer w-5 h-5 accent-orange-500" />
            <p className="peer-checked:text-black">Breakfast (+THB 150)</p>
          </div>
          <label className="lg:text-black">
            Additional Request
            <textarea
              rows="5"
              cols="50"
              className="border border-slate-200 w-full"
            ></textarea>
          </label>
        </form>
        <p className="text-center lg:hidden">
          *Add additional requests costs to booking detail*
        </p>
        <section className="lg:hidden">
          <BookingDetail />
        </section>
        <section className="flex flex-row justify-between p-5">
          <button className="text-orange-500 font-bold">Back</button>
          <button className="bg-orange-500 text-white p-3 px-8 rounded-md">Next</button>
        </section>
      </div>
      <div className="hidden lg:flex">
        <BookingDetail />
      </div>
    </section>
  );
}
export default StandardRequest;
