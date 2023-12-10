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
import {useEffect, useState} from "react";

function GameSession() {
    const [playerState, setPlayerState] = useState(null);
    const [openDataState, setOpenDataState] = useState(null);
    const [actionsState, setActionsState] = useState(null);

    const getPlayerData = async () => {
        const response = await fetch('/api/player_data');
        const body = await response.json();

        if (response.status !== 200)
            throw Error(body.message)
        return body;
    };

    const getOpenData = async () => {
        const response = await fetch('/api/players_open_data')
        const body = response.json()

        if (response.status !== 200)
            throw Error(body.message)
        return body
    }

    const getActionsData = async () => {
        const response = await fetch('/api/actions_data')
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
    }, [])

    useEffect(() => {
        getOpenData()
            .then(res => {
                setOpenDataState(res)
            })
            .catch(err => console.log(err))
    }, [])


    useEffect(() => {
        getActionsData()
            .then(res => {
                setActionsState(res)
            })
            .catch(err => console.log(err))
    }, [])

    const getPlayerProp = (key) => {
        if (playerState === null) {
            return null
        }
        return playerState[key]
    }

    return (
        <main className="connection">
            <div className="game">
                <h1>Бункер</h1>
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
                            actionsState !== null && actionsState
                                .map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <input type="radio" id={value.player} name="vote" checked/>
                                            </td>
                                            <td>{value.player}</td>
                                            <td>{value.votes}</td>
                                            <td>{value.action}</td>
                                        </tr>
                                    )
                                })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default GameSession