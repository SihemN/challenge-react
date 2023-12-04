/* eslint-disable react/prop-types */
// import useState from react;
// import CardList from "./CardList.jsx"
import "./card.css";

function Card ({data}) {
        return(
            <ul className="ul">
                {data.map((card,index) =>(
                   <div key={index}>
                   {/* <card id={CardList.id}/> */}
                   <img src = {card.image} ></img>
                   <h1>{card.title}</h1>
                   <p>{card.description}</p>
                   </div>
                ))}
            </ul>
        )}
export default Card;

