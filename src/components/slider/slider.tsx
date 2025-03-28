"use client";
import React, { useEffect } from "react";

type SliderProps = {
  title: string;
  backwards?: boolean;
  border?: boolean;
  mt?: boolean;
  mb?: boolean;
};

export const Slider: React.FC<SliderProps> = ({
  mt,
  mb,
  border,
  backwards,
}) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".carousel");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
    function addAnimation() {
      if (!scrollers) return;
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".carousel-inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          // duplicatedItem.textContent = "solover";
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div
      className={`carousel ${border && "border"} ${mt && "topmargin"} ${
        mb && "bottommargin"
      } `}
      data-direction="right"
    >
      <div className={`carousel-inner ${backwards ? "bw" : "fw"}`}>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <div className="carousel-item" key={i} />
          ))}
      </div>
    </div>
  );
};
