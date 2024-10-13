import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import close from "../assets/icons/close.png";
import menu from "../assets/icons/menu.png";
import cart from "../assets/icons/cart.png";
import profile from "../assets/icons/profile.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LoginPopup from "./LoginPopup";
import Search from "./Search";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import search from "../assets/icons/search.png";
import Cart from "./Cart";

let list = [
  { name: "Home", path: "" },
  { name: "About Us", path: "about" },
  { name: "Product", path: "product" },
  { name: "Contact Us", path: "contact" },
];

function Navbar() {
  const [ham, setHam] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const cartRef = useRef(null);
  const AnimatePop = motion(LoginPopup);
  const [pane, setPane] = useState(false);
  const { user, loginWithRedirect } = useAuth0();

  const userData = useSelector((state) => state.auth.userData);
  const cartLength = useSelector((state) => state.cart.cartItems.length);

  useEffect(() => {
    if (user) {
      setVisible(false);
    } else {
      let showPop = setTimeout(() => {
        setVisible(true);
      }, 1500);
      let hidePop = setTimeout(() => {
        setVisible(false);
      }, 7000);

      return () => {
        clearTimeout(showPop);
        clearTimeout(hidePop);
      };
    }
  }, [user]);

  function handleHam() {
    setHam(!ham);
  }

  function toggle() {
    setPane(!pane);
  }

  if (pane) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    function exit(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest(".hamburger")
      ) {
        setHam(false);
      }
      if (
        cartRef.current &&
        !cartRef.current.contains(e.target) &&
        !e.target.closest(".cart")
      ) {
        setPane(false);
      }
    }
    document.addEventListener("click", exit);
    return () => {
      document.removeEventListener("click", exit);
    };
  }, [setHam]);

  return (
    <>
      <div className="fixed top-0 z-20 w-full flex text-black justify-around items-center backdrop-blur-sm py-3 md:p-3 shadow-lg">
        <NavLink to="" className="flex cursor-pointer">
          <img loading="lazy" className="w-8 md:w-9" src={logo1} alt="" />
          <span className="md:pl-2 pt-1 text-lg md:text-xl font-bold">
            NextGen
          </span>
        </NavLink>
        <div className="flex justify-center gap-5 md:gap-6 items-center">
          <div onClick={handleHam} className="hamburger sm:hidden">
            {ham ? (
              <img
                loading="lazy"
                className="w-6 md:w-7 p-1"
                src={close}
                alt="close"
              />
            ) : (
              <img
                loading="lazy"
                className="w-6 md:w-7"
                src={menu}
                alt="menu"
              />
            )}
          </div>
          <ul
            ref={menuRef}
            onClick={handleHam}
            className={`absolute sm:static top-16 right-2 z-10 flex flex-col sm:flex-row sm:gap-5 gap-1 ${
              ham
                ? "flex bg-black/70 text-white px-7 py-5 rounded-lg sm:bg-transparent sm:text-current sm:px-0 sm:py-0 sm:rounded-none"
                : "hidden sm:flex"
            }`}
          >
            {list.map((item, id) => {
              return (
                <div key={id} className="relative">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-emerald-600 active" : ""
                      } navline max-w-max text-lg font-semibold md:text-xl font-quicksand hover:text-emerald-600`
                    }
                  >
                    {item.name}
                  </NavLink>
                </div>
              );
            })}
          </ul>
          <div className="hidden xl:block">
            <Search />
          </div>
          <img
            className="w-5 md:w-[22px] cursor-pointer xl:hidden"
            src={search}
            alt=""
          />
          <div
            onClick={() => {
              userData ? navigate("/profile") : loginWithRedirect();
            }}
            className={`${
              user
                ? ""
                : "hover:bg-pink-500 hover:invert p-[6px] cursor-pointer active:bg-pink-600 rounded-md "
            } flex justify-center items-center gap-2`}
          >
            {user?.picture ? (
              <img
                className="w-8 cursor-pointer rounded-full"
                src={user.picture}
              />
            ) : (
              <img className="cursor-pointer w-5 md:w-6" src={profile} />
            )}
            {user ? (
              ""
            ) : (
              <span className="text-base md:text-lg font-quicksand font-semibold ">
                Login
              </span>
            )}
          </div>
          {visible && (
            <AnimatePop
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`animate-bounce duration-100 absolute top-16 right-0 md:right-[95px] drop-shadow-md`}
            />
          )}
          <img
            onClick={() => setPane(true)}
            className="cart cursor-pointer hidden md:block w-[26px]"
            src={cart}
            alt="cart"
          />
          ({cartLength})
        </div>
        {pane && (
          <div
            ref={cartRef}
            className={`absolute right-0 top-0 z-50 w-[30%] h-screen shadow-[-3px_0_10px_0px_rgba(0,0,0,0.3)] bg-slate-100 transition-all duration-500 ease-linear ${
              pane ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Cart toggle={toggle} />
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
