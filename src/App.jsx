import React, {useState} from 'react';
import './public/styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Rules from "./components/pages/Rules";
import Game from "./components/pages/Game";
import Navigation from "./components/Navigation";
import {initWSClient} from "./ws";
import {getConnectRoomId} from "./roomManager";

function App() {
    const [specialState, setSpecialState] = useState(null)
    const [roomIdState, setRoomIdState] = useState(null)
    const [isHostState, setIsHostState] = useState(false)
    const [visitorsState, setVisitorsState] = useState([])
    const [gameStarted, setGameStarted] = React.useState(false)

    initWSClient(roomIdState, setVisitorsState)

    return (
    <div className="App">
      <BrowserRouter>
          <Navigation setSpecialState={setSpecialState} specialState={specialState}/>
        <Routes>
            <Route path="" element={<Home setGameStarted={setGameStarted} setVisitorState={setVisitorsState} setRoomIdState={setRoomIdState} roomIdState={roomIdState} setIsHostState={setIsHostState}/>}></Route>
            <Route path="/rules" element={<Rules />}></Route>
            <Route path="/game" element={<Game isHostState={isHostState} gameStarted={gameStarted} setGameStarted={setGameStarted} setVisitorState={setVisitorsState} visitorState={visitorsState} roomIdState={roomIdState} specialState={specialState}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
