import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter"; 
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <>
      <Link to="/counter">Counter </Link>
      <Link to="/users/eddo34"> Users</Link>
      <Routes>
        <Route path="/counter" element={<Counter /> } />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="*" element={<h1>Page Not Found.</h1>} />
      </Routes>
    </>
  );
}

export default App;