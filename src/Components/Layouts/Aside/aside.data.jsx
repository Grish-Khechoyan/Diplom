import { LuPopcorn } from "react-icons/lu";
import ROUTES from "../../../routes";
import { CiSaveDown2 } from "react-icons/ci";
import { FaDesktop, FaStar } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

export const navLinksData = [
  {
    title: "Home",
    to: ROUTES.HOME,
    icon: <IoHome />,
  },
  {
    title: "Movies",
    to: ROUTES.MOVIES,
    icon: <LuPopcorn />,
  },
  {
    title: "Tv Shows",
    to: ROUTES.TVSHOWS,
    icon: <FaDesktop />,
  },
  {
    title: "Rating",
    to: ROUTES.RATING,
    icon: <FaStar />,
  },
  {
    title: "Saved Films",
    to: ROUTES.SAVEDFILMS,
    icon: <CiSaveDown2 />,
  },
];
