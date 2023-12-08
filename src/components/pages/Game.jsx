import Navigation from "../Navigation";
import Room from "../Room";
import GameSession from "../GameSession";
import {useEffect, useState} from "react";

function Game() {
    const [state, setState] = useState(null);

    const callBackendAPI = async () => {
        const response = await fetch('/game_info');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    useEffect(() => {
        callBackendAPI()
            .then(res => {
                setState(res)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <Navigation/>

            <Room/>
            <GameSession state ={state}/>
        </div>
    )
}

export default Game