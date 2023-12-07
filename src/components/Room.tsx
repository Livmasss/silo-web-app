
function Room() {
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
            <form method="post" action="/pages/Game">
                <input type="submit" value="Start game"/>
            </form>
        </div>
    )
}



export default Room