import React, {useEffect, useState} from 'react';
import './public/styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Rules from "./components/pages/Rules";
import Game from "./components/pages/Game";
import Navigation from "./components/Navigation";
import {initWSClient} from "./ws";

function App() {
    const [specialState, setSpecialState] = useState(null)
    const [openDataState, setOpenDataState] = useState(null);
    const [roomIdState, setRoomIdState] = useState(null)
    const [isHostState, setIsHostState] = useState(false)
    const [visitorsState, setVisitorsState] = useState([])
    const [gameStarted, setGameStarted] = useState(false)
    const [playerIdState, setPlayerIdState] = useState(null)
    const [votesState, setVotesState] = useState(null);


    useEffect(() => {
      initWSClient(roomIdState, setVisitorsState, setOpenDataState, votingFinishedCallback)
    },
  [roomIdState, setVisitorsState, setOpenDataState])
  
  function votingFinishedCallback(votes) {
    setVotesState(votes)
}

    return (
    <div className="App">
      <BrowserRouter>
          <Navigation setSpecialState={setSpecialState} specialState={specialState}/>
        <Routes>
            <Route path="" element={<Home setVotesState={setVotesState} setOpenDataState={setOpenDataState} setGameStarted={setGameStarted} setVisitorState={setVisitorsState} setRoomIdState={setRoomIdState} roomIdState={roomIdState} setIsHostState={setIsHostState} setPlayerIdState={setPlayerIdState}/>}></Route>
            <Route path="/rules" element={<Rules />}></Route>
            <Route path="/game" element={<Game votesState={votesState} setVotesState={setVotesState} openDataState={openDataState} setOpenDataState={setOpenDataState} isHostState={isHostState} gameStarted={gameStarted} setGameStarted={setGameStarted} setVisitorState={setVisitorsState} visitorState={visitorsState} roomIdState={roomIdState} specialState={specialState} playerIdState={playerIdState}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
