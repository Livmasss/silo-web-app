import Room from "../Room";
import GameSession from "../GameSession";
import React from "react";
import {initWSClient} from "../../ws";
import {getConnectRoomId} from "../../roomManager";

function Game(props) {
    const [gameStarted, setGameStarted] = React.useState(false)

    const onClickVisibility = () =>
        setGameStarted(true)

    return (
        <div>
            {!gameStarted ? <Room setVisitorState={props.setVisitorState} visitorState={props.visitorState} createdRoomIdState={props.createdRoomIdState} callback={onClickVisibility} players={["Первый игрок", "Второй игрок", "Третий игрок"]}/>: null}
            {gameStarted ? <GameSession specialState={props.specialState}/>: null}
        </div>
    )
}

export default Game