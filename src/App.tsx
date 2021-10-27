import React from 'react';
import './App.css';
import {Switch} from "react-router-dom";
import {Routes} from "./Routes";
import {Header} from "./components/Header/Header";

function App() {
  return (
    <div className="App">
        <Header/>
            <Switch><Routes/></Switch>
    </div>
  );
}

export default App;
