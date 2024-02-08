import { NavLink } from "react-router-dom";
import { navLinksData } from "./aside.data";
import { FaPen } from "react-icons/fa";
import img from "../../../assets/Images/bookmark.png";

import "./Aside.scss";

export default function Aside() {
  return (
    <div className="aside">
      <h2 className="aside_moviePageName">
        MOVIE<span>MATE</span>
      </h2>
      <div className="aside_user">
        <img className="aside_userImg" src={img} alt="" />
        <div className="aside_userInfo">
          <span className="aside_userName">Adriano Celentano</span>
          <FaPen className="aside_userEditIcon" />
        </div>
      </div>
      <ul className="nav">
        {navLinksData.map(({ title, to, icon }) => (
          <li key={to}>
            <NavLink to={to} className="nav_link">
              <p>
                {icon}&nbsp;&nbsp;
                {title}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
      <input className="aside_signIn" type="submit" value="Sign In" />
    </div>
  );
}
