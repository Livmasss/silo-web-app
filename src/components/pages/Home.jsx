import React, {useRef, useState} from 'react';
import "../../public/styles/home.css"
import {useNavigate} from 'react-router-dom';
import {joinToRoom as sendJoinMessage, subscribeGameStarted, subscribeOpenPropertyMessage, subscribeRoomVisitors} from "../../ws";

let roomRef
let navigate

function Home(props) {
    const [usernameState, setUsernameState] = useState(null);
    roomRef = useRef(null);
    navigate = useNavigate()

    return (
        <div className="home">
            <article className="introduction">
                Добро пожаловать в игру "<span>Бункер</span>"!<br/>
                Твоя основная задача - попасть в бункер<br/>
                В игре ты получаешь уникального персонажа, которым постараешься доказать всем, что именно ты должен попасть в бункер, чтобы спастись!<br/>
                Ты должен быть готов к любым препятствиям. Остальные игроки, пытающиеся выжить, будут доказывать обратное...<br/>
            </article>

            <article className="connection">
                <h4>Создать комнату</h4>

                <p><label htmlFor="new_name">Имя</label></p>
                <p><input type="text"
                          id="join_name"
                          name="room"
                          value={usernameState}
                          onChange={(e) => setUsernameState(e.target.value)}/></p>
                <p><label htmlFor="new_room">Комната</label></p>
                <p><input type="text"
                          id="new_room"
                          name="room"
                          ref={roomRef}/></p>
                <p><button onClick={createRoom}  id="create_room" value="Start game">Create room</button></p>
            </article>

            <article className="connection">
                <h4>Подключиться к комнате</h4>

                <p><label htmlFor="join_name">Имя</label></p>
                <p><input type="text"
                          id="join_name"
                          name="room"
                          value={usernameState}
                          onChange={(e) => setUsernameState(e.target.value)}/></p>
                <p><label htmlFor="join_room">Название комнаты</label></p>
                <p><input type="text"
                          id="join_room"
                          name="room"
                onInput={onRoomIdInput}/></p>
                <p><button onClick={joinToRoom} id="connect_to_room" value="Start game">Join room</button></p>
            </article>
        </div>
    )

    function createRoom() {
        postRoomCreate(usernameState).then( r => {
            props.setRoomIdState(r.room_id)
            props.setIsHostState(true)
            navigate('/game')
            props.setVisitorState([usernameState])
            props.setPlayerIdState(0)
        })
    }

    function joinToRoom() {
        const username = document.getElementById('join_name').value
        sendJoinMessage(username, props.roomIdState)
        subscribeGameStarted(props.roomIdState, gameStartedCallback)
        props.setIsHostState(false)
        navigate('/game')
    }

    function gameStartedCallback() {
        props.setGameStarted(true)
        getPlayerId(props.roomIdState, usernameState).then(r => {
            props.setPlayerIdState(r)
            console.log("Player id: " + r)
        })
    }

    function onRoomIdInput(value) {
        props.setRoomIdState(value.target.value)
    }
}

const getPlayerId = async (roomId, playerName) => {
    const response = await fetch(`api/player_id/${roomId}?player_id=${playerName}`)
    const body = response.json()

    if (!response.ok)
        return
    return body
}

const postRoomCreate = async (name) => {
    const response = await fetch("/api/rooms", {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify({
            name: name
        })
    })
    const body = response.json()

    if (!response.ok)
        return

    return body
}

export default Home