// src/App.jsx
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'; 

// Import from components
import Home from './components/home';
import About from './components/about'
import Projects from './components/projects';

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/projects">Projects</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;