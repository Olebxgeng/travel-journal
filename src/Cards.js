import * as Icon from 'react-bootstrap-icons';
import "./Cards.css"

export default function Card(props) {
    return(
        <div className="container">
            <img src={props.imageUrl} alt={props.title}/>
            <main className="travel-description">
                <div className="location-details">
                    <Icon.GeoAltFill fill='#F55A5A' width= "10px"height= "9.545px"/>
                    <p>{props.location}</p>
                    <a className='g-maps' href='{props.googleMapsUrl}'>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className='dates'>{props.startDate} - {props.endDate}</p>
                <p className='description'>{props.description}</p>
            </main>
        </div>
    )

    
}