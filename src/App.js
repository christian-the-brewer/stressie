import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import "./App.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Welcome from "./components/Welcome"
import About from "./components/About"
import Suggestions from "./components/Suggestions"
import Survey from "./components/Survey"
import CheckIn from "./components/CheckIn"
import Rewards from "./components/Rewards"
import FindCare from "./components/FindCare"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/about' element={<About />} />
          <Route path='/survey' element={<Survey />} />
          <Route path='/suggestions' element={<Suggestions />} />
          <Route path='/check-in' element={<CheckIn />} />
          <Route path='/rewards' element={<Rewards />} />
          <Route path='/find-care' element={<FindCare />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
