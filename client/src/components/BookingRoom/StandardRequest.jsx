
function StandardRequest({
  handlePrev,
  handleNext,
  standard,
  setStandard,
  special,
  setSpecial,
  additional,
  setAdditional,

}) {
  
  const handleStandardChange = (e) => {
    const { value, checked } = e.target;
    setStandard((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
  const handleSpecialChange = (e) => {
    const { checked, dataset } = e.target;
    const value = { key: dataset.key, value: Number(dataset.value) };
    setSpecial((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item.key !== value.key)
    );
  };
  const handleAdditionalChange = (e) => {
    setAdditional(e.target.value);
  };

  

  return (
    <section className="box-border lg:pb-10 lg:flex lg:flex-row lg:justify-evenly lg:gap-10 bg-slate-100">
      <div className="flex flex-col bg-white lg:w-[calc(50vw-80px)] lg:p-10 lg:gap-10">
        <form className="flex flex-col p-5 gap-5 text-slate-400">
          <div>
            <h5 className="text-slate-400 lg:text-black">Standard Request</h5>
            <p>
              These requests are not confirmed (Depend on the available room)
            </p>
          </div>
          <label className="flex flex-row gap-3 items-center">
            <input
              type="checkbox"
              value="Early check-in"
              checked={standard.includes("Early check-in")}
              onChange={handleStandardChange}
              className="peer w-5 h-5 accent-orange-500"
            />
            <p className="peer-checked:text-black">Early check-in</p>
          </label>
          <label className="flex flex-row gap-3 items-center">
            <input
              type="checkbox"
              value="Late check-out"
              checked={standard.includes("Late check-out")}
              onChange={handleStandardChange}
              className="peer w-5 h-5 accent-orange-500"
            />
            <p className="peer-checked:text-black">Late check-out</p>
          </label>
          <div className="flex  gap-3 items-center">
            <input
              type="checkbox"
              value="Non-smoking room"
              checked={standard.includes("Non-smoking room")}
              onChange={handleStandardChange}
              className="peer w-5 h-5 accent-orange-500"
            />
            <p className="peer-checked:text-black">Non-smoking room</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input
              type="checkbox"
              value="A room on the high floor"
              checked={standard.includes("A room on the high floor")}
              onChange={handleStandardChange}
              className="peer w-5 h-5 accent-orange-500"
            />
            <p className="peer-checked:text-black">A room on the high floor</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input
              type="checkbox"
              value="A quiet room"
              checked={standard.includes("A quiet room")}
              onChange={handleStandardChange}
              className="peer w-5 h-5 accent-orange-500"
            />
            <p className="peer-checked:text-black">A quiet room</p>
          </div>
          <div>
            <h5 className="text-slate-400 lg:text-black">Special Request</h5>
            <p className="peer-checked:text-black">
              Additonal change may apply
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input
              type="checkbox"
              data-key="Baby cot"
              data-value="400"
              checked={special.some((item) => item.key === "Baby cot")}
              onChange={handleSpecialChange}
              className="peer w-5 h-5 accent-orange-500"
            />
            <p className="peer-checked:text-black">Baby cot (+THB 400)</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input
              type="checkbox"
              data-key="Airport Transfer"
              data-value="200"
              checked={special.some((item) => item.key === "Airport Transfer")}
              onChange={handleSpecialChange}
              className="peer w-5 h-5 accent-orange-500"
            />
            <p className="peer-checked:text-black">
              Airport Transfer (+THB 200)
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input
              type="checkbox"
              data-key="Extra bed"
              data-value="500"
              checked={special.some((item) => item.key === "Extra bed")}
              onChange={handleSpecialChange}
              className="peer w-5 h-5 accent-orange-500"
            />
            <p className="peer-checked:text-black">Extra bed (+THB 500)</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input
              type="checkbox"
              data-key="Extra pillow"
              data-value="100"
              checked={special.some((item) => item.key === "Extra pillow")}
              onChange={handleSpecialChange}
              className="peer w-5 h-5 accent-orange-500"
            />
            <p className="peer-checked:text-black">Extra pillow (+THB 100)</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input
              type="checkbox"
              data-key="Phone chargers and adapters"
              data-value="100"
              checked={special.some(
                (item) => item.key === "Phone chargers and adapters"
              )}
              onChange={handleSpecialChange}
              className="peer w-5 h-5 accent-orange-500"
            />
            <p className="peer-checked:text-black">
              Phone chargers and adapters (+THB 100)
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input
              type="checkbox"
              data-key="Breakfast"
              data-value="150"
              checked={special.some((item) => item.key === "Breakfast")}
              onChange={handleSpecialChange}
              className="peer w-5 h-5 accent-orange-500"
            />
            <p className="peer-checked:text-black">Breakfast (+THB 150)</p>
          </div>
          <label className="lg:text-black">
            Additional Request
            <textarea
              rows="5"
              cols="50"
              value={additional}
              onChange={handleAdditionalChange}
              className="border border-slate-200 w-full"
            ></textarea>
          </label>
        </form>
        <section className="flex  justify-between py-8 px-4 bg-white">
          <button className="button-ghost" onClick={handlePrev}>
            Back
          </button>
          <button className="button-primary" onClick={handleNext}>
            Next
          </button>
        </section>
      </div>
    </section>
  );
}
export default StandardRequest;
