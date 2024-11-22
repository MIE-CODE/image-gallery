"use client";
import { BulletIcon, ChevronDownIon } from "@/svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const NavList = () => {
  const router = usePathname();
  const [toggle, setToggle] = useState(false);
  const categoryRef = useRef<HTMLLIElement>(null);
  const toggleFuction = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    const handleAvaterClick = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current?.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handleAvaterClick);
    return () => document.removeEventListener("click", handleAvaterClick);
  }, [setToggle, toggle]);

  const linkStyle = (path: string) => (router === path ? "active" : "");
  return (
    <>
      <li className={`navlist__a ${linkStyle("/")}`}>
        <Link href="/">Home</Link>
      </li>
      <li className={`navlist__a ${linkStyle("/gallery")}`}>
        <Link href="/gallery">Gallery</Link>
      </li>
      <li ref={categoryRef} className="navlist__a" onClick={toggleFuction}>
        <p className="category-text">
          Categories{" "}
          <span className={`category-icon ${toggle ? "open" : ""}`}>
            <ChevronDownIon />
          </span>
        </p>
        <div
          className={`category-modal ${toggle ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="category-g">
            <p className="category-g-text__H">
              <BulletIcon /> By group
            </p>
            <ul>
              <Link href={"/search/nature"} className="category-g-text__M">
                <li>Nature</li>
              </Link>
              <li className="category-g-text__M">Events</li>
              <li className="category-g-text__M">Portraits</li>
              <li className="category-g-text__M">Abstract </li>
            </ul>
          </div>
          <div className="category-g">
            <p className="category-g-text__H">
              <BulletIcon /> By group
            </p>
            <ul>
              <li className="category-g-text__M">Nature</li>
              <li className="category-g-text__M">Events</li>
              <li className="category-g-text__M">Portraits</li>
              <li className="category-g-text__M">Abstract </li>
            </ul>
          </div>
          <div className="category">
            <p className="category-g-text__H">
              <BulletIcon /> By group
            </p>
            <ul>
              <li className="category-g-text__M">Nature</li>
              <li className="category-g-text__M">Events</li>
              <li className="category-g-text__M">Portraits</li>
              <li className="category-g-text__M">Abstract </li>
            </ul>
          </div>
        </div>
      </li>
      <li className={`navlist__a ${linkStyle("/featured")}`}>
        <Link href="/featured">Featured</Link>
      </li>
      <li className={`navlist__a ${linkStyle("/about")}`}>
        <Link href="/about">About</Link>
      </li>
      <li className={`navlist__a ${linkStyle("/contact")}`}>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );
};
