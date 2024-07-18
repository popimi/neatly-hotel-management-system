import BookingForm from "./BookingForm";
import BookingDetail from "./BookingDetail";


function BasicInformation({ handlePrev, handleNext }) {
  return (
    <section className="box-border lg:pb-10  lg:flex lg:flex-row lg:justify-evenly lg:px-[160px] lg:gap-10 bg-slate-100">
      <div className="flex flex-col lg:gap-10 lg:p-10 rounded-[1px] bg-white lg:w-[calc(50vw-80px)]">
        <BookingForm />
        <section className="lg:hidden">
          <BookingDetail />
        </section>
        <section className="hidden lg:flex justify-between py-8 px-4">
          <button className="button-ghost" onClick={handlePrev}>
            Back
          </button>
          <button className="button-primary" onClick={handleNext}>
            Next
          </button>
        </section>
      </div>
      <div className="hidden lg:flex">
        <BookingDetail />
      </div>
      <section className="flex  lg:hidden justify-between py-8 px-4  bg-white">
        <button className="button-ghost" onClick={handlePrev}>
          Back
        </button>
        <button className="button-primary" onClick={handleNext}>
          Next
        </button>
      </section>
    </section>
  );
}
export default BasicInformation;
