import { useState } from "react";

function CommentsCarousel() {
  const comments = [
    {
      name: "John Snow",
      detail:
        "lorem ipsum dolor sit amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint, velit official consequat duis enim velit mollit, exercitation minim amet consequat sunt",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      name: "Taylor Swift",
      detail:
        "velit official consequat duis enim velit mollit, exercitation minim amet consequat sunt",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
    {
      name: "Tsusumiya Haruhi",
      detail:
        "lorem ipsum dolor sit amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint, velit official consequat duis enim velit mollit, exercitation minim amet consequat sunt",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  let index;
  const prevComment = () => {
    const isFirstComment = currentIndex == 0;
    const newIndex = isFirstComment ? comments.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextComment = () => {
    const isLastComment = currentIndex == comments.length - 1;
    const newIndex = isLastComment ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel relative flex flex-col w-full h-[100%]">
      <div className="carousel-item w-full h-[70%] flex flex-col items-center">
        <button
          onClick={prevComment}
          className="absolute top-[20%] left-[10%] w-20 h-20 hidden lg:flex items-center justify-center text-orange-500 text-4xl font-bold border-4 border-orange-500 rounded-full"
        >
          ←
        </button>
        <button
          onClick={nextComment}
          className="absolute top-[20%] right-[10%] w-20 h-20 hidden lg:flex items-center justify-center text-orange-500 text-4xl font-bold border-4 border-orange-500 rounded-full"
        >
          →
        </button>
        <div className="flex flex-row justify-center gap-5 lg:py-10">
          <p className="text-center text-pretty text-[0.8rem] lg:font-bold lg:text-[1.75rem] lg:w-[60%]">
            {comments[currentIndex].detail}
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-5 py-5 lg:scale-[1.5]">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={comments[currentIndex].image} />
            </div>
          </div>
          <p className="text-black/30 text-[0.75rem]">
            {comments[currentIndex].name}
          </p>
        </div>
        <div className="flex w-full justify-center gap-4 lg:gap-8 py-3 lg:scale-[1.5] lg:pt-[30px]">
          <div
            className={`w-3 h-3 rounded-full ${(index =
              0 == currentIndex ? "bg-black/30" : "bg-black/10")}`}
          ></div>
          <div
            className={`w-3 h-3 rounded-full ${(index =
              1 == currentIndex ? "bg-black/30" : "bg-black/10")}`}
          ></div>
          <div
            className={`w-3 h-3 rounded-full ${(index =
              2 == currentIndex ? "bg-black/30" : "bg-black/10")}`}
          ></div>
        </div>
      </div>
      <div className="flex flex-row self-center h-[10%] justify-self-end gap-10 w-fit py-3">
        <button
          onClick={prevComment}
          className="w-14 h-14 flex lg:hidden items-center justify-center text-orange-500  text-2xl  font-bold border border-orange-500 rounded-full"
        >
          ←
        </button>
        <button
          onClick={nextComment}
          className="w-14 h-14 flex lg:hidden items-center justify-center text-orange-500 text-2xl font-bold border border-orange-500 rounded-full"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default CommentsCarousel;
