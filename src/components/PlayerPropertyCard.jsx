import React from "react";
import { sendOpenPropertyMessage } from "../ws";

function PlayerPropertyCard(props) {
    return (
        <div className="card" onClick={clickCallback}>
            {props.name}
            <div className="card_icon">
                <img src={props.img} alt={props.alt}/>
            </div>
            {props.desc}
        </div>
    )

    
    function clickCallback() {
        sendOpenPropertyMessage(props.roomIdState, props.playerIdState, props.property_id)
    }
}

export default PlayerPropertyCard