import React from "react";
import { Posts } from "./components/Posts";
import { UsersFilter } from "./components/UsersFilter";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <h2>Posts List</h2>
      <UsersFilter />
      <Posts />
    </div>
  );
}

export default App;
