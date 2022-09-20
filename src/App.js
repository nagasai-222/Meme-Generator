import './App.css';
import {Main} from "./components/Main.js"
import {Contact} from './components/Contact.js';
import React from 'react'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
        <Routes>
          <Route exact path="/"  element={<Main />} />
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
  );
}
export default App;