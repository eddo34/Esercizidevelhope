import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./Counter"; 
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
      <Routes>
        <Route path="/counter" element={<Counter /> } />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
  );
}

export default App;