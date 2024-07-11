import BookingForm from "./BookingForm";
import BookingDetail from "./BookingDetail";

function BasicInformation() {
  return (
    <main className="box-border lg:pb-10 lg:flex lg:flex-row lg:justify-evenly lg:px-[160px] lg:gap-10 bg-slate-100">
      <div className="flex flex-col bg-white lg:w-[calc(50vw-80px)]">
        <BookingForm />
        <section className="lg:hidden">
          <BookingDetail />
        </section>
        <section className="flex flex-row justify-between p-5">
          <button className="text-orange-500 font-bold">Back</button>
          <button className="bg-orange-600 text-white p-3 px-8 rounded-md">Next</button>
        </section>
      </div>
      <div className="hidden lg:flex">
        <BookingDetail />
      </div>
    </main>
  );
}
export default BasicInformation;
