import { GiFilmStrip } from "react-icons/gi";
import ROUTES from "../../../routes";
import { PiFilmSlateBold } from "react-icons/pi";

export const navLinksData = [
  {
    title: "Home",
    to: ROUTES.HOME,
  },
  {
    title: "Movies",
    to: ROUTES.MOVIES,
    icon: <GiFilmStrip />,
  },
  {
    title: "Tv Shows",
    to: ROUTES.NEWS,
  },
  {
    title: "Documents",
    to: ROUTES.DOCUMENTS,
  },
  {
    title: "Saved Films",
    to: ROUTES.SAVEDFILMS,
    icon:<PiFilmSlateBold />
  },
];
