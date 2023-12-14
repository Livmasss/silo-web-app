import React, {useRef} from 'react';
import "../../public/styles/home.css"
import Navigation from "../Navigation";
import {useNavigate} from 'react-router-dom';

let roomRef
let usernameRef
let navigate

function Home() {
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
                <p><input type="text" id="join_room" name="room"/></p>
                <p><button id="connect_to_room" value="Start game">Join room</button></p>
            </article>
        </div>
    )
}

function createRoom() {
    navigate('/game');
    return
//
//     console.log("connection")
//     fetch("/create_room", {
//         method: "POST",
//         body: JSON.stringify({
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     })
//         .then(r => {
//             alert("Post sent")
//             navigate('/game');
//         })
//         .finally(() => alert("Post failed"))
}

export default Home