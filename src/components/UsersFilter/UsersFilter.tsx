import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../redux/reducers";
import { FETCH_USERS_SAGA } from "../../redux/sagas";
import "./index.css";

export const UsersFilter = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: IState) => state.users.data);
  const isLoading = useSelector((state: IState) => state.users.loading);

  console.log("users");
  console.log(users);

  useEffect(() => {
    dispatch({ type: FETCH_USERS_SAGA });

    const url = new URL(window.location.href);
    url.searchParams.set("userId", "1");
    url.searchParams.set("userId", "2");
    window.history.pushState(null, "", url.toString());
  }, []);

  return (
    <select name="users" id="users-filter" disabled={isLoading}>
      <option value="">--Please choose an option--</option>
      {users.map((user) => (
        <option
          key={user.id}
          value={user.username}
          onClick={(e) => e.stopPropagation()}
        >
          {user.username}
        </option>
      ))}
    </select>
  );
};
