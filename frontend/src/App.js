import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Films from './pages/Films';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Films />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
