import React from "react";
import "./App.css";
import { Posts } from "./components/Posts";
import { UsersFilter } from "./components/UsersFilter";

function App() {
  return (
    <div className="App">
      <div>PostsList</div>
      <UsersFilter />
      <Posts />
    </div>
  );
}

export default App;
