import "../public/styles/room.css"
import React from "react";
import {sendStartGameMessage} from "../ws";

function Room(props) {

    return (
        <div className="room">
            {props.isHostState ? <div>Номер комнаты: {props.createdRoomIdState}</div>: null}

            <section>
                <p>Игроки:</p>
                <p>{props.visitorState.length}/10</p>
                <div>
                    {
                        props.visitorState.map((value, index) => {
                            return <div className="player_elem"
                            key={value}>
                                {index !== 0 ? ', '+value : value}
                            </div>
                        })
                    }
                </div>
            </section>

            {props.isHostState ? <button onClick={startGame}>Start game</button>: null}
        </div>
    )

    function startGame() {
        props.startGameCallback()
        sendStartGameMessage(props.createdRoomIdState)
    }
}

export default Room