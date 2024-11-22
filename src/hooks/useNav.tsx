import { useEffect, useRef, useState } from "react";

export const useNav = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [toggle, setToggle] = useState(false);
  const avaterRef = useRef<HTMLDivElement>(null);

  const toggleFuction = () => {
    setTimeout(() => setToggle(!toggle), 200);
  };

  useEffect(() => {
    const handleAvaterClick = (event: MouseEvent) => {
      if (
        avaterRef.current &&
        !avaterRef.current?.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handleAvaterClick);
    return () => document.removeEventListener("click", handleAvaterClick);
  }, [setToggle, toggle]);

  return { toggleFuction, toggle, loggedIn, setLoggedIn, avaterRef };
};
