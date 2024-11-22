"use client";
import Link from "next/link";
import { NavList } from "./navlist";
import { ArrowDownIcon, NotificationIcon, SearchIcon } from "@/svg";
import { useNav } from "@/hooks/useNav";

export const revalidate = 3600;
export const Navbar = () => {
  const { toggle, loggedIn, setLoggedIn, avaterRef, toggleFuction } = useNav();

  return (
    <div className="navbar">
      <div className="navbar__flex">
        <Link href="/">
          <p className="logo">MIE</p>
        </Link>
        <ul className="navlist">
          <NavList />
        </ul>
      </div>

      <div className="navbar__actions">
        {loggedIn ? (
          <>
            <span onClick={() => setLoggedIn(!loggedIn)}>
              <SearchIcon />
            </span>
            <div className="notification">
              <NotificationIcon />
              <span className="dot"></span>
            </div>
            <div
              className="avater__cont"
              ref={avaterRef}
              onClick={toggleFuction}
            >
              <span className="avater">
                <p className="avater__text">M</p>
              </span>
              <span className={`avater-chevron${toggle ? "-active" : ""}`}>
                <ArrowDownIcon />
              </span>
              {toggle && (
                <div
                  className={`avater-modal ${toggle ? "open" : ""}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button onClick={() => setLoggedIn(!loggedIn)}>LogOut</button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <button onClick={() => setLoggedIn(!loggedIn)}>Login</button>
            <span>/</span>
            <button>SignUP</button>
          </>
        )}
      </div>
    </div>
  );
};
