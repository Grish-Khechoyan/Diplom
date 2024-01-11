import { Link } from "react-router-dom";
import { GiFilmStrip } from "react-icons/gi";
import { PiFilmSlateBold } from "react-icons/pi";
import ROUTES from "../../../routes";

import "./Aside.scss"

export default function Aside() {
  return (
    <div className="aside">
      <h2 className="aside_filmPageName">Movie Mate</h2>
      <p className="aside_films">Films</p>
      <ul className="aside_ul">
        <li className="aside_allFilms">
          <Link to={ROUTES.ALLFILMS}>
            <GiFilmStrip />
            All Films
          </Link>
        </li>
        <li className="aside_features">
          <Link to={ROUTES.FEATURES}>Features</Link>
        </li>
        <li className="aside_documents">
          <Link to={ROUTES.DOCUMENTS}>Documents</Link>
        </li>
        <li className="aside_savedFilms">
          <Link to={ROUTES.SAVEDFILMS}>
            <PiFilmSlateBold />
            Saved Films
          </Link>
        </li>
      </ul>
      <input className="aside_signUp" type="submit" value="SIGN UP" />
      <input className="aside_signIn" type="submit" value="SIGN IN " />
    </div>
  );
}
