import React from "react";
import { Posts } from "./components/Posts";
import { UsersFilter } from "./components/UsersFilter";
import { BrowserRouter } from "react-router-dom";

import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <h2>Posts List</h2>
        <UsersFilter />
        <Posts />
      </div>
    </BrowserRouter>
  );
}

export default App;
