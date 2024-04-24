import Room from "../Room";
import GameSession from "../GameSession";

function Game(props) {

    const onClickVisibility = () => {
        props.setGameStarted(true)
    }

    return (
        <div>
            {!props.gameStarted ? <Room isHostState={props.isHostState} visitorState={props.visitorState} createdRoomIdState={props.roomIdState} startGameCallback={onClickVisibility}/>: null}
            {props.gameStarted ? <GameSession setVotesState={props.setVotesState} votesState={props.votesState} openDataState={props.openDataState} setOpenDataState={props.setOpenDataState} specialState={props.specialState} isHost={props.isHostState} roomIdState={props.roomIdState} playerIdState={props.playerIdState}/>: null}
        </div>
    )
}

export default Game