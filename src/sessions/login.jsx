import { useQuery } from "react-query";
import { useState } from "react";
import { login } from "../api/auth/login";
import { Navigate } from "react-router-dom";
import { RegistrationDiv } from "../styled_components/registration";
import { Button, Link, TextField, Typography } from "@mui/material";


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
    <RegistrationDiv>
    <Typography variant="h4">Login</Typography>
    <TextField
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
    <TextField
      type="pasword"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your password"
    />
    <Button
      onClick={() => onClick()}
      variant="contained"
      color="primary"
    >LOGIN</Button>
    <Link 
    href="/signup"
    underline="hover"
    style={{ marginTop: '16px', display: 'block' }}
    >Signup</Link>
  </RegistrationDiv>
  )
};