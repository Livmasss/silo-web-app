
function Room(props) {
    return (
        <div>
            <section>
                <p>Игроки:</p>
                <p>2/10</p>
                <div className="player_list">
                    Игрок1
                    Игрок2
                </div>
            </section>

            <button type="submit" value="Start game" onClick={props.callback}/>
        </div>
    )
}

export default Room