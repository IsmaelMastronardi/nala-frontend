import { useQuery } from "react-query";

import { useState } from "react";
import { Navigate } from "react-router-dom";
import { RegistrationDiv } from "../styled_components/registration";
import { Button, Link, TextField, Typography } from "@mui/material";
import { signup } from "../api/auth/signup";


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
    <RegistrationDiv>
      <Typography variant="h4">Signup</Typography>
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
        variant="contained"
        color="primary"
        onClick={() => onClick()}>
        SIGNUP BUTTON
      </Button>
      <Link
        href="/login"
        underline="hover"
        style={{ marginTop: '16px', display: 'block' }}
      >Login</Link>
  </RegistrationDiv>
  )
};