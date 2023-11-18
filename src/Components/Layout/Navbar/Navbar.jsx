import { Link } from "react-router-dom";
import ROUTES from "../../routes";
import { BsFacebook, BsYoutube, BsInstagram, BsTelegram } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.FILMS}>Movie Mate</Link>
          </li>
          <li>
            <AiOutlineSearch />
            <input type="search" name="" id="" placeholder="Search" />
          </li>
          <li>
            <Link to={ROUTES.FILMS}>All Films</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>All ABOUT</Link>
          </li>
          <li>
            <Link to={ROUTES.NEWS}>All NEWS</Link>
          </li>
          <li>
            <Link to={ROUTES.SOCIAL}>All SOCIAL</Link>
          </li>
          <li>
            <Link to={"https://www.facebook.com/"}>
              <BsFacebook />
            </Link>
          </li>
          <li>
            <Link to={"https://www.youtube.com/"}>
              <BsYoutube />
            </Link>
          </li>
          <li>
            <Link to={"https://www.instagram.com"}>
              <BsInstagram />
            </Link>
          </li>
          <li>
            <Link to={"https://web.telegram.org/k/"}>
              <BsTelegram />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
