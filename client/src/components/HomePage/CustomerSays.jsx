import CommentsCarousel from "./CustomerSaysCarousel";

function CustomerSays() {
  return (
    <section className="bg-green-100 box-border justify-center">
      <div className="flex flex-col items-center justify-center p-5 gap-5 lg:p-10 w-full h-[calc(100dvh-48px)] lg:h-[calc(100dvh-100px)]">
        <h1 className="flex items-center text-4xl h-[30%] lg:text-[5rem] font-bold text-center p-5 lg:py-5">
          Our Customer Says
        </h1>
        <div className="h-[70%] w-full">
          <CommentsCarousel />
        </div>
      </div>
    </section>
  );
}

export default CustomerSays;
