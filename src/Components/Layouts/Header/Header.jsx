import "./Header.scss";

export function AppSelect({ data }) {
  return (
    <select>
      {data.map((el) => (
        <option key={el}>{el}</option>
      ))}
    </select>
  );
}

export default function Header() {
  return (
    <div className="header">
      <header className="header_wrap">
        <h3 className="header_allFilms">Film</h3>
        <div className="header_allCategory">
          <AppSelect  data={["All Category", "fgergs","sadas","sadas"]} />

          <select className="header_allDate" name="" id="">
            <option value="">ALL Date</option>
            <option value="">asjdvas</option>
            <option value="">asjdvas</option>
            <option value="">asjdvas</option>
          </select>
          <AppSelect data={["All Date", "fgergs", "All Category", "fgergs"]}/>

          <select className="header_allCountry" name="" id="">
            <option value="">All Country</option>
            <option value="">kashbdksh</option>
            <option value="">kashbdksh</option>
          </select>

          <select className="header_allLanguage" name="" id="">
            <option value="">All language</option>
            <option value="">dasda</option>
            <option value="">dasda</option>
          </select>

          <select className="header_allChgidem" name="" id="">
            <option value="">All chgidem</option>
            <option value="">dsad</option>
            <option value="">dsad</option>
          </select>
        </div>
      </header>
    </div>
  );
}
