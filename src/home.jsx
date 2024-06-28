import { useState } from "react";
import { Employees } from "./employees/employees";
import { AbsenceRequests } from "./absence_requests/absenceRequests";

export const Home = () => {
  const [view, setView] = useState("employees");

  const toggleView = () => {
    setView(view === "employees" ? "absence_requests" : "employees");
  };

  return(
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <div>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </div>
      {view === "employees" ? (
        <>
          <button onClick={toggleView}>View Absence Requests</button>
          <Employees />
        </>
      ) : (
        <>
          <button onClick={toggleView}>View Employees</button>
          <AbsenceRequests/>
        </>
      )}
      
    </div>
  )
};