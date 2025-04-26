// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './Components/login.js';
import Register from './Components/register.js';
import FestEntry from './Components/festEntry.js';

const App = () => {
    const [token, setToken] = useState('');

    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/fest-entry">Fest Entry</Link>
            </nav>
            <Switch>
                <Route path="/login">
                    <Login setToken={setToken} />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/fest-entry">
                    <FestEntry token={token} />
                </Route>
                <Route path="/">
                    <h1>Welcome to the Student Login Website</h1>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;