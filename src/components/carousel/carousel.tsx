import React, { PropsWithChildren } from "react";

interface CarouselProps {
  children: PropsWithChildren<unknown>;
}

export const Carousel = (props: PropsWithChildren<CarouselProps>) => {
  return <div>{props.children} </div>;
};
