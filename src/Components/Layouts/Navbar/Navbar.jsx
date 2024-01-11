import { Link } from "react-router-dom";
import { BsFacebook, BsYoutube, BsInstagram, BsTelegram } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import ROUTES from "../../../routes";

import "./Navbar.scss"

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar_navigation">
        <ul className="navigation_ul">
          <li className="navigation_search">
            <AiOutlineSearch />
            <input type="search" name="" id="" placeholder="Search" />
          </li>
          <li className="navigation_allFilms">
            <Link to={ROUTES.FILMS}>All Films</Link>
          </li>
          <li className="navigation_allAbout">
            <Link to={ROUTES.ABOUT}>All ABOUT</Link>
          </li>
          <li className="navigation_allNews">
            <Link to={ROUTES.NEWS}>All NEWS</Link>
          </li>
          <li className="navigation_allSocial">
            <Link to={ROUTES.SOCIAL}>All SOCIAL</Link>
          </li>
          <li className="navigation_icon_FB">
            <Link to={"https://www.facebook.com/"}>
              <BsFacebook />
            </Link>
          </li>
          <li className="navigation_icon_YouTube">
            <Link to={"https://www.youtube.com/"}>
              <BsYoutube />
            </Link>
          </li>
          <li className="navigation_icon_Inst">
            <Link to={"https://www.instagram.com"}>
              <BsInstagram />
            </Link>
          </li>
          <li className="navigation_icon_TG">
            <Link to={"https://web.telegram.org/k/"}>
              <BsTelegram />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
