import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getCharacterStats } from './helpers/dnd-beyond';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {getCharacterStats({ characterUrl: 'https://www.dndbeyond.com/profile/LanceHclaw/characters/10386345' }).toString()}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
          Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
