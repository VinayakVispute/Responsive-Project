"use client";

import { createContext, useState } from "react";

import DicussionForum from "@/components/DicussionForum";
import MarketStories from "@/components/MarketStories";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

export const SideBarContext = createContext();

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex">
      <SideBarContext.Provider
        value={{ expanded, setExpanded, activeIndex, handleItemClick }}
      >
        <NavBar />
        <SideBar />
        <main className="ml-1 mx-24 mt-24 sm:mt-4 static w-full gap-2 mr-4 h-screen overflow-y-scroll ">
          <div className="sm:grid sm:grid-cols-[3fr_1fr] sm:grid-rows-1">
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
      </SideBarContext.Provider>
    </div>
  );
}
