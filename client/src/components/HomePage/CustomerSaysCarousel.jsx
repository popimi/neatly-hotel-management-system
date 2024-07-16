import { useEffect, useState } from "react";

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

  const [index, setIndex] = useState(0);
  const prevComment = () => {
    const isFirstComment = index == 0;
    const newIndex = isFirstComment ? comments.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const nextComment = () => {
    const isLastComment = index == comments.length - 1;
    const newIndex = isLastComment ? 0 : index + 1;
    setIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative overflow-hidden w-full h-full flex flex-col items-center">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {comments.map((comment, i) => {
          return (
            <>
              <div
                key={i}
                className={`relative flex-shrink-0 w-full h-96 flex flex-col gap-6 items-center justify-center p-8 `}
              >
                <div className="flex flex-col max-w-lg text-center gap-6">
                  <p className="text-gray-700">{comment.detail}</p>
                  <figure className="flex flex-row w-full justify-center items-center gap-6">
                    <img
                      src={comment.image}
                      alt={comment.name}
                      className="w-20 h-20 rounded-full"
                    />
                    <h2 className="text-xl text-slate-300 font-bold">
                      {comment.name}
                    </h2>
                  </figure>
                </div>
                <div className="flex w-full justify-center gap-4 lg:gap-8 py-3 lg:scale-[1.5] lg:pt-[30px]">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      i == 0 ? "bg-black/30" : "bg-black/10"
                    }`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      i == 1 ? "bg-black/30" : "bg-black/10"
                    }`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      i == 2 ? "bg-black/30" : "bg-black/10"
                    }`}
                  ></div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div>
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
      </div>
      <div className="flex flex-row items-center justify-center lg:hidden h-[10%] gap-20 w-fit py-3">
        <button
          onClick={prevComment}
          className="w-14 h-14 flex text-orange-500 items-center justify-center  text-2xl  font-bold border-2 border-orange-500 rounded-full"
        >
          ←
        </button>
        <button
          onClick={nextComment}
          className="w-14 h-14 flex text-orange-500 items-center justify-center text-2xl font-bold border-2 border-orange-500 rounded-full"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default CommentsCarousel;
