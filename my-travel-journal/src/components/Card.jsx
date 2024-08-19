import '../App.css'
import pin from '../assets/pinpoint.png'

export default function Card(props) {

    return (
        <div className='card'>
            <img src={props.imageUrl} alt={`Picture of ${props.title}`} />
            <img src={pin} alt="map pinpoint" />
            <h4>{props.location}</h4>
            <p><a href={props.googleMapsUrl}>View on Google Maps</a></p>
            <h2>{props.title}</h2>
            <p>{`${props.startDate} - ${props.endDate}`}</p>
            <p>{props.description}</p>
        </div>
    )
}

// title: "Mount Fuji",
//         location: "Japan",
//         googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//         startDate: "12 Jan, 2021",
//         endDate: "24 Jan, 2021",
//         description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//         imageUrl: "htt