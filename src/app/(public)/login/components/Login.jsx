"use client";

import { useState } from "react";
import { logIn, logOut, toggleModerator } from "../../../../lib/redux/features/ducks/authSlice";
import { useDispatch } from "react-redux";
import { useAppSelector} from "../../../../lib/redux/store"

export function Login() {
  const [username, setUsername] = useState();
  const {isAuth} = useAppSelector(state => state.authReducer.value)
  const dispatch = useDispatch();

  const onClickLogIn = () => {
    dispatch(logIn({username:username}))
  };

  const onClickToggle = () => {
    dispatch(toggleModerator())
  };

  const onClickLogOut = () => {
    dispatch(logOut())
  };

  return (
    <div>

      <input type="text" onChange={(e) => setUsername(e.target.value)}/>
      <br></br>
      <button onClick={onClickLogIn}>Log In</button>
      <br></br>
      <button onClick={onClickLogOut}>Log Out</button>
      <br></br>
      {isAuth && (
        <button onClick={onClickToggle}>Toggle Moderator Status</button>
      )}
    </div>
  )
}

export default Login