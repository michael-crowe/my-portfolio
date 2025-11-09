// src/App.jsx
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'; 

// Import from components
import home from './components/home';

// Dummy Components for Navigation
const Home = () => <h1>Home - Welcome to my Portfolio!</h1>;
const About = () => <h1>About Me - Learn more about my experience.</h1>;
const Projects = () => <h1>Projects - Check out my work!</h1>;

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