import { useEffect, useState, useRef } from "react";
import JohnSnowImage from "../../assets/images/HomePage/JohnSnow.png";
import TaylorSwiftImage from "../../assets/images/HomePage/TaylorSwift.png";
import SuzumiyaHaruhiImage from "../../assets/images/HomePage/SuzumiyaHaruhi.png";

function CommentsCarousel() {
  const comments = [
    {
      name: "John Snow",
      detail: "I am the sword in the darkness, the watcher on the walls.",
      image: JohnSnowImage,
    },
    {
      name: "Taylor Swift",
      detail: "It's me. Hi! I'm the problem. It's me.",
      image: TaylorSwiftImage,
    },
    {
      name: "Tsusumiya Haruhi",
      detail:
        "Watashi tsuiteiku yo donna tsurai sekai no yami no naka de sae kitto anata wakagayaite.",
      image: SuzumiyaHaruhiImage,
    },
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 8000);
  };

  const prevComment = () => {
    const isFirstComment = index === 0;
    const newIndex = isFirstComment ? comments.length - 1 : index - 1;
    setIndex(newIndex);
    resetInterval();
  };

  const nextComment = () => {
    const isLastComment = index === comments.length - 1;
    const newIndex = isLastComment ? 0 : index + 1;
    setIndex(newIndex);
    resetInterval();
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-full flex flex-col items-center">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {comments.map((comment, i) => {
          return (
            <div
              key={i}
              className={`relative flex-shrink-0 w-full flex flex-col gap-6 items-center justify-center p-8 `}
            >
              <div className="flex flex-col items-center max-w-lg text-center gap-6">
                <p className="text-green-700 text-pretty text-xl font-bold min-w-[50%] max-w-[80%] text-center body-1">
                  {comment.detail}
                </p>
                <figure className="flex flex-row w-full justify-center items-center gap-6">
                  <img
                    src={comment.image}
                    alt={comment.name}
                    className="w-20 h-20 rounded-full "
                  />
                  <h2 className="text-xl text-slate-300 font-bold">
                    {comment.name}
                  </h2>
                </figure>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex w-full justify-center gap-4 lg:gap-8 py-3 lg:pt-[30px]">
        <div
          className={`w-3 h-3 rounded-full ${
            index == 0 ? "bg-black/30" : "bg-black/10"
          }`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${
            index == 1 ? "bg-black/30" : "bg-black/10"
          }`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${
            index == 2 ? "bg-black/30" : "bg-black/10"
          }`}
        ></div>
      </div>
      <div>
        <button
          onClick={prevComment}
          className="absolute top-[20%] pb-2 left-[5%] w-20 h-20 hidden lg:flex items-center justify-center text-orange-500 text-4xl font-bold border-4 border-orange-500 rounded-full"
        >
          ←
        </button>
        <button
          onClick={nextComment}
          className="absolute top-[20%] pb-2 right-[5%] w-20 h-20 hidden lg:flex items-center justify-center text-orange-500 text-4xl font-bold border-4 border-orange-500 rounded-full"
        >
          →
        </button>
      </div>
      <div className="flex flex-row items-center justify-center lg:hidden h-[10%] gap-20 w-fit py-3">
        <button
          onClick={prevComment}
          className="w-14 h-14 flex pb-1 text-orange-500 items-center justify-center text-2xl  font-bold border-2 border-orange-500 rounded-full"
        >
          ←
        </button>
        <button
          onClick={nextComment}
          className="w-14 h-14 flex pb-1 text-orange-500 items-center justify-center text-2xl font-bold border-2 border-orange-500 rounded-full"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default CommentsCarousel;
