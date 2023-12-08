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

import PlayerPropertyCard from "./PlayerPropertyCard";
import {Component} from "react";



function GameSession(props) {



    const getPlayerProp = (key) => {
        if (props.state === null) {
            return null
        }
        return props.state[key]
    }

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
                    <PlayerPropertyCard id="gender_card" img={ic_gender} alt="gender" name="Пол"
                                        desc={getPlayerProp("gender")}/>
                    <PlayerPropertyCard id="health_card" img={ic_health} alt="health" name="Здоровье"
                                        desc={getPlayerProp("health")}/>
                    <PlayerPropertyCard id="personality_card" img={ic_personality} alt="personality"
                                        name="Черта характера" desc={getPlayerProp("personality")}/>
                    <PlayerPropertyCard id="profession_card" img={ic_profession} alt="profession"
                                        name="Специальность" desc={getPlayerProp("profession")}/>
                    <PlayerPropertyCard id="hobby_card" img={ic_hobby} alt="hobby" name="Хобби"
                                        desc={getPlayerProp("hobby")}/>
                    <PlayerPropertyCard id="phobia_card" img={ic_phobia} alt="phobia" name="Фобия"
                                        desc={getPlayerProp("phobia")}/>
                    <PlayerPropertyCard id="inventory_card" img={ic_inventory} alt="inventory" name="Инвентарь"
                                        desc={getPlayerProp("inventory")}/>
                    <PlayerPropertyCard id="information_card" img={ic_information} alt="information"
                                        name="Доп. сведения" desc={getPlayerProp("information")}/>
                    <PlayerPropertyCard id="action_card" img={ic_action} alt="action" name="Спец. возможность"
                                        desc={getPlayerProp("action")}/>
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