import { Employees } from "./employees/employees";

export const Home = () => {
  return(
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <div>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </div>
      <Employees />
    </div>
  )
};