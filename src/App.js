import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Page from './components/Page';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Login from './pages/Login';
import { useUserStore } from './store';

const App = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
