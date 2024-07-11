import CommentsCarousel from "./CustomerSaysCarousel";

function CustomerSays() {
  return (
    <section className="bg-green-100 box-border">
      <div className="flex flex-col items-center lg:justify-center p-5 gap-5 lg:p-10 w-full h-[calc(100dvh-48px)] lg:h-[100dvh]">
        <h1 className="flex items-start text-5xl h-fit lg:text-[5rem] font-bold text-center p-5 lg:py-5">
          Our Customer Says
        </h1>
        <div className="w-full h-[60dvh] lg:h-[80dvh]">
          <CommentsCarousel />
        </div>
      </div>
    </section>
  );
}

export default CustomerSays;
