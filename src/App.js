import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Login from './pages/Login';
import Page from './components/Page';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="page/:page" component={<Page />} />
        </Route>
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
