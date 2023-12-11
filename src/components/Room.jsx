import "../public/styles/room.css"

function Room(props) {
    return (
        <div className="room">
            <section>
                <p>Игроки:</p>
                <p>{props.players.length}/10</p>
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
}

export default Room