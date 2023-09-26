import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../redux/reducers";
import { FETCH_USERS_SAGA } from "../../redux/sagas";
import Select from "react-select";
import { IUser } from "../../api/getUsers";
import styles from "./index.module.scss";
import colors from "../../styles/colors.module.scss";

export const UsersFilter = () => {
  const dispatch = useDispatch();
  const users: IUser[] = useSelector((state: IState) => state.users.data);
  const isLoading = useSelector((state: IState) => state.users.loading);
  console.log("users");
  console.log(users);

  useEffect(() => {
    dispatch({ type: FETCH_USERS_SAGA });
  }, []);

  const options = users.map((user) => ({
    value: user.id,
    label: user.username,
  }));

  return (
    <div className={styles.selectContainer}>
      <p>Filter posts by user</p>
      <Select
        isMulti
        defaultValue={null}
        onChange={(e) => console.log(e)}
        options={options}
        isDisabled={isLoading}
        styles={{
          option: (base) => ({
            ...base,
            backgroundColor: colors.milky,
            "&:hover": {
              backgroundColor: colors.lightViolet,
            },
          }),
        }}
      />
    </div>
  );
};
