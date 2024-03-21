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
    const [createdRoomIdState, setCreatedRoomIdState] = useState(null)
    const [visitorsState, setVisitorsState] = useState([])
    const [gameStarted, setGameStarted] = React.useState(false)

    initWSClient(createdRoomIdState || getConnectRoomId(), setVisitorsState)

    return (
    <div className="App">
      <BrowserRouter>
          <Navigation setSpecialState={setSpecialState} specialState={specialState}/>
        <Routes>
            <Route path="" element={<Home setGameStarted={setGameStarted} setVisitorState={setVisitorsState} setCreatedRoomIdState={setCreatedRoomIdState} />}></Route>
            <Route path="/rules" element={<Rules />}></Route>
            <Route path="/game" element={<Game gameStarted={gameStarted} setGameStarted={setGameStarted} setVisitorState={setVisitorsState} visitorState={visitorsState} createdRoomIdState={createdRoomIdState} specialState={specialState}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
