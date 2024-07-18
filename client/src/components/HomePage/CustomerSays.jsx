import CommentsCarousel from "./CustomerSaysCarousel";

function CustomerSays() {
  return (
    <section className="bg-green-100 box-border p-5  h-[calc(100dvh-48px)] lg:h-[calc(100dvh-100px)]">
      <div className="flex flex-col items-center justify-center p-5 gap-5 lg:p-10">
        <h1 className="flex items-start text-4xl h-fit sm:text-6xl lg:text-[5rem] font-bold text-center p-5 lg:py-5">
          Our Customer Says
        </h1>
        <div className="w-full h-[60%] lg:h-[80%]">
          <CommentsCarousel />
        </div>
      </div>
    </section>
  );
}


export default CustomerSays;
