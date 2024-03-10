import React, {useState} from 'react';
import './public/styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Rules from "./components/pages/Rules";
import Game from "./components/pages/Game";
import Navigation from "./components/Navigation";
import {initWSClient} from "./ws";

function App() {
    initWSClient()
    const [specialState, setSpecialState] = useState(false);
    const [createdRoomIdState, setCreatedRoomIdState] = useState(false);

    return (
    <div className="App">
      <BrowserRouter>
          <Navigation setSpecialState={setSpecialState} specialState={specialState}/>
        <Routes>
            <Route path="" element={<Home setCreatedRoomIdState={setCreatedRoomIdState} />}></Route>
            <Route path="/rules" element={<Rules />}></Route>
            <Route path="/game" element={<Game createdRoomIdState={createdRoomIdState} specialState={specialState}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
