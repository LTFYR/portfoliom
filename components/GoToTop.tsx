import React, { useEffect } from "react";
import { TbChevronRight } from "react-icons/tb";

const GoToTop = () => {
  useEffect(() => {
    const goToTop = document.querySelector(".scrollBTN") as HTMLElement;
    window.onscroll = () => {
      scrollTopFunction();
    };
    const scrollTopFunction = () => {
      if (
        document.body.scrollTop > 360 ||
        document.documentElement.scrollTop > 360
      ) {
        goToTop.style.display = " block";
      } else {
        goToTop.style.display = " none";
      }
    };
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    goToTop?.addEventListener("click", () => {
      scrollTop();
    });
  }, []);

  return (
    <div className="w-12 h-12 z-50 text-3xl fixed top-[85vh] right-10 bg-black text-gray-50 hover:text-white rounded-full border-[1px] border-yellow-500 shadow-shadow scrollBTN hidden hover:border-yellow-500 duration-200">
      <button className="w-full h-full flex items-center justify-center relative -rotate-90">
        <TbChevronRight />
      </button>
    </div>
  );
};

export default GoToTop;
