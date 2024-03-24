"use client";
import React, { createContext, useContext, useState } from "react";
import { LuChevronFirst, LuChevronLast, LuBell } from "react-icons/lu";

import sideBarItems from "@/constants/sideBarItems"; // Adjust the import path according to your project structure
import navBarItems from "@/constants/navBarItems";

import DicussionForum from "@/components/DicussionForum";
import MarketStories from "@/components/MarketStories";

const SideBarContext = createContext();
export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="">
      {/* ======NavBar Starts==== */}
      <nav className=" shadow-md w-full fixed top-0 left-0 z-10 sm:hidden">
        <div className=" bg-white py-4 md:px-10 px-4">
          <ul className="flex flex-grow justify-evenly">
            {navBarItems.map((item, index) => (
              <li
                key={index}
                className={`relative flex justify-start items-center py-2 px-1 my-1 font-medium rounded-md cursor-pointer transition-colors text-sm ${
                  activeIndex == index
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-600"
                } `}
                onClick={() => handleItemClick(index)}
              >
                <item.icon size={24} />
                <span className="text-gray-800 mx-2 text-center hover:text-gray-400 duration-500  text-xs  sm:text-lg">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* ======NavBar Ends==== */}
      {/* ======Side Bar Starts==== */}
      <SideBarContext.Provider
        value={{ expanded, activeIndex, handleItemClick }}
      >
        <div className="flex">
          <aside className="fixed h-screen flex z-10">
            <nav
              className={`h-full flex flex-col bg-white border-r shadow-sm overflow-hidden transition-all ${
                expanded ? "max-w-52" : "w-0"
              }`}
            >
              <div className="border-b flex p-3 py-4 mb-6">
                <img
                  src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <div
                  className={`flex justify-between items-center overflow-hidden transition-all ${
                    expanded ? "w-52" : "w-0"
                  }`}
                >
                  <div className="leading-4">
                    <h4 className="text-sm px-2">Hello, John Doe</h4>
                  </div>
                  <LuBell fill="white" size={20} className="" />
                  <span className="relative end-2  -top-2 h-2 w-2 z-100 rounded-full bg-red-500"></span>
                </div>
              </div>
              <ul className="flex-1 px-3">
                {sideBarItems.map((item, index) => (
                  <SidebarItem key={index} item={item} index={index} />
                ))}
              </ul>
            </nav>
            <button
              className="my-auto h-16 rounded-sm w-4 bg-blue-600"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {!expanded ? <LuChevronFirst /> : <LuChevronLast />}
            </button>
          </aside>
          {/* ======SideBar Ends==== */}
          {/* ======MainStarts==== */}
          <main className="ml-4 mt-24 sm:mt-4 sm:static w-full gap-2 mr-4">
            <div className="sm:grid sm:grid-cols-[3fr_280px] sm:grid-rows-1">
              {/* For screens above sm breakpoint */}
              <div className="hidden sm:block">
                <DicussionForum />
              </div>
              <div className="hidden sm:block">
                <MarketStories />
              </div>
              {/* For screens below sm breakpoint */}
              <div className="sm:hidden">
                {activeIndex === 0 ? <DicussionForum /> : <MarketStories />}
              </div>
            </div>
          </main>
        </div>
      </SideBarContext.Provider>
    </div>
  );
}

function SidebarItem({ item, index }) {
  const { expanded, activeIndex, handleItemClick } = useContext(SideBarContext);
  const { icon: Icon, text } = item;

  const isActive = index === activeIndex;

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors text-sm ${
        isActive
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      } `}
      onClick={() => handleItemClick(index)}
    >
      {Icon ? <Icon size={24} /> : <div className="ml-4" />}
      <span className={`ml-3 ${expanded ? "w-52" : "w-0"} overflow-hidden`}>
        {text}
      </span>
    </li>
  );
}
