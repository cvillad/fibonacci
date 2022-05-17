import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DummyPage from './DummyPage';
import Fib from './Fib';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/">Home</Link>
          <Link to="/dummypage">Dummy Page</Link>
        </header>
        <Routes>
          <Route exact path="/" component={Fib} />
          <Route path="/dummypage" component={DummyPage} />
        </Routes>
        <div>
          <Fib></Fib>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
