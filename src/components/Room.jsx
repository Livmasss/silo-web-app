import "../public/styles/room.css"
import React, {useState} from "react";
import {subscribeRoomVisitors} from "../ws";

function Room(props) {
    // subscribeRoomVisitors(showVisitors, "26955292-b121-4f46-a0c9-51e47462972f")

    return (
        <div className="room">
            {props.createdRoomIdState ? <div>Номер комнаты: {props.createdRoomIdState}</div>: null}

            <section>
                <p>Игроки:</p>
                <p>{props.players.length}/10</p>
                {/*<p>{props.visitorState}</p>*/}
                <div>
                    {
                        props.players.map((value, index) => {
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

    function showVisitors(value) {
        props.setVisitorState(value)
    }
}

export default Room