import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter"; 
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList"

function App() {
  return (
    <>
      <Link to="/counter">Counter </Link>
      <Link to="/users/eddo34"> Users</Link>
      <Routes>
        <Route path="/counter" element={<Counter /> } />
        <Route path="*" element={<h1>Page Not Found.</h1>} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;