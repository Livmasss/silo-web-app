import "../public/styles/game.css"

import ic_gender from '../public/imgs/icons/classic/ic_gender.svg'
import ic_health from '../public/imgs/icons/classic/ic_health.svg'
import ic_personality from '../public/imgs/icons/classic/ic_personality.svg'
import ic_profession from '../public/imgs/icons/classic/ic_profession.svg'
import ic_hobby from '../public/imgs/icons/classic/ic_hobby.svg'
import ic_phobia from '../public/imgs/icons/classic/ic_phobia.svg'
import ic_inventory from '../public/imgs/icons/classic/ic_inventory.svg'
import ic_information from '../public/imgs/icons/classic/ic_information.svg'
import ic_action from '../public/imgs/icons/classic/ic_action.svg'

import ic_gender_special from '../public/imgs/icons/special/ic_gender.svg'
import ic_health_special from '../public/imgs/icons/special/ic_health.svg'
import ic_personality_special from '../public/imgs/icons/special/ic_personality.svg'
import ic_profession_special from '../public/imgs/icons/special/ic_profession.svg'
import ic_hobby_special from '../public/imgs/icons/special/ic_hobby.svg'
import ic_phobia_special from '../public/imgs/icons/special/ic_phobia.svg'
import ic_inventory_special from '../public/imgs/icons/special/ic_inventory.svg'
import ic_information_special from '../public/imgs/icons/special/ic_information.svg'
import ic_action_special from '../public/imgs/icons/special/ic_action.svg'

import PlayerPropertyCard from "./PlayerPropertyCard";
import {useEffect, useState} from "react";
import HostPanel from "./HostPanel";

function GameSession(props) {
    const [playerState, setPlayerState] = useState(null);
    const [openDataState, setOpenDataState] = useState(null);
    const [actionsState, setActionsState] = useState(null);

    const getPlayerData = async () => {
        console.log(`/api/player_data/${props.roomIdState}?player_id=${props.playerIdState}`)
        const response = await fetch(`/api/player_data/${props.roomIdState}?player_id=${props.playerIdState}`)
        const body = await response.json();

        if (response.status !== 200)
            throw Error(body.message)
        return body;
    };

    const getOpenData = async () => {
        const response = await fetch('/api/players_open_data/10')
        const body = response.json()

        if (response.status !== 200)
            throw Error(body.message)
        return body
    }

    const getActionsData = async () => {
        const response = await fetch('/api/players_votes/10')
        const body = response.json()

        if (response.status !== 200)
            throw Error(body.message)
        return body
    }

    useEffect(() => {
        getPlayerData()
            .then(res => {
                setPlayerState(res)
            })
            .catch(err => console.log(err));
    }, [props.playerIdState])

    useEffect(() => {
        getOpenData()
            .then(res => {
                setOpenDataState(res.players)
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getActionsData()
            .then(res => {
                setActionsState(res["items"])
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {

    }, [])

    const getPlayerProp = (key) => {
        if (playerState === null) {
            return null
        }
        return playerState[key]
    }

    const get_names_by_ids = (voted_players_ids) =>
        voted_players_ids.map((item) => {
            return openDataState[item].name
        })

    return (
        <main>
            {props.playerIdState}
            <div className="game_container">
                {props.isHost ? <HostPanel/>: null}

                <section className="game">
                    <h1>Бункер</h1>
                    <article>
                        <ol>
                            <li>
                                Запасы еды: <b>108</b> человеко-месяцев
                            </li>
                            <li>
                                Запасы воды: <b>156</b> человеко-месяцев
                            </li>
                            <li>
                                Спальные места: <b>2</b>
                            </li>
                            <li>
                                Жилая площадь бункера: <b>15</b> квадратных метров
                            </li>
                            <li>
                                Дополнительно:
                                <p>Кухня</p>
                                <p>Ванная</p>
                                <p>Туалет</p>
                                <p>Оружейная комната заперта, ключ может быть в бункере, однако его нужно найти</p>
                            </li>
                        </ol>
                        <h3>Итого в бункере могут попасть <b>2 + 1</b> человека</h3>
                    </article>
                    <div className="table">
                        <table id="overview_table">
                            <thead>
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
                            </thead>
                            <tbody>
                            {
                                openDataState !== null && openDataState
                                    .map((value, index) => (
                                        <tr key={index}>
                                            <td>{value.name}</td>
                                            <td>{value.gender}</td>
                                            <td>{value.health}</td>
                                            <td>{value.personality}</td>
                                            <td>{value.profession}</td>
                                            <td>{value.hobby}</td>
                                            <td>{value.phobia}</td>
                                            <td>{value.inventory}</td>
                                            <td>{value.information}</td>
                                        </tr>
                                    )
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                    <section className="properties">
                        <PlayerPropertyCard id="gender_card" img={!props.specialState ? ic_gender: ic_gender_special} alt="gender" name="Пол"
                                            desc={getPlayerProp("gender")}/>
                        <PlayerPropertyCard id="health_card" img={!props.specialState ? ic_health: ic_health_special} alt="health" name="Здоровье"
                                            desc={getPlayerProp("health")}/>
                        <PlayerPropertyCard id="personality_card" img={!props.specialState ? ic_personality: ic_personality_special} alt="personality"
                                            name="Черта характера" desc={getPlayerProp("personality")}/>
                        <PlayerPropertyCard id="profession_card" img={!props.specialState ? ic_profession: ic_profession_special} alt="profession"
                                            name="Специальность" desc={getPlayerProp("profession")}/>
                        <PlayerPropertyCard id="hobby_card" img={!props.specialState ? ic_hobby: ic_hobby_special} alt="hobby" name="Хобби"
                                            desc={getPlayerProp("hobby")}/>
                        <PlayerPropertyCard id="phobia_card" img={!props.specialState ? ic_phobia: ic_phobia_special} alt="phobia" name="Фобия"
                                            desc={getPlayerProp("phobia")}/>
                        <PlayerPropertyCard id="inventory_card" img={!props.specialState ? ic_inventory: ic_inventory_special} alt="inventory" name="Инвентарь"
                                            desc={getPlayerProp("inventory")}/>
                        <PlayerPropertyCard id="information_card" img={!props.specialState ? ic_information: ic_information_special} alt="information"
                                            name="Доп. сведения" desc={getPlayerProp("information")}/>
                        <PlayerPropertyCard id="action_card" img={!props.specialState ? ic_action: ic_action_special} alt="action" name="Спец. возможность"
                                            desc={getPlayerProp("action")}/>
                    </section>

                    <div className="table">
                        <table id="auxiliary_table">
                            <thead>
                            <tr>
                                <td>Выбор</td>
                                <td>Игрок</td>
                                <td>Голоса</td>
                                <td>Спец. возможность</td>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                openDataState ?
                                actionsState !== null && actionsState
                                    .map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <input className="radio_vote" type="radio" id={value.player} name="vote"/>
                                                </td>
                                                <td>{openDataState[value.player_id].name}</td>
                                                <td>{get_names_by_ids(value.voted_players_ids).join(", ")}</td>
                                                <td>{openDataState[index].action}</td>
                                            </tr>
                                        )
                                    }): null
                            }
                            </tbody>
                        </table>
                    </div>
                    <button>Submit vote</button>
                </section>
            </div>
        </main>
    )
}

export default GameSession