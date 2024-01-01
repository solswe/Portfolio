import './App.css';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {NextUIProvider} from "@nextui-org/react";

import Nav from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import YumYumTok from "./pages/YumYumTok";
import Portfolio from "./pages/Portfolio";
import BookTok from "./pages/BookTok";
import PFT from "./pages/PersonalFinanceTracker";
import WhatUWatch from "./pages/WhatUWatch";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  return (
    <>
      <NextUIProvider>
        <main className={`text-foreground bg-background ${darkMode ? 'purple-dark' : 'light'}`}>
          <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/yumyumtok" element={<YumYumTok />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="/bookTok" element={<BookTok />}></Route>
              <Route path="/personalFinanceTracker" element={<PFT />}></Route>
              <Route path="/whatuwatch" element={<WhatUWatch />}></Route>
            </Routes>
          </Router>          
        </main>
      </NextUIProvider>
    </>
  );
}

export default App;