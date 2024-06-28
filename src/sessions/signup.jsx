import { useQuery } from "react-query";
import { signup } from "../api";
import { useState } from "react";
import { Navigate } from "react-router-dom";


export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {status, error, data, refetch} = useQuery(
    ["signup"],
    () => signup(email, password),
    {
      retry: false,
      enabled: false
    }
  );

  const onClick = () => {
    if(email && password){
      refetch();
    }
  };

  if(status === 'success'){
    return <Navigate to="/" replace />;
  }

  return(
    <div>
    <p>Signup</p>
    {error && <p>Error: {error.message}</p>}
    <button onClick={() => onClick()}>SIGNUP BUTTON</button>
    <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        type="pasword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
    <a href="/login">Login</a>
  </div>
  )
};