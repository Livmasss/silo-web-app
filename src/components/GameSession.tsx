import "../styles/game.css"
function GameSession() {
    return (
        <main className="connection">
            <div className="game">
            <h1>Бункер</h1>
            <div className="table">
                <table id="overview_table">
                    <tbody>
                        <tr>
                            <td>Игрок</td>
                            <td>Пол</td>
                            <td>Здоровье</td>
                            <td>Человеческая черта</td>
                            <td>Специальность</td>
                            <td>Хобби</td>
                            <td>Фобия</td>
                            <td>Инвентарь</td>
                            <td>Доп. сведения</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="properties">
                <div className="card">
                    Пол
                    <div className="card_icon">
                        <img src="../imgs/ic_gender.svg" alt="gender"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Здоровье
                    <div className="card_icon">
                        <img src="../imgs/ic_health.svg" alt="health"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Черта характера
                    <div className="card_icon">
                        <img src="../imgs/ic_person.svg" alt="person"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Специальность
                    <div className="card_icon">
                        <img src="../imgs/ic_profession.svg" alt="profession"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Хобби
                    <div className="card_icon">
                        <img src="../imgs/ic_hobby.svg" alt="hobby"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Фобия
                    <div className="card_icon">
                        <img src="../imgs/ic_pfobia.svg" alt="profession"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Инвентарь
                    <div className="card_icon">
                        <img src="../imgs/ic_inventory.svg" alt="inventory"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Доп. сведения
                    <div className="card_icon">
                        <img src="../imgs/ic_information.svg" alt="information"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Спец. возможность
                    <div className="card_icon">
                        <img src="../imgs/ic_action.svg" alt="action"/>
                    </div>
                    Описание
                </div>
            </div>

            <div className="table">
                <table id="auxiliary_table">
                    <tbody>
                        <tr>
                            <td>Выбор</td>
                            <td>Игрок</td>
                            <td>Голоса</td>
                            <td>Спец. возможность</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </main>
    )
}

export default GameSession