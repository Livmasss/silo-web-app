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
import { sendFinishVotingMessage } from "../ws"

function GameSession(props) {
    const [playerState, setPlayerState] = useState(null);
    const [voteTargetState, setVoteTargetState] = useState(null)

    const [idsNamesMapping, setIdsNamesMapping] = useState({});

    const onVoteTargetChanged = e => {
        setVoteTargetState(e.target.value)
    }

    const getPlayerData = async () => {
        console.log(`/api/player_data/${props.roomIdState}?player_id=${props.playerIdState}`)
        const response = await fetch(`/api/player_data/${props.roomIdState}?player_id=${props.playerIdState}`)
        const body = await response.json();

        if (response.status !== 200)
            throw Error(body.message)
        return body;
    };

    const getOpenData = async () => {
        const response = await fetch(`/api/players_open_data/${props.roomIdState}`)
        const body = response.json()

        if (response.status !== 200)
            throw Error(body.message)
        return body
    }

    const getActionsData = async () => {
        const response = await fetch(`/api/players_votes/${props.roomIdState}`)
        const body = response.json()

        if (response.status !== 200)
            throw Error(body.message)
        return body
    }

    useEffect(() => {
        setTimeout(
            () => {
                getPlayerData()
                .then(res => {
                    setPlayerState(res)
                })
                .catch(err => console.log(err));
            }, 1000);

    }, [props.playerIdState])

    useEffect(() => {
        setTimeout(
            () => {
                getOpenData()
                .then(res => {
                    props.setOpenDataState(res.players)
    
                    if (idsNamesMapping !== null)
                        return
                    
                    res.players.forEach((element) => 
                        idsNamesMapping[element.id] = element.name
                    );
    
                    console.log(idsNamesMapping)
                })
                .catch(err => console.log(err))
            }, 1000)
    }, [])

    useEffect(() => {
        setTimeout(
            () => {
                getActionsData()
                .then(res => {
                    props.setVotesState(res["items"])
                })
                .catch(err => console.log(err))
            }, 1000)
    }, [])

    const getPlayerProp = (key) => {
        if (playerState === null) {
            return null
        }
        return playerState[key]
    }

    const postMakeVote = async (target_id) => {
        const response = await fetch(`/api/vote/${props.roomIdState}`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify({
                player_id: props.playerIdState,
                target_id: target_id
            })
        })
    }

    const submitVote = () => {
        console.log(`Vote for: ${voteTargetState}`)
        postMakeVote(voteTargetState)
    }
    
    const finishVoting = () => {
        sendFinishVotingMessage(props.roomIdState)
    }
    
    const putFinishVoting = async () => {
        const response = await fetch(`/api/vote/${props.roomIdState}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify()
        })
    }

    const get_names_by_ids = (voted_players_ids) =>
        voted_players_ids.map((id) =>
            findNameById(id)
        )

    const findNameById = (id) => {
        for (let i = 0; i < props.openDataState.length; i++)  {
            const item = props.openDataState[i]
            
            if (item.id == id) {
                return item.name
            }
        }

        return null
    }

    return (
        <main>
            <div className="game_container">
                {props.isHost ? <HostPanel finishVotingCallback={finishVoting}/>: null}

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
                                props.openDataState !== null && props.openDataState
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
                                            roomIdState={props.roomIdState} playerIdState={props.playerIdState} property_id={0} desc={getPlayerProp("gender")}
                                            setOpenDataState={props.setOpenDataState}/>
                        
                        <PlayerPropertyCard id="health_card" img={!props.specialState ? ic_health: ic_health_special} alt="health" name="Здоровье"
                                            roomIdState={props.roomIdState} playerIdState={props.playerIdState} property_id={1} desc={getPlayerProp("health")}
                                            setOpenDataState={props.setOpenDataState}/>
                        
                        <PlayerPropertyCard id="personality_card" img={!props.specialState ? ic_personality: ic_personality_special} alt="personalit
                        setOpenDataState={props.setOpenDataState}y"
                                            roomIdState={props.roomIdState} playerIdState={props.playerIdState} property_id={2} name="Черта характера" desc={getPlayerProp("personality")}/>
                        
                        <PlayerPropertyCard id="profession_card" img={!props.specialState ? ic_profession: ic_profession_special} alt="profession"
                                            roomIdState={props.roomIdState} playerIdState={props.playerIdState} property_id={3} name="Специальность" desc={getPlayerProp("profession")}
                                            setOpenDataState={props.setOpenDataState}/>
                        
                        <PlayerPropertyCard id="hobby_card" img={!props.specialState ? ic_hobby: ic_hobby_special} alt="hobby" name="Хобби"
                                            roomIdState={props.roomIdState} playerIdState={props.playerIdState} property_id={4} desc={getPlayerProp("hobby")}
                                            setOpenDataState={props.setOpenDataState}/>
                        
                        <PlayerPropertyCard id="phobia_card" img={!props.specialState ? ic_phobia: ic_phobia_special} alt="phobia" name="Фобия"
                                            roomIdState={props.roomIdState} playerIdState={props.playerIdState} property_id={5} desc={getPlayerProp("phobia")}
                                            setOpenDataState={props.setOpenDataState}/>
                        
                        <PlayerPropertyCard id="inventory_card" img={!props.specialState ? ic_inventory: ic_inventory_special} alt="inventory" name="Инвентарь"
                                            roomIdState={props.roomIdState} playerIdState={props.playerIdState} property_id={6}  desc={getPlayerProp("inventory")}
                                            setOpenDataState={props.setOpenDataState}/>
                        
                        <PlayerPropertyCard id="information_card" img={!props.specialState ? ic_information: ic_information_special} alt="information"
                                            roomIdState={props.roomIdState} playerIdState={props.playerIdState} property_id={7} name="Доп. сведения" desc={getPlayerProp("information")}
                                            setOpenDataState={props.setOpenDataState}/>
                        
                        <PlayerPropertyCard id="action_card" img={!props.specialState ? ic_action: ic_action_special} alt="action" name="Спец. возможность"
                                            roomIdState={props.roomIdState} playerIdState={props.playerIdState} property_id={8} desc={getPlayerProp("action")}
                                            setOpenDataState={props.setOpenDataState}/>
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
                                props.openDataState ?
                                props.votesState !== null && props.votesState
                                    .map((value, index) => {

                                        return (
                                            props.openDataState[index] ? <tr key={index}>
                                                <td>
                                                    <input className="radio_vote"
                                                        type="radio"
                                                        value={value.player_id}
                                                        name="vote"
                                                        onChange={onVoteTargetChanged}/>
                                                </td>
                                                <td>{findNameById(value.player_id)}</td>
                                                <td>{get_names_by_ids(value.voted_players_ids).join(", ")}</td>
                                                <td>{props.openDataState[index].action}</td>
                                                <td>{value.player_id}</td>
                                            </tr> : null
                                        )
                                    }): null
                            }
                            </tbody>
                        </table>
                    </div>
                    <button onClick={submitVote}>Submit vote</button>
                </section>
            </div>
        </main>
    )
}

export default GameSession