import Room from "../Room";
import GameSession from "../GameSession";
import React from "react";

function Game(props) {
    const [gameStarted, setGameStarted] = React.useState(false)
    const onClickVisibility = () =>
        setGameStarted(true)

    return (
        <div>
            {!gameStarted ? <Room callback={onClickVisibility} players={["100000000000000000", "200000000000000000", "300000000000000000"]}/>: null}
            {gameStarted ? <GameSession specialState={props.specialState}/>: null}
        </div>
    )
}

export default Game