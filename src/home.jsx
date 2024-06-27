import { EmployeesList } from "./employees/employeesList";

export const Home = () => {
  return(
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <div>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </div>
      <EmployeesList />
    </div>
  )
};