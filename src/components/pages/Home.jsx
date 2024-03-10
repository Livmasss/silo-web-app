import React, {useRef} from 'react';
import "../../public/styles/home.css"
import {useNavigate} from 'react-router-dom';
import {setConnectRoomId} from "../../roomManager";

let roomRef
let usernameRef
let navigate

function Home(props) {
    usernameRef = useRef(null);
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
                          id="new_name"
                          name="name"
                          ref={roomRef}/></p>
                <p><label htmlFor="new_room">Комната</label></p>
                <p><input type="text"
                          id="new_room"
                          name="room"
                          ref={usernameRef}/></p>
                <p><button onClick={createRoom}  id="create_room" value="Start game">Create room</button></p>
            </article>

            <article className="connection">
                <h4>Подключиться к комнате</h4>

                <p><label htmlFor="join_name">Имя</label></p>
                <p><input type="text"
                          id="join_name"
                          name="name"/></p>
                <p><label htmlFor="join_room">Название комнаты</label></p>
                <p><input type="text"
                          id="join_room"
                          name="room"
                onInput={onRoomIdInput}/></p>
                <p><button id="connect_to_room" value="Start game">Join room</button></p>
            </article>
        </div>
    )
    function createRoom() {
        postRoomCreate().then( r => {
            props.setCreatedRoomIdState(r.room_id)
            navigate('/game')
        })
    }
}

function onRoomIdInput(value) {
    setConnectRoomId(value.target.value)
}

const postRoomCreate = async () => {
    const response = await fetch("/api/rooms", {
        method: "POST"
    })
    const body = response.json()

    if (!response.ok)
        return

    return body
}

export default Home