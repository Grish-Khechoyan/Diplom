import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { navIconData, navLinksData } from "./navbar.data";
import "./Navbar.scss";
import { useState } from "react";
import { search } from "../../../services/example.service";
import AllFilms from "../../../Pages/All Films/AllFilms";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);

  const handleSearchMovie = async (e) => {
    e.preventDefault();
    try {
      const searchData = await search(searchValue);
      setSearchMovie(searchData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  console.log(searchMovie);
  return (
    <div className="navbar">
      <nav className="navbar_navigation">
        <ul className="navigation_ul">
          {/* <h2 className="navbar_filmPageName">Movie Mate</h2> */}
          <form onSubmit={handleSearchMovie} className="navigation_search">
            <AiOutlineSearch className="search_icon" />
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              className="navigation_search_input"
              type="search"
              name=""
              id=""
              placeholder="Find your movie"
            />
          </form>
          {/* <ul className="navigation_menuList">
            {navLinksData.map(({ title, to }) => (
              <li className="navigation_menu" key={to}>
                <Link className="navigation_link" to={to}>
                  {title}
                </Link>
              </li>
            ))}
          </ul> */}
          {/* <ul className="navigation_iconList">
            {navIconData.map(({ to, icon }) => (
              <li className="navigation_icon" key={to}>
                <Link className="navigation_icon_link" to={to}>
                  {icon}
                </Link>
              </li>
            ))}
          </ul> */}
        </ul>
      </nav>
      {searchMovie.length != 0 && <AllFilms searchMovie={searchMovie} />}
    </div>
  );
}
