import { useState } from "react";
import { Employees } from "./employees/employees";
import { AbsenceRequests } from "./absence_requests/absenceRequests";
import { HomeDiv } from "./styled_components/divs";
import { Button, Link } from "@mui/material";

export const Home = ({view}) => {

  return(
    <HomeDiv>
      <h1>Home</h1>
      {view === "employees" ? (
          <Employees />
        ) : (
          <AbsenceRequests/>
      )}
    </HomeDiv>
  )
};