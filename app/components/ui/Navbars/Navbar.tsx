"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./Navbarstyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faSearch,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import CartModal from "../Modals/CartModal";
import ModalLog from "../Modals/ModalLogin";
import ModalReg from "../Modals/ModalRegister";
import UserModal from "../Modals/UserModal";
import SideMenuModal from "../Modals/SideMenuModal";
import SearchModal from "../Modals/SearchModal";
import NavMsg from "./NavMsg";

const Navbar = () => {
  const router = useRouter();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle Cart, User And Search Opening and closing
  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
    setIsSearchOpen(false);
  };
  const handleSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsCartOpen(false);
  };

  // Handle swarch params
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <nav className=" flex flex-col w-screen md:w-full p-4 max-h-80 bg-gradient-to-r from-slate-100/75 to-slate-200/75 backdrop-blur-lg sticky top-0 z-10">
      {/* MODALS SECTION IN LARGER SCREENS */}
      <div className=" hidden md:flex md:flex-row justify-end items-end  md:space-x-4  ">
        <div className="flex flex-row space-x-4 m-2 ">
          <Link href="">
            <FontAwesomeIcon icon={faPhone} />
          </Link>
          <div className="h-6 w-0.5 bg-black"></div>
          <Link
            href="https://wa.me/message/WFDBTOE677NNL1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </Link>
          <div className="h-6 w-0.5 bg-black"></div>
          {/* Guides Dropdown */}
          <div className="dropdown">
            <button className="dropbtnHelp">Help</button>
            <div className="dropdown-content-other z-50 animate-appearance-in">
              <Link
                href="/contact"
                className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
              >
                Contact us
              </Link>
              <Link
                href="/faq"
                className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
              >
                FAQ&apos;s
              </Link>
              <Link
                href="/fit-guide"
                className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
              >
                Size Guide
              </Link>
              <Link
                href="/care-tips"
                className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
              >
                Care Tips
              </Link>
            </div>
          </div>
        </div>
        <ModalLog />
        <ModalReg />
      </div>
      {/* CONTAINER FOR LINKS and LOGO FOR LARGER SCREENS */}
      <div className="hidden md:flex flex-row items-center justify-between w-full ">
        {/* LOGO CONTAINER */}
        <div
          className="bg-[url('/logo.jpg')] bg-center bg-cover h-[80px] w-[80px] rounded-full cursor-pointer"
          onClick={() => router.push("/")}
        ></div>
        {/* MAIN LINKS */}
        <div className="flex-1 flex justify-center px-4">
          <div className="navbar">
            <Link href="/">Home</Link>
            {/* Shop All dropdown */}
            <div className="dropdown">
              <button className="dropbtn">Shop All</button>
              <div className="dropdown-content p-4 z-50 animate-appearance-in">
                {/* Featured */}
                <div className="flex flex-col p-2 space-y-2">
                  <h1 className="text-gray-500 font-semibold my-2">Featured</h1>
                  <Link
                    href=""
                    className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    New Arrivals
                  </Link>
                  <Link
                    href=""
                    className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    Sale
                  </Link>
                  <Link
                    href=""
                    className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    Bags
                  </Link>
                  <Link
                    href="/products/gift-cards"
                    className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    Gift Cards
                  </Link>
                </div>
                {/* Category */}
                <div className="flex flex-col p-2 space-y-2">
                  <h1 className="text-gray-500 font-semibold my-2">
                    By Category
                  </h1>
                  <Link
                    href=""
                    className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    Swim Tops
                  </Link>
                  <Link
                    href=""
                    className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    Swim Bottoms
                  </Link>
                  <Link
                    href=""
                    className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    Swim One Pieces
                  </Link>
                  <Link
                    href=""
                    className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    Beachwear Tops
                  </Link>
                  <Link
                    href=""
                    className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    Beachwear Bottoms
                  </Link>
                </div>
                {/* Size */}
                <div className="flex flex-col p-2 space-y-2">
                  <h1 className="text-gray-500 font-semibold my-2">By Size</h1>
                  <Link
                    href=""
                    className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    AA - B
                  </Link>
                  <Link
                    href=""
                    className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    C - DDD
                  </Link>
                  <Link
                    href=""
                    className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    E - G
                  </Link>
                  <Link
                    href="/fit-guide"
                    className="font-medium hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    Our Size Guide &rarr;
                  </Link>
                </div>
                {/* Something Special */}
                <div className="flex flex-col p-2 space-y-2">
                  <h1 className="text-gray-500 font-semibold my-2">
                    Something Special
                  </h1>
                  <Link
                    href=""
                    className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    Valentine&apos;s Special
                  </Link>
                  <Link
                    href=""
                    className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    One of One Pieces
                  </Link>
                </div>
              </div>
            </div>
            {/* Mens Dropdown */}
            <div className="dropdown">
              <button className="dropbtn">Men</button>
              <div className="dropdown-content-other z-50 animate-appearance-in">
                <Link
                  href=""
                  className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                >
                  All Mens
                </Link>
                <Link
                  href=""
                  className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                >
                  Swimwear
                </Link>
                <Link
                  href=""
                  className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                >
                  Accessories
                </Link>
              </div>
            </div>
            {/* Womens Dropdown */}
            <div className="dropdown">
              <button className="dropbtn">Women</button>
              <div className="dropdown-content-other z-50 animate-appearance-in ">
                <a
                  href="#"
                  className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                >
                  All Women
                </a>
                <div className="subdropdown ">
                  <a
                    href="#"
                    className="subdroplink hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                  >
                    One Pieces
                  </a>
                  <div className="subdropdown-content animate-appearance-in">
                    <Link
                      href=""
                      className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                    >
                      Monokini
                    </Link>
                    <Link
                      href=""
                      className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                    >
                      Bikini
                    </Link>
                  </div>
                </div>
                <div className="subdropdown">
                  <a
                    href="#"
                    className="subdroplink hover:translate-x-2 duration-500 hover:underline decoration-slate-500 "
                  >
                    Two Pieces
                  </a>
                  <div className="subdropdown-content animate-appearance-in">
                    <Link
                      href=""
                      className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                    >
                      Bikini
                    </Link>
                    <Link
                      href=""
                      className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                    >
                      Burkini
                    </Link>
                    <Link
                      href=""
                      className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                    >
                      Monokini
                    </Link>
                  </div>
                </div>
                <div className="subdropdown">
                  <a
                    href="#"
                    className="subdroplink hover:translate-x-2 duration-500 hover:underline decoration-slate-500 "
                  >
                    Three Pieces
                  </a>
                  <div className="subdropdown-content animate-appearance-in">
                    <Link
                      href=""
                      className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                    >
                      Bikini
                    </Link>
                    <Link
                      href=""
                      className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                    >
                      Burkini
                    </Link>
                    <Link
                      href=""
                      className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                    >
                      Tankini
                    </Link>
                  </div>
                </div>
                <div className="subdropdown">
                  <a
                    href="#"
                    className="subdroplink hover:translate-x-2 duration-500 hover:underline decoration-slate-500 "
                  >
                    Four Pieces
                  </a>
                  <div className="subdropdown-content animate-appearance-in">
                    <Link
                      href=""
                      className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                    >
                      Burkini
                    </Link>
                  </div>
                </div>
                <div className="subdropdown">
                  <a
                    href="#"
                    className="subdroplink hover:translate-x-2 duration-500 hover:underline decoration-slate-500 "
                  >
                    Cover Ups & Shorts
                  </a>
                  <div className="subdropdown-content animate-appearance-in">
                    <Link
                      href=""
                      className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                    >
                      Cover Ups
                    </Link>
                    <Link
                      href=""
                      className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                    >
                      Beach Pants
                    </Link>
                    <Link
                      href=""
                      className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                    >
                      Beach Shorts
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Kids Dropdown */}
            <div className="dropdown">
              <button className="dropbtn">Children</button>
              <div className="dropdown-content-other z-50 animate-appearance-in">
                <Link
                  href=""
                  className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                >
                  All Children
                </Link>
                <Link
                  href=""
                  className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                >
                  Swimwear
                </Link>
                <Link
                  href=""
                  className="hover:translate-x-2 duration-500 hover:underline decoration-slate-500"
                >
                  Accessories
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH FORM */}
        <div className="flex">
          <form className="items-center lg:flex hidden" onSubmit={handleSearch}>
            <input
              className="form-input px-4 py-2 placeholder-slate-500  rounded-lg border border-gray-300"
              type="search"
              name="name"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              id=""
              name=""
              className="px-4 py-2 bg-black hover:opacity-85 text-white rounded-lg ml-2"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        {/* Cart and Favourites */}
        <div className="flex flex-row text-lg space-x-4 p-2 m-2 ">
          {/* Sm Search */}
          <div className="lg:hidden">
            <FontAwesomeIcon
              icon={faSearch}
              className="cursor-pointer"
              onClick={handleSearchOpen}
            />
            {isSearchOpen && (
              <div className="absolute right-8 z-50 animate-appearance-in">
                <form
                  className="flex justify-between p-2 rounded-md flex-1"
                  onSubmit={handleSearch}
                >
                  <input
                    type="search"
                    name="name"
                    placeholder="Type to search"
                    className="rounded-3xl p-2 flex-1 outline-none focus:border-gray-800 focus:border"
                  />
                  <button
                    type="submit"
                    className="m-2 text-slate-400 hover:font-medium"
                  >
                    Search
                  </button>
                </form>
              </div>
            )}
          </div>
          <div className="relative">
            <Link href="">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
          <div className="relative">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="cursor-pointer"
              onClick={handleCartOpen}
            />
            {isCartOpen && <CartModal />}
            <div className="absolute -top-3 -right-4 w-5 h-5 bg-pink-600 rounded-full items-center justify-center text-center text-white text-sm">
              2
            </div>
          </div>
        </div>
      </div>

      {/* CONTAINER FOR SMALL SCREEN NAV */}
      <div className=" flex flex-col space-y-4 md:hidden w-full">
        {/* <NavMsg /> */}

        {/* CONTAINER FOR WELCOME MSG AND QUICK LINKS */}
        <div className=" flex flex-col h-max justify-center items-center text-center">
          {/* TEXT */}
          <div className="font-bold text-xl">
            <Link href="/">URBANESWIM KENYA</Link>
          </div>
        </div>

        {/* SM CONTAINER FOR LINKS AND LOGO */}
        <div className=" flex sm:flex-row md:hidden  items-center justify-between w-full">
          {/* Menu toggler */}
          <SideMenuModal />

          {/* CART, SEARCH ACCOUNT AND WISHLIST */}
          <div className="flex flex-row space-x-4 p-2 m-2">
            {/* SEARCH */}
            <button>
              <SearchModal />
            </button>
            <button>
              <UserModal />
            </button>
            <Link href="">
              <FontAwesomeIcon icon={faHeart} className="w-[20px] h-[20px]" />
            </Link>
          </div>
          {/* Image container */}
          {/* <div className="bg-[url('/logo.jpg')] bg-center bg-cover h-[65px] w-[65px] rounded-full cursor-pointer" onClick={() => router.push('/')}></div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
