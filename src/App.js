import "./App.css";
import Home from "./component/Pages/Homepage";
import Navigation from "./component/Nanbar/Navigation";
import ReactDOM from "react-dom";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Pokemon from "./component/Pages/Pokemon";
import Funtion1 from "./component/Pages/Funtion1";
import Funtion2 from "./component/Pages/Funtion2";
import Funtion3 from "./component/Pages/Funtion3";
function App() {
  console.log();

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="pokemon" element={<Pokemon />}></Route>
        <Route path="funtion1" element={<Funtion1 />}></Route>
        <Route path="funtion2" element={<Funtion2 />}></Route>
        <Route path="funtion3" element={<Funtion3 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
