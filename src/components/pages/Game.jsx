import Room from "../Room";
import GameSession from "../GameSession";
import React from "react";

function Game(props) {

    const onClickVisibility = () => {
        if (props.createdRoomIdState)
            props.setGameStarted(true)
    }

    return (
        <div>
            {!props.gameStarted ? <Room visitorState={props.visitorState} createdRoomIdState={props.createdRoomIdState} startGameCallback={onClickVisibility}/>: null}
            {props.gameStarted ? <GameSession specialState={props.specialState}/>: null}
        </div>
    )
}

export default Game