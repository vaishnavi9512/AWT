import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HelloMsg from './HelloMsg';
import SignUpForm from './SignUpForm';
import Notes from './Notes';

function App() {
    return (
        <Router>
            <div className="App">
                <nav className='nav-link'>
                    <Link to="/">Hello Message</Link>
                    <Link to="/signup">Sign-Up Form</Link>
                    <Link to="/notes">Notes</Link>
                </nav>
                <Routes>
                    <Route exact path="/" element={<HelloMsg />} />
                    <Route path="/signup" element={<SignUpForm />} />
                    <Route path="/notes" element={<Notes />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;