import { Link } from "react-router-dom";
import { navLinksData } from "./aside.data";
import "./Aside.scss";

export default function Aside() {
  return (
    <div className="aside">
       <h2 className="aside_moviePageName">MOVIE<p className="aside_movieNameMate">MATE</p></h2>
      <ul className="aside_ul">
        {navLinksData.map(({ title, to, icon }) => (
          <li className="aside_allFilms" key={to}>
            <Link to={to} className="aside_links">
              {icon}
              {title}
            </Link>
          </li>
        ))}
      </ul>
       <input className="aside_signUp" type="submit" value="SIGN UP" />
       <input className="aside_signIn" type="submit" value="SIGN IN" />
   
    </div>
  );
}
