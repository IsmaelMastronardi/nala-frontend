import { useQuery } from "react-query";
import { useState } from "react";
import { login } from "../api/auth/login";
import { Navigate } from "react-router-dom";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {status, error, data, refetch} = useQuery(
    ["login"],
    () => login(email, password),
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
    <p>Login</p>
    <button onClick={() => onClick()}>LOGIN BUTTON</button>
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
    <a href="/signup">Signup</a>
  </div>
  )
};