import Room from "../Room";
import GameSession from "../GameSession";
import React from "react";

function Game(props) {
    const [gameStarted, setGameStarted] = React.useState(false)
    const onClickVisibility = () =>
        setGameStarted(true)

    return (
        <div>
            {!gameStarted ? <Room callback={onClickVisibility} players={["Первый игрок", "Второй игрок", "Третий игрок"]}/>: null}
            {gameStarted ? <GameSession specialState={props.specialState}/>: null}
        </div>
    )
}

export default Game