import { Link } from "react-router-dom";
import "../App.css";

const FrontPage = () => {
  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "images/bicycles.jpg"})`,
    height: "100vh",
    marginTop: "-80px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };


  return (
    <div style={backgroundImage}>
      <div className="navbar">
        <p className="front-title">Helsinki Citybike</p>
      </div>
      <div className="journey-station-front">
        <div className="journey-front">
          <Link to={`/journey`} className="journey-station-links">
            <p className="link-front">Journeys list</p>
          </Link>
        </div>
        <div>
          <Link to={`/station`} className="journey-station-links">
            <p className="link-front">Stations list</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
