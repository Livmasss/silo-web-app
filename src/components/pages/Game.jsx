import Navigation from "../Navigation";
import Room from "../Room";
import GameSession from "../GameSession";
import {useEffect, useState} from "react";

function Game() {
    return (
        <div>
            <Navigation/>

            <Room/>
            <GameSession/>
        </div>
    )
}

export default Game