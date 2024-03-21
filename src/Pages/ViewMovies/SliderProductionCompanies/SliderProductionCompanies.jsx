import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderProductionCompanies({ productionCompanies }) {
  const imgBaseURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div style={{ marginTop: "10px" }}>
      <h2>Production Companies</h2>
      {productionCompanies.map((company) => (
        <div
          style={{ marginTop: "10px", display: "flex" }}
          key={company.id}
          className="home_carousel_item">
          <div style={{}} className="home_carousel_caption">
            <img
              src={`${imgBaseURL}${company.logo_path}`}
              alt={company.name}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain",
              }}
            />
            <div className="home_carousel_caption_info">
              <span>{company.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
