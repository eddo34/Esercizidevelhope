import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./Counter"; 

function App() {
  return (
      <Routes>
        <Route path="/counter" element={<Counter /> } />
      </Routes>
  );
}

export default App;