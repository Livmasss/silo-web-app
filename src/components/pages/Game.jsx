import Room from "../Room";
import GameSession from "../GameSession";
import React from "react";
import {subscribeRoomVisitors} from "../../ws";
import {getConnectRoomId} from "../../roomManager";

function Game(props) {
    const [gameStarted, setGameStarted] = React.useState(false)

    const onClickVisibility = () =>
        setGameStarted(true)

    return (
        <div>
            {!gameStarted ? <Room visitorState={props.visitorState} createdRoomIdState={props.createdRoomIdState} callback={onClickVisibility}/>: null}
            {gameStarted ? <GameSession specialState={props.specialState}/>: null}
        </div>
    )
}

export default Game