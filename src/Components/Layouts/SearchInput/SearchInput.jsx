import { AiOutlineSearch } from "react-icons/ai";
import "./SearchInput.scss";

export default function SearchInput({ value, onTextChange }) {
  return (
    <div className="search">
      <AiOutlineSearch className="search_icon" />

      <input
        value={value}
        onChange={(e) => onTextChange(e.target.value)}
        className="search_input"
        type="search"
        placeholder="Find your movie"
      />
    </div>
  );
}
