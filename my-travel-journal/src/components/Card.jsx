import "../App.css";
import pin from "../assets/pinpoint.png";

export default function Card(props) {
  return (
    <div className="card-container">
      <img
        className="card-img"
        src={props.imageUrl}
        alt={`Picture of ${props.title}`}
      />
      <div className="card-stats">
        <div className="card-location">
          <img className="card-pin" src={pin} alt="map pinpoint" />
          <h4>{props.location}</h4>
          <p>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </p>
        </div>
        <h2 className="card-title" >{props.title}</h2>
        <p className="card-dates">{`${props.startDate} - ${props.endDate}`}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
