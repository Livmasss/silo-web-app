import React from 'react';
import './public/styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Rules from "./components/pages/Rules";
import Game from "./components/pages/Game";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="/rules" element={<Rules />}></Route>
            <Route path="/game" element={<Game/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
