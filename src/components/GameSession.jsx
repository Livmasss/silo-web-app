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



class GameSession extends Component {
    getPlayerProp(key) {
        if (this.props.state === null) {
            return null
        }
        console.log(this.props.state["player_data"][key])
        return this.props.state["player_data"][key]
    }
    render() {
        console.log(this.props.state || "Описание")

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
                                            desc={this.getPlayerProp("gender")}/>
                        <PlayerPropertyCard id="health_card" img={ic_health} alt="health" name="Здоровье"
                                            desc={this.getPlayerProp("health")}/>
                        <PlayerPropertyCard id="personality_card" img={ic_personality} alt="personality"
                                            name="Черта характера" desc={this.getPlayerProp("personality")}/>
                        <PlayerPropertyCard id="profession_card" img={ic_profession} alt="profession"
                                            name="Специальность" desc={this.getPlayerProp("profession")}/>
                        <PlayerPropertyCard id="hobby_card" img={ic_hobby} alt="hobby" name="Хобби"
                                            desc={this.getPlayerProp("hobby")}/>
                        <PlayerPropertyCard id="phobia_card" img={ic_phobia} alt="phobia" name="Фобия"
                                            desc={this.getPlayerProp("phobia")}/>
                        <PlayerPropertyCard id="inventory_card" img={ic_inventory} alt="inventory" name="Инвентарь"
                                            desc={this.getPlayerProp("inventory")}/>
                        <PlayerPropertyCard id="information_card" img={ic_information} alt="information"
                                            name="Доп. сведения" desc={this.getPlayerProp("information")}/>
                        <PlayerPropertyCard id="action_card" img={ic_action} alt="action" name="Спец. возможность"
                                            desc={this.getPlayerProp("action")}/>
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
}

export default GameSession