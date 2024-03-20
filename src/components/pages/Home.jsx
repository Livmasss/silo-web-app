import React, {useRef, useState} from 'react';
import "../../public/styles/home.css"
import {useNavigate} from 'react-router-dom';
import {setConnectRoomId} from "../../roomManager";
import {joinToRoom as sendJoinMessage, sendPing} from "../../ws";

let roomRef
let navigate

function Home(props) {
    const [username, setUsername] = useState(null);
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
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}/></p>
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
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}/></p>
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
        postRoomCreate(username).then( r => {
            console.log(username)
            props.setCreatedRoomIdState(r.room_id)
            navigate('/game')
        })
    }

    function joinToRoom() {
        sendJoinMessage(document.getElementById('join_name').value)
        sendPing()
        props.setCreatedRoomIdState(null)
        navigate('/game')
    }
}

function onRoomIdInput(value) {
    setConnectRoomId(value.target.value)
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