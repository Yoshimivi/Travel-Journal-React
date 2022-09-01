import data from '../../data'
import './Card.css'

export function Card(props) {
  return (
    <>
      <div id='cardContainer'>
        <img className='locationImg' src={props.imageUrl} alt="" />
        <div>
          <div className="location">
            <img src="/ping-icon.svg" alt="" />
            <p>{props.location.toUpperCase()}</p>
            <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
          </div>
          <h1>{props.title}</h1>
          <p className="date">{props.startDate} - {props.endDate}</p>
          <p className="infos">{props.description}</p>
        </div>
      </div>
      <hr />
    </>
  )
}