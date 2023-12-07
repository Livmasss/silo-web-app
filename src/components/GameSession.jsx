import "../public/styles/game.css"

import ic_gender from '../public/imgs/ic_gender.svg'
import ic_health from '../public/imgs/ic_health.svg'
import ic_personality from '../public/imgs/ic_personality.svg'
import ic_profession from '../public/imgs/ic_profession.svg'
import ic_hobby from '../public/imgs/ic_hobby.svg'
import ic_phobia from '../public/imgs/ic_phobia.svg'
import ic_inventory from '../public/imgs/ic_inventory.svg'
import ic_information from '../public/imgs/ic_information.svg'
import ic_action from '../public/imgs/ic_action.svg'

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
                        <img src={ic_gender} alt="gender"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Здоровье
                    <div className="card_icon">
                        <img src={ic_health} alt="health"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Черта характера
                    <div className="card_icon">
                        <img src={ic_personality} alt="personality"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Специальность
                    <div className="card_icon">
                        <img src={ic_profession} alt="profession"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Хобби
                    <div className="card_icon">
                        <img src={ic_hobby} alt="hobby"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Фобия
                    <div className="card_icon">
                        <img src={ic_phobia} alt="pfobia"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Инвентарь
                    <div className="card_icon">
                        <img src={ic_inventory} alt="inventory"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Доп. сведения
                    <div className="card_icon">
                        <img src={ic_information} alt="information"/>
                    </div>
                    Описание
                </div>
                <div className="card">
                    Спец. возможность
                    <div className="card_icon">
                        <img src={ic_action} alt="action"/>
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