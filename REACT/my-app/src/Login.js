import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = username == "" || password == "";

  const loginFunc = () => {
    onLogin({ username, password });
  };

  const clearInputs = ()=>{
    setUsername("");
    setPassword("");
};

  return (
    <div>
      <input
        value={username}
        type="login"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        autofocus="true"                                       //unica modifica
      ></input>
      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button disabled={isDisabled} onClick={loginFunc}>
        Login
      </button>
      <button onClick={clearInputs}>Reset</button>
    </div>
  );
}

export default Login;