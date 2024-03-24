import { useContext } from "react";

import { SideBarContext } from "@/app/page";
import sideBarItems from "@/constants/sideBarItems";

import { LuChevronFirst, LuChevronLast, LuBell } from "react-icons/lu";

const SideBar = () => {
  const { expanded, setExpanded } = useContext(SideBarContext);
  return (
    <aside className="fixed sm:static h-screen flex z-10 ">
      <nav
        className={`h-full flex flex-col bg-white border-r shadow-sm overflow-hidden transition-all ${
          expanded ? "max-w-48 " : "w-0"
        }`}
      >
        {/* min-[320px]:text-center max-[600px]:bg-sky-300 */}
        {/* "max-w-52 sm:[700px]:max-w-48 md:min-w-[100px] sm:mid-md:bg-green-800" */}
        {/* md:max-xl:flex */}
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
        {expanded ? <LuChevronFirst /> : <LuChevronLast />}
      </button>
    </aside>
  );
};

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

export default SideBar;
