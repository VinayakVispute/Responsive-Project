import { MdOutlineTextsms } from "react-icons/md";
import { LuCircleDollarSign } from "react-icons/lu";

const sideBarItems = [
  {
    text: "Discussion Forum",
    icon: MdOutlineTextsms,
    active: true,
  },
  {
    text: "Market Stories",
    icon: LuCircleDollarSign,
    active: false,
  },
  {
    text: "Sentiment",
    icon: null,
    active: false,
  },
  {
    text: "Market",
    icon: null,
    active: false,
  },
  {
    text: "Sector",
    icon: null,
    active: false,
  },
  {
    text: "Watchlist",
    icon: null,
    active: false,
  },
  {
    text: "Events",
    icon: null,
    active: false,
  },
  {
    text: "News/Interview",
    icon: null,
    active: false,
  },
];

export default sideBarItems;
