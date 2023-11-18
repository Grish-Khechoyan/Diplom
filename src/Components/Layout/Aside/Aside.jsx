import { Link } from "react-router-dom";
import ROUTES from "../../routes";
import { GiFilmStrip } from "react-icons/gi";
import { PiFilmSlateBold } from "react-icons/pi";
export default function Aside() {
  return (
    <div>
      <h2>Movie Mate</h2>
      <p>Films</p>
      <ul>
        <li>
          <Link to={ROUTES.ALLFILMS}><GiFilmStrip />All Films</Link>
        </li>
        <li>
          <Link to={ROUTES.FEATURES}>Features</Link>
        </li>
        <li>
          <Link to={ROUTES.DOCUMENTS}>Documents</Link>
        </li>
        <li>
          <Link to={ROUTES.SAVEDFILMS}><PiFilmSlateBold />Saved Films</Link>
        </li>
      </ul>
      <input type="submit" value="SIGN UP" />
      <input type="submit" value="SIGN IN " />
    </div>
  );
}
