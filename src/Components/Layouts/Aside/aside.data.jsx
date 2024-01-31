import { GiFilmStrip } from "react-icons/gi";
import ROUTES from "../../../routes";
import { PiFilmSlateBold } from "react-icons/pi";

export const navLinksData = [
  {
    title: "All Films",
    to: ROUTES.FILMS,
    icon: <GiFilmStrip />,
  },
  {
    title: "Features",
    to: ROUTES.FEATURES,
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
