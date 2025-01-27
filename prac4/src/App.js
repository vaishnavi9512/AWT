import React from 'react';
import './App.css';
import { CounterProvider } from './CounterContext';
import CounterDisplay from './CounterDisplay';
import CounterControl from './CounterControl';

function App() {
    return (
        <CounterProvider>
            <div className="App">
                <CounterDisplay />
                <CounterControl />
            </div>
        </CounterProvider>
    );
}

export default App;