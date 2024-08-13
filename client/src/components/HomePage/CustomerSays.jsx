import CommentsCarousel from "./CustomerSaysCarousel";

function CustomerSays() {
  return (
    <section className="bg-green-100 box-border flex flex-col justify-evenly items-center p-5 h-[calc(100dvh-48px)] lg:h-[calc(100dvh-100px)]">
      <h1 className="text-4xl h-fit sm:text-5xl lg:text-[5rem] font-bold text-center">
        Our Customer Says
      </h1>
      <div className="p-5 gap-5 lg:p-10 ">
        <div className="w-full">
          <CommentsCarousel />
        </div>
      </div>
    </section>
  );
}

export default CustomerSays;
