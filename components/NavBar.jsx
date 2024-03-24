import { useContext } from "react";

import { SideBarContext } from "@/app/page";
import navBarItems from "@/constants/navBarItems";

const NavBar = () => {
  const { activeIndex, handleItemClick } = useContext(SideBarContext);

  return (
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
  );
};

export default NavBar;
