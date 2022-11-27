import { useState } from "preact/hooks";

import "./app.css";

export function App() {
  const [star1, setStar1] = useState(true);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);
  const [val, setVal] = useState(1);
  const Star1 = () => {
    setStar1(true);
    setStar2(false);
    setStar3(false);
    setStar4(false);
    setStar5(false);
  };

  const Star2 = () => {
    setStar1(true);
    setStar2(true);
    setStar3(false);
    setStar4(false);
    setStar5(false);
  };

  const Star3 = () => {
    setStar1(true);
    setStar2(true);
    setStar3(true);
    setStar4(false);
    setStar5(false);
  };

  const Star4 = () => {
    setStar1(true);
    setStar2(true);
    setStar3(true);
    setStar4(true);
    setStar5(false);
  };

  const Star5 = () => {
    setStar1(true);
    setStar2(true);
    setStar3(true);
    setStar4(true);
    setStar5(true);
  };

  return (
    <div className="bg-gradient-to-b rounded-lg from-gray-800  to-black  pb-6">
      <div className="flex p-5 gap-[3rem] ">
        <div className={star1 ? "p-2 rounded-3xl bg-gray-700" : "hidden"}>
          <img
            className={star1 ? "block" : "hidden"}
            src="/icon-star.svg"
            alt=""
          />
        </div>
        <div className={star2 ? "p-2 rounded-3xl bg-gray-700" : "hidden"}>
          <img
            className={star2 ? "block" : "hidden"}
            src="/icon-star.svg"
            alt=""
          />
        </div>
        <div className={star3 ? "p-2 rounded-3xl bg-gray-700" : "hidden"}>
          <img
            className={star3 ? "block" : "hidden"}
            src="/icon-star.svg"
            alt=""
          />
        </div>
        <div className={star4 ? "p-2 rounded-3xl bg-gray-700" : "hidden"}>
          <img
            className={star4 ? "block" : "hidden"}
            src="/icon-star.svg"
            alt=""
          />
        </div>
        <div className={star5 ? "p-2 rounded-3xl bg-gray-700" : "hidden"}>
          <img
            className={star5 ? "block" : "hidden"}
            src="/icon-star.svg"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-white text-3xl p-5">How did we do?</h1>
      <p className="text-gray-400 px-5 ">
        Please let us know how we did your <br /> support request. All feedback
        is appreciated <br /> to help us improve our offering!
      </p>
      <div className="flex gap-10 mt-5 p-5">
        <button
          className={
            val == 1
              ? "bg-orange-500 rounded-[10rem] w-10 h-10"
              : "bg-gray-700 hover:text-white hover:bg-gray-400 transition-all text-gray-400 rounded-[10rem] w-10 h-10"
          }
          onClick={() => {
            Star1();
            setVal(1);
          }}
        >
          1
        </button>
        <button
          className={
            val == 2
              ? "bg-orange-500 rounded-[10rem] w-10 h-10"
              : "bg-gray-700 hover:text-white hover:bg-gray-400 transition-all text-gray-400 rounded-[10rem] w-10 h-10"
          }
          onClick={() => {
            Star2();
            setVal(2);
          }}
        >
          2
        </button>
        <button
          className={
            val == 3
              ? "bg-orange-500 rounded-[10rem] w-10 h-10"
              : "bg-gray-700 hover:text-white hover:bg-gray-400 transition-all text-gray-400 rounded-[10rem] w-10 h-10"
          }
          onClick={() => {
            Star3();
            setVal(3);
          }}
        >
          3
        </button>
        <button
          className={
            val == 4
              ? "bg-orange-500 rounded-[10rem] w-10 h-10"
              : "bg-gray-700 hover:text-white hover:bg-gray-400 transition-all text-gray-400 rounded-[10rem] w-10 h-10"
          }
          onClick={() => {
            Star4();
            setVal(4);
          }}
        >
          4
        </button>
        <button
          className={
            val == 5
              ? "bg-orange-500 rounded-[10rem] w-10 h-10"
              : "bg-gray-700 hover:text-white hover:bg-gray-400 transition-all text-gray-400 rounded-[10rem] w-10 h-10"
          }
          onClick={() => {
            Star5();
            setVal(5);
          }}
        >
          5
        </button>
      </div>
<a href={`/thank/${val}`}>
<div
        id="button"
        className="flex  mt-8 hover:cursor-pointer items-center justify-center rounded-3xl bg-orange-500 h-[40px] text-center w-[70%] mx-auto text-white"
      >
        SUBMIT
      </div>
</a>
   
    </div>
  );
}
