import { Component } from "react";
import '../style/card.css';

class Card extends Component {

    render(){
        const {id, name, email} = this.props.monster;
        return (
            <div className="card-container" key={id}>
                <img 
                    alt = {`${name}`}
                    src={`https://robohash.org/${id}?set=set2`}
                />
                <h2 >{name}</h2> 
                <p>{email}</p>
            </div>      
        );
    }

}

export default Card;