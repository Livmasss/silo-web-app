import "../public/styles/room.css"
import React, {useState} from "react";

function Room(props) {
    return (
        <div className="room">
            {props.createdRoomIdState ? <div>Номер комнаты: {props.createdRoomIdState}</div>: null}

            <section>
                <p>Игроки:</p>
                <p>{props.visitorState.length}/10</p>
                <div>
                    {
                        props.visitorState.map((value, index) => {
                            return <div className="player_elem">
                                {index !== 0 ? ', '+value : value}
                            </div>
                        })
                    }
                </div>
            </section>

            <button onClick={props.callback}>Start game</button>
        </div>
    )
}

export default Room