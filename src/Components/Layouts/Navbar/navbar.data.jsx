import ROUTES from "../../../routes";
import { BsFacebook, BsYoutube, BsInstagram, BsTelegram } from "react-icons/bs";
export const navLinksData = [
    {
      title: "All Films",
      to: ROUTES.ALLFILMS,
    },
    {
      title: "All About",
      to: ROUTES.ABOUT,
    },
    {
      title: " All News",
      to: ROUTES.NEWS,
    },
    {
      title: "All Social",
      to: ROUTES.SOCIAL,
    },
  ];
  

  export const navIconData=[
    {
        to:"https://www.facebook.com/",
        icon:<BsFacebook/>,
    },
    {
        to:"https://www.youtube.com/",
        icon:<BsYoutube/>,
    },
    {
        to:"https://www.instagram.com",
        icon:<BsInstagram/>,
    },
    {
        to:"https://web.telegram.org/k/",
        icon:<BsTelegram/>,
    },
  ]